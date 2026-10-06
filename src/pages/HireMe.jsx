import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PageTransition from '../components/PageTransition';
import { Copy } from 'lucide-react';
import resumePdf from '../assets/resume.pdf';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const HireMe = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "902bb7d7-0cf8-439b-bcb9-b5bfa2e21aae",
          subject: "New Contact from Portfolio",
          from_name: data.name,
          email: data.email,
          company: data.company || "N/A",
          message: data.message
        })
      });
      
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message: " + error.message);
      throw error; // Prevent isSubmitSuccessful from turning true
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <PageTransition title="Hire Me" description="Let's Build Something Smart Together.">
      <div className="px-6 md:px-20 max-w-7xl mx-auto py-16">
        
        <header className="mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Let's Build Something Smart Together.</h1>
          <p className="text-xl text-[var(--color-muted)] max-w-2xl">
            Open to full-time Full Stack, Backend and AI Integration roles. Fresher, graduating 2026.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Form */}
          <div className="glass-panel p-8 md:p-12 rounded-2xl">
            {isSubmitSuccessful ? (
              <div className="text-center py-20">
                <h3 className="text-3xl font-bold mb-4 text-green-500">Message Sent!</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                <div>
                  <input {...register('name')} placeholder="Name" className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-lg focus:border-[var(--color-accent)] outline-none transition-colors" />
                  {errors.name && <p className="text-[var(--color-accent)] text-sm mt-2">{errors.name.message}</p>}
                </div>
                
                <div>
                  <input {...register('email')} placeholder="Email" className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-lg focus:border-[var(--color-accent)] outline-none transition-colors" />
                  {errors.email && <p className="text-[var(--color-accent)] text-sm mt-2">{errors.email.message}</p>}
                </div>
                
                <div>
                  <input {...register('company')} placeholder="Company (Optional)" className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-lg focus:border-[var(--color-accent)] outline-none transition-colors" />
                </div>
                
                <div>
                  <textarea {...register('message')} placeholder="Message" rows={4} className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-lg focus:border-[var(--color-accent)] outline-none transition-colors resize-none" />
                  {errors.message && <p className="text-[var(--color-accent)] text-sm mt-2">{errors.message.message}</p>}
                </div>

                <button disabled={isSubmitting} type="submit" className="self-start px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors disabled:opacity-50 mt-4">
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between pb-12">
            <div>
              <a href={resumePdf} download="Kishan_Resume.pdf" className="inline-block px-8 py-4 border border-[var(--color-border)] rounded-full text-lg font-bold hover:bg-white hover:text-black transition-colors mb-16">
                Download Resume
              </a>

              <div className="flex flex-col gap-8">
                <div className="group flex flex-col items-start cursor-pointer" onClick={() => copyToClipboard('kishansadeesh13@gmail.com')}>
                  <span className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2 flex items-center gap-2">Email <Copy size={12}/></span>
                  <span className="text-2xl md:text-3xl font-medium transition-colors break-all">kishansadeesh13@gmail.com</span>
                </div>
                
                <div className="group flex flex-col items-start cursor-pointer" onClick={() => copyToClipboard('+91 9047478386')}>
                  <span className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2 flex items-center gap-2">Phone <Copy size={12}/></span>
                  <span className="text-2xl md:text-3xl font-medium transition-colors">+91 9047478386</span>
                </div>
              </div>
            </div>

            <div className="flex gap-8 mt-16 pt-8 border-t border-[var(--color-border)]">
              <a href="https://linkedin.com/in/kishansadeesh" target="_blank" rel="noreferrer" className="text-lg font-medium text-[var(--color-muted)] hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/KishanSadeesh" target="_blank" rel="noreferrer" className="text-lg font-medium text-[var(--color-muted)] hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
export default HireMe;
