import express from 'express';
import {
  createContact,
  getContacts,
  updateContactStatus,
  deleteContact
} from '../controllers/contactController.js';

const router = express.Router();

// @route   POST /api/contact
// @desc    Create a new contact message
// @access  Public
router.post('/', createContact);

// @route   GET /api/contact
// @desc    Get all contact messages (for admin)
// @access  Private (add auth middleware for production)
router.get('/', getContacts);

// @route   PUT /api/contact/:id
// @desc    Update contact status (for admin)
// @access  Private
router.put('/:id', updateContactStatus);

// @route   DELETE /api/contact/:id
// @desc    Delete contact message (for admin)
// @access  Private
router.delete('/:id', deleteContact);

export default router;
