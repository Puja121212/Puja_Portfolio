import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';
import Loading from '../ui/Loading.jsx';
import { GitBranch, ExternalLink, Filter, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // No filters needed - showing all projects

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching projects from API...');
      const response = await fetch('http://localhost:5002/api/projects');
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to fetch projects`);
      }
      
      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.success && data.data) {
        console.log('Projects loaded:', data.data.length);
        setProjects(data.data);
      } else {
        throw new Error(data.message || 'Invalid API response format');
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError(err.message);
      
      // Always use fallback data if API fails
      console.log('Using fallback sample data...');
      const sampleData = getSampleProjects();
      setProjects(sampleData);
      console.log('Sample projects loaded:', sampleData.length);
    } finally {
      setLoading(false);
    }
  };

  
  const getSampleProjects = () => [
    {
      _id: 'ai-todo-app',
      title: 'AI-Powered Task Management System',
      description: 'A comprehensive full-stack task management application with intelligent AI-powered task generation and automated workflow management.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Google Gemini AI', 'Tailwind CSS', 'Recharts', 'Axios'],
      githubLink: 'https://github.com/yourusername/ai-task-management',
      liveLink: 'https://ai-task-management-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
      category: 'Fullstack',
      featured: true
    },
    {
      _id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      liveLink: 'https://ecommerce-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
      category: 'Fullstack',
      featured: true
    },
    {
      _id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/taskmanager',
      liveLink: 'https://taskmanager-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600',
      category: 'Fullstack',
      featured: true
    },
    {
      _id: '3',
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and interactive weather maps.',
      techStack: ['React', 'Tailwind CSS', 'Weather API', 'Chart.js'],
      githubLink: 'https://github.com/yourusername/weather-app',
      liveLink: 'https://weather-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1592210454359-784955003024?w=600',
      category: 'Frontend',
      featured: false
    },
    {
      _id: '4',
      title: 'Blog API',
      description: 'RESTful API for a blogging platform with user authentication and content management.',
      techStack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      githubLink: 'https://github.com/yourusername/blog-api',
      liveLink: 'https://blog-api-demo.herokuapp.com',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600',
      category: 'Backend',
      featured: false
    },
    {
      _id: '5',
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations, dark mode, and contact form.',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
      githubLink: 'https://github.com/yourusername/portfolio',
      liveLink: 'https://yourportfolio.vercel.app',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600',
      category: 'Frontend',
      featured: true
    },
    {
      _id: '6',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and reporting.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Socket.io'],
      githubLink: 'https://github.com/yourusername/social-dashboard',
      liveLink: 'https://social-dashboard-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      category: 'Fullstack',
      featured: false
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

  if (loading) {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <Loading size="lg" text="Loading amazing projects..." />
          </div>
        </div>
      </section>
    );
  }

  if (error && projects.length === 0) {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-red-500 mb-4">
              <Filter className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Oops! Something went wrong
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {error}
            </p>
            <Button onClick={fetchProjects}>
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        
        {/* Projects Grid */}
        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Please check back later for amazing projects
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project._id} variants={itemVariants}>
                <Card hover className="overflow-hidden group">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        href={project.githubLink}
                        variant="secondary"
                        size="sm"
                        icon={GitBranch}
                        className="flex-1"
                      >
                        Code
                      </Button>
                      <Button
                        href={project.liveLink}
                        size="sm"
                        icon={ExternalLink}
                        className="flex-1"
                      >
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-yellow-600 dark:text-yellow-400">
              ⚠️ Showing sample data due to API connection issues. Some features may not work.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
