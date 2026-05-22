import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';
import Loading from '../ui/Loading.jsx';
import { GitBranch, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('Fetching projects from API...');

      const API_URL =
        import.meta.env.VITE_API_URL || 'http://localhost:5002';

      const response = await fetch(`${API_URL}/api/projects`);

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to fetch projects`);
      }

      const data = await response.json();

      console.log('API Response:', data);

      // If database has projects
      if (data.success && data.data && data.data.length > 0) {
        console.log('Projects loaded:', data.data.length);
        setProjects(data.data);
      } else {
        // Use fallback sample data if DB empty
        console.log('Database empty. Using fallback sample data...');
        const sampleData = getSampleProjects();
        setProjects(sampleData);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);

      setError(err.message);

      // Use fallback sample data if API fails
      console.log('API failed. Using fallback sample data...');
      const sampleData = getSampleProjects();
      setProjects(sampleData);
    } finally {
      setLoading(false);
    }
  };

  const getSampleProjects = () => [
    {
      _id: '0',
      title: 'Lumina.ai',
      description:
        'Lumina.ai is an AI-powered full-stack eCommerce web application built using the MERN stack. It features Visual Search, Voice Search, AI Shopping Assistant, secure authentication, cloud image management, and a modern responsive UI.',

      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB Atlas',
        'Tailwind CSS',
        'Firebase Authentication',
        'Google Gemini AI',
        'Cloudinary'
      ],

      githubLink: 'https://github.com/Puja121212/Lumina.ai',

      liveLink:
        'https://lumina-201jd5jms-pujarani-behera-s-projects.vercel.app',

      image: '/lumina-home.png',

      category: 'Fullstack',

      featured: true
    },

    {
      _id: '1',
      title: 'AI-Todo App',
      description:
        'An intelligent task management application powered by Google Gemini AI. Features include AI-generated subtasks, secure authentication, and a responsive modern UI.',

      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Google Gemini AI', 'Tailwind CSS'],

      githubLink: 'https://github.com/Puja121212/ai-todo-app',

      liveLink: 'https://ai-todo-app-lime.vercel.app/',

      image:
        '/ai-todo.png',

      category: 'Fullstack',

      featured: true
    },
    {
  _id: '2',

  title: 'AI Powered Real-Time Chat App',

  description:
    'A full-stack real-time one-to-one chat application built with React, Node.js, Express, MongoDB, and Socket.IO. Features include JWT authentication, private messaging, typing indicators, online/offline status, AI smart replies, voice messages, reactions, avatar upload, and dark/light theme support.',

  techStack: [
    'React.js',
    'Vite',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Socket.IO',
    'JWT Authentication',
    'Google Gemini AI',
    'Cloudinary'
  ],

  githubLink: 'https://github.com/Puja121212/chat-app',

  liveLink: 'https://chat-app-seven-theta-99.vercel.app',

  image: '/chat-app.png',

  category: 'Fullstack',

  featured: true
},
{
  _id: '3',

  title: 'Drum Kit',

  description:
    'An interactive web-based drum kit application that allows users to play different drum sounds using keyboard keys or mouse clicks. Includes smooth button animations, responsive dark UI, and real-time sound effects.',

  techStack: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'DOM Manipulation',
    'Audio API',
    'Responsive Design'
  ],

  githubLink: 'https://github.com/Puja121212/drum-kit',

  image: '/drum-kit.png',

  category: 'Frontend',

  featured: false
},
{
  _id: '4',

  title: 'Dice Game',

  description:
    'A simple browser-based dice game built using HTML, CSS, and JavaScript. Two players roll dice on each page refresh, and the game automatically displays the winner or a draw result.',

  techStack: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'DOM Manipulation',
    'Responsive Design'
  ],

  githubLink: 'https://github.com/Puja121212/Dice-Game',

  image: '/dice-game.png',

  category: 'Frontend',

  featured: false
},

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
        type: 'spring',
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
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
                    {project.techStack.slice(0, 10).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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

        {error && (
          <div className="mt-8 text-center">
            <p className="text-sm text-yellow-600 dark:text-yellow-400">
              ⚠️ Showing sample data due to API connection issues.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;