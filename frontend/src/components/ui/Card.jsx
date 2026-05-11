import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glass = false,
  padding = 'md',
  ...props 
}) => {
  const baseClasses = 'rounded-lg border transition-all duration-300';
  
  const paddingSizes = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const variants = glass 
    ? 'glass-morphism border-white/20 dark:border-white/10'
    : 'bg-light-card dark:bg-dark-card border-light-border dark:border-dark-border';

  const classes = `${baseClasses} ${variants} ${paddingSizes[padding]} ${className} ${hover ? 'card-hover' : ''}`;

  const motionProps = hover ? {
    whileHover: { 
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
    transition: { type: "spring", stiffness: 300, damping: 20 }
  } : {};

  return (
    <motion.div
      className={classes}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
