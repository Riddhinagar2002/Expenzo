import express from 'express';  // Using ES module imports
import { addCategory, getCategories } from '../controllers/categoryController.js';  // Correct path

const router = express.Router();

// Routes for managing categories
router.post('/', addCategory);  // Add a new category
router.get('/', getCategories);  // Get all categories

export default router;  // Export the router to use in the app
