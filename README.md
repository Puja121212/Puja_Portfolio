# Puja Portfolio Website

A modern full-stack portfolio built with a React + Vite frontend and a Node.js + Express backend.

## Live Demo

> Coming soon after deployment

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Security | Helmet, rate limiting |
| Deployment | Vite build, Node server |

---

## Features

- Responsive portfolio layout for desktop and mobile
- Dark / light mode toggle
- Animated hero and skills sections
- Projects loaded from backend API
- Contact form with validation and email-ready payload
- Backend API with MongoDB data storage

---

## Setup

### Prerequisites
- Node.js v18 or newer
- MongoDB Atlas account (free tier is fine)

### 1. Clone the repository

```bash
git clone https://github.com/Puja121212/Puja_Portfolio.git
cd Puja_Portfolio
```

### 2. Configure Backend

```bash
cd backend
copy .env.example .env
# Edit backend/.env and add your MongoDB connection string
npm install
npm run dev
```

### 3. Configure Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5002`

---

## Optional: Seed sample data

```bash
cd backend
node seedData.js
```

This script inserts example project entries into MongoDB.

---

## Repository Structure

```
Puja_Portfolio/
├── backend/                # Express API server
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── frontend/               # React + Vite client
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   └── package.json
├── .gitignore              # Root ignore rules
└── README.md
```

---

## Environment Variables

### Backend (`backend/.env`)

```env
MONGODB_URI=your_mongodb_atlas_uri
PORT=5002
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5002
```

> Do not commit real `.env` files to GitHub. Use `backend/.env.example` and `frontend/.env.example` as templates.

---

## GitHub readiness

- `backend/.gitignore` is now present.
- `frontend/.gitignore` already exists.
- Root `.gitignore` covers `.env*`, `node_modules/`, build output, and log files.
- Keep credentials in `.env` only and use `backend/.env.example` for documentation.

---

## Contact

**Pujarani Behera**  
Email: pujaranibehera90786@gmail.com  
GitHub: [Puja121212](https://github.com/Puja121212)  
LinkedIn: [https://www.linkedin.com/in/pujaranibehera](https://www.linkedin.com/in/pujaranibehera)
