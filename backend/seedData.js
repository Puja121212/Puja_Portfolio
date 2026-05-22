import mongoose from 'mongoose';
import Project from './models/Project.js';
import dotenv from 'dotenv';

dotenv.config();

const sampleProjects = [
  {
    title: 'AI Powered eCommerce Platform',
      description: 'Lumina.ai is an AI-powered full-stack eCommerce web application built using the MERN stack. It features Visual Search, Voice Search, AI Shopping Assistant, secure authentication, cloud image management, and a modern responsive UI to deliver a smart shopping experience.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Tailwind CSS', 'Firebase Authentication', 'Google Gemini AI', 'Cloudinary', 'Mongoose', 'REST APIs', 'Framer Motion', 'Axios', 'Multer', 'JWT Authentication', 'Responsive Web Design', 'AI Integration'],
      githubLink: 'https://github.com/Puja121212/Lumina.ai',
      liveLink: 'https://lumina-201jd5jms-pujarani-behera-s-projects.vercel.app',
      image: '/lumina-home.png',
      category: 'Fullstack',
      featured: true
  },
  {
    title: 'AI-Todo App',
    description: 'An intelligent task management application powered by Google Gemini AI. Features include AI-generated subtasks, secure authentication, and a responsive modern UI.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Google Gemini AI', 'Tailwind CSS'],
    githubLink: 'https://github.com/Puja121212/ai-todo-app',
    liveLink: 'https://ai-todo-app-lime.vercel.app/',
    image: '/ai-todo.png',
    category: 'Fullstack',
    featured: true
  },
  {
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
    'Mongoose',
    'Socket.IO',
    'JWT Authentication',
    'Google Gemini AI',
    'Cloudinary',
    'Multer',
    'Axios',
    'REST APIs'
  ],

  githubLink: 'https://github.com/Puja121212/chat-app',

  liveLink: 'https://chat-app-seven-theta-99.vercel.app',

  image: '/chat-app.png',

  category: 'Fullstack',

  featured: true
},
{
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
