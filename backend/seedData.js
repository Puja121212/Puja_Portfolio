import mongoose from 'mongoose';
import Project from './models/Project.js';
import dotenv from 'dotenv';

dotenv.config();

const sampleProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Features include product catalog, shopping cart, order management, and real-time inventory tracking.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    liveLink: 'https://ecommerce-demo.vercel.app',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    category: 'Fullstack',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features. Includes drag-and-drop functionality, team workspaces, and progress tracking.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubLink: 'https://github.com/yourusername/task-manager',
    liveLink: 'https://taskmanager-demo.vercel.app',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
    category: 'Fullstack',
    featured: true
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather application with location-based forecasts and interactive weather maps. Features include 7-day forecasts, weather alerts, and beautiful data visualizations.',
    techStack: ['React', 'Tailwind CSS', 'Weather API', 'Chart.js', 'Geolocation API'],
    githubLink: 'https://github.com/yourusername/weather-app',
    liveLink: 'https://weather-demo.vercel.app',
    image: 'https://images.unsplash.com/photo-1592210454359-784955003024?w=800&h=400&fit=crop',
    category: 'Frontend',
    featured: false
  },
  {
    title: 'Blog API',
    description: 'RESTful API for a blogging platform with user authentication and content management. Features include CRUD operations, user roles, and content moderation.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt'],
    githubLink: 'https://github.com/yourusername/blog-api',
    liveLink: 'https://blog-api-demo.herokuapp.com',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop',
    category: 'Backend',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website with smooth animations, dark mode, and contact form. Built with cutting-edge technologies and best practices for performance and SEO.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express'],
    githubLink: 'https://github.com/yourusername/portfolio',
    liveLink: 'https://yourportfolio.vercel.app',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
    category: 'Frontend',
    featured: true
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with data visualization and reporting. Track engagement, schedule posts, and analyze performance across multiple platforms.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Socket.io', 'Express'],
    githubLink: 'https://github.com/yourusername/social-dashboard',
    liveLink: 'https://social-dashboard-demo.vercel.app',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    category: 'Fullstack',
    featured: false
  },
  {
    title: 'Recipe Finder',
    description: 'A recipe discovery app with search functionality, meal planning, and grocery list generation. Features include dietary filters and nutrition information.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Recipe API'],
    githubLink: 'https://github.com/yourusername/recipe-finder',
    liveLink: 'https://recipe-finder-demo.vercel.app',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=400&fit=crop',
    category: 'Fullstack',
    featured: false
  },
  {
    title: 'URL Shortener',
    description: 'A simple URL shortening service with analytics and custom alias support. Features include click tracking, QR code generation, and link management.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'QR Code API'],
    githubLink: 'https://github.com/yourusername/url-shortener',
    liveLink: 'https://url-shortener-demo.herokuapp.com',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
    category: 'Backend',
    featured: false
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('✅ Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('🗑️ Cleared existing projects');

    // Insert sample projects
    const insertedProjects = await Project.insertMany(sampleProjects);
    console.log(`📊 Inserted ${insertedProjects.length} sample projects`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\nSample projects added:');
    insertedProjects.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title} (${project.category})`);
    });

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
};

// Run the seeding function
seedDatabase();
