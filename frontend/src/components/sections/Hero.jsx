import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Link, Download, ArrowDown } from 'lucide-react';
import Button from '../ui/Button.jsx';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const socialLinks = [
    {
      icon: GitBranch,
      href: 'https://github.com/Puja121212',
      label: 'GitHub'
    },
    {
      icon: Link,
      href: 'https://www.linkedin.com/in/pujaranibehera',
      label: 'LinkedIn'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-bg dark:via-gray-900 dark:to-primary-900/20" />
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative inline-block"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto">
              {/* Round Profile Image - Same style as About section */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-500 shadow-xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Pujarani Behera"
                  className="w-full h-full object-cover"
                  loading="eager"
                  style={{ opacity: 1 }}
                />
              </div>
              
              {/* Online Indicator */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              </motion.div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
              whileHover={{ scale: 1.05 }}
            >
              Hi, I'm <span className="gradient-text">Pujarani Behera</span>
            </motion.h1>
            
            <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'MERN Stack Expert',
                  2000,
                  'React Enthusiast',
                  2000,
                  'Node.js Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                deletionSpeed={50}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Passionate about creating beautiful, functional web applications with modern technologies. 
            I love turning ideas into reality through clean code and innovative design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              href="#projects"
              className="w-full sm:w-auto"
            >
              View Projects
            </Button>
            <Button 
              variant="secondary"
              href="/PujaRani_Behera_Resume_Master1.pdf"
              download="PujaRani_Behera_Resume_Master1.pdf"
              icon={Download}
              className="w-full sm:w-auto"
              onClick={(e) => {
                // Check if resume exists before downloading
                fetch('/PujaRani_Behera_Resume_Master1.pdf', { method: 'HEAD' })
                  .then(res => {
                    if (!res.ok) {
                      e.preventDefault();
                      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                    }
                  })
                  .catch(() => {
                    e.preventDefault();
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                  });
              }}
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <link.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <motion.a
            href="#about"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
