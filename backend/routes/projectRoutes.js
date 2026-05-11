import express from 'express';
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';

const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects (with optional filtering)
// @access  Public
router.get('/', getProjects);

// @route   GET /api/projects/:id
// @desc    Get single project by ID
// @access  Public
router.get('/:id', getProjectById);

// @route   POST /api/projects
// @desc    Create a new project
// @access  Private (add auth middleware for production)
router.post('/', createProject);

// @route   PUT /api/projects/:id
// @desc    Update a project
// @access  Private
router.put('/:id', updateProject);

// @route   DELETE /api/projects/:id
// @desc    Delete a project
// @access  Private
router.delete('/:id', deleteProject);

export default router;
