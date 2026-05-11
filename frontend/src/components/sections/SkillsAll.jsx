import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card.jsx';
import { 
  Code, 
  Database, 
  Globe, 
  Palette, 
  Server, 
  Terminal, 
  Package, 
  GitBranch,
  Circle,
  Layers,
  Box,
  Navigation,
  Zap,
  Send,
  Cloud
} from 'lucide-react';

const SkillsAll = () => {
  // Frontend skills
  const frontendSkills = [
    { name: 'React', icon: Code, level: 90, color: 'text-blue-500' },
    { name: 'JavaScript(ES6+)', icon: Terminal, level: 85, color: 'text-yellow-500' },
    { name: 'HTML5', icon: Globe, level: 95, color: 'text-orange-500' },
    { name: 'CSS3', icon: Palette, level: 90, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: Layers, level: 85, color: 'text-cyan-500' },
    { name: 'Bootstrap', icon: Box, level: 80, color: 'text-purple-500' },
    { name: 'React Router', icon: Navigation, level: 82, color: 'text-blue-400' }
  ];

  // Backend skills
  const backendSkills = [
    { name: 'Node.js', icon: Server, level: 85, color: 'text-green-500' },
    { name: 'Express.js', icon: Circle, level: 80, color: 'text-gray-700 dark:text-gray-300' },
    { name: 'MongoDB', icon: Database, level: 75, color: 'text-green-600' }
  ];

  // Tools skills
  const toolsSkills = [
    { name: 'Git', icon: GitBranch, level: 85, color: 'text-red-500' },
    { name: 'GitHub', icon: GitBranch, level: 90, color: 'text-gray-800 dark:text-white' },
    { name: 'NPM', icon: Package, level: 80, color: 'text-red-600' },
    { name: 'Vite', icon: Zap, level: 75, color: 'text-purple-600' },
    { name: 'Axios', icon: Send, level: 83, color: 'text-blue-600' },
    { name: 'Postman', icon: Package, level: 78, color: 'text-orange-600' },
    { name: 'Cloudinary', icon: Cloud, level: 70, color: 'text-cyan-600' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies I work with to build amazing web applications
          </p>
        </motion.div>

        {/* Frontend Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Frontend Development
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6" />
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {frontendSkills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card hover className="text-center p-6">
                  <motion.div
                    className="flex flex-col items-center space-y-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className={`p-4 rounded-full bg-gray-100 dark:bg-gray-800 ${skill.color}`}>
                      <skill.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="w-full">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h4>
                      
                      {/* Skill Level Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                      
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {skill.level}% Proficiency
                      </p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Backend Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Backend Development
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mb-6" />
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {backendSkills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card hover className="text-center p-6">
                  <motion.div
                    className="flex flex-col items-center space-y-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className={`p-4 rounded-full bg-gray-100 dark:bg-gray-800 ${skill.color}`}>
                      <skill.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="w-full">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h4>
                      
                      {/* Skill Level Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                      
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {skill.level}% Proficiency
                      </p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tools Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Development Tools
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-6" />
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {toolsSkills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card hover className="text-center p-6">
                  <motion.div
                    className="flex flex-col items-center space-y-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className={`p-4 rounded-full bg-gray-100 dark:bg-gray-800 ${skill.color}`}>
                      <skill.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="w-full">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h4>
                      
                      {/* Skill Level Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                      
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {skill.level}% Proficiency
                      </p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <Card glass className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I'm constantly expanding my skill set and staying up-to-date with the latest 
                web development trends. Currently exploring advanced React patterns, 
                cloud deployment strategies, and modern DevOps practices.
              </p>
              
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  Quick Learner
                </span>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  Detail Oriented
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsAll;
