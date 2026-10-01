import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PageTransition = ({ children, title, description, className = "" }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Kishan S` : 'Kishan S | Full Stack Developer and AI Integration Engineer'}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className={`w-full min-h-screen pt-24 ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
};
export default PageTransition;
