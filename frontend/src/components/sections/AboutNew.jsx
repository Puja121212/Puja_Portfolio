import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card.jsx';
import { Code, Database, Globe, Zap, User } from 'lucide-react';

const AboutNew = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code following best practices'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Designing efficient database schemas and implementing robust data solutions'
    },
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Creating beautiful, user-friendly interfaces that work seamlessly across all devices'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and excellent user experience'
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
    hidden: { y: 30, opacity: 0 },
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
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-48 rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/10 shadow-2xl shadow-primary-500/25 relative">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm" />
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-primary-500/20 rounded-2xl blur-md" />
                
                <img
                  src="/profile-photo.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-500 rounded-full border-4 border-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary-500/50">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Full Stack Developer | Building Modern Web Experiences
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate MERN Stack Developer focused on building responsive, scalable, and user-friendly web applications. 
                I enjoy transforming ideas into real-world digital experiences through clean code and modern technologies.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in React.js, Node.js, Express.js, and MongoDB, with experience building full stack projects 
                including AI-powered apps, chat applications, and productivity tools. I'm continuously 
                learning new technologies and improving my problem-solving skills to create modern, high-performance applications.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Available for work</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Remote friendly</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Core Competencies
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div key={highlight.title} variants={itemVariants}>
                <Card hover className="text-center h-full">
                  <motion.div
                    className="flex flex-col items-center space-y-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/20">
                      <highlight.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Card glass className="p-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-3xl font-bold gradient-text mb-2">10+</h4>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold gradient-text mb-2">MERN</h4>
                <p className="text-gray-600 dark:text-gray-400">Stack Expertise</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold gradient-text mb-2">2024</h4>
                <p className="text-gray-600 dark:text-gray-400">Graduate</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutNew;
