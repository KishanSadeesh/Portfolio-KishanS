import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'My Work', path: '/#my-work' },
    { name: 'Identity', path: '/identity' },
    { name: 'Engineering', path: '/engineering' },
    { name: 'Hire Me', path: '/hire-me' }
  ];

  const handleNavClick = (e, path) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(path.substring(2));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const NavItem = ({ item }) => {
    const isHash = item.path.startsWith('/#');
    const isActive = location.pathname === item.path || (isHash && location.hash === item.path.substring(1));
    
    return isHash ? (
      <a 
        href={item.path}
        onClick={(e) => handleNavClick(e, item.path)}
        className={`inline-block px-3 py-2 text-[10px] md:text-xs tracking-[0.1em] uppercase transition-colors ${isActive ? 'text-[var(--color-accent)] font-bold' : 'text-[var(--color-muted)] hover:text-white'}`}
      >
        {item.name}
      </a>
    ) : (
      <NavLink 
        to={item.path} 
        onClick={(e) => handleNavClick(e, item.path)}
        className={({ isActive }) => `inline-block px-3 py-2 text-[10px] md:text-xs tracking-[0.1em] uppercase transition-colors ${isActive ? 'text-[var(--color-accent)] font-bold' : 'text-[var(--color-muted)] hover:text-white'}`}
      >
        {item.name}
      </NavLink>
    );
  };

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] md:w-max max-w-[90vw] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] px-5 md:px-8 py-3.5 flex justify-between items-center gap-4 md:gap-16 rounded-full border ${scrolled || mobileMenuOpen ? 'bg-black/40 backdrop-blur-2xl border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>
        <Link to="/" className="text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
          Kishan S.
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white transition-transform active:scale-90" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[var(--color-bg)] flex flex-col justify-center items-center gap-8 transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {navLinks.map((item) => (
          <div key={item.name} className="text-2xl" onClick={() => setMobileMenuOpen(false)}>
             <NavItem item={item} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Navbar;
