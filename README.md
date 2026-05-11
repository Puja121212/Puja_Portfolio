# Pujarani Behera — Portfolio Website

A modern, full-stack portfolio website built with the **MERN Stack** featuring smooth animations, dark mode, and a contact form connected to MongoDB.

## Live Demo

> Coming soon after deployment

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Animation | Framer Motion, React Type Animation |
| Icons | Lucide React |
| Build Tool | Vite |

---

## Features

- Responsive design (mobile + desktop)
- Dark / Light mode toggle
- Animated Hero section with TypeAnimation
- Skills section with animated progress bars
- Projects section (fetched from MongoDB API with fallback)
- Contact form with validation
- Scroll-to-top button

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier works)

### 1. Clone the repository

```bash
git clone https://github.com/Puja121212/Puja_Portfolio.git
cd Puja_Portfolio
```

### 2. Setup Backend

```bash
cd backend
cp .env.example .env
# Edit .env and add your MongoDB URI
npm install
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`  
Backend runs at: `http://localhost:5002`

---

## Project Structure

```
Puja_Portfolio/
├── frontend/           # React + Vite app
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/   # Hero, About, Skills, Projects, Contact
│   │   │   └── ui/         # Navbar, Footer, Button, Card, Loading
│   │   └── App.jsx
│   └── public/         # Static assets (profile-photo.jpg, resume.pdf)
│
└── backend/            # Express.js API
    ├── controllers/
    ├── models/
    ├── routes/
    └── server.js
```

---

## Environment Variables

### Backend (`backend/.env`)
```
MONGODB_URI=your_mongodb_atlas_uri
PORT=5002
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

> See `backend/.env.example` for reference

---

## Contact

**Pujarani Behera**  
Email: pujaranibehera90786@gmail.com  
GitHub: [Puja121212](https://github.com/Puja121212)  
LinkedIn: [pujaranibehera](https://www.linkedin.com/in/pujaranibehera)
