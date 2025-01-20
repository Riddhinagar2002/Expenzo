

import express from 'express';  // Using ES module imports
import { signup, login } from '../controllers/authController.js';  // Correct path

const router = express.Router();

// Routes for user authentication
router.post('/signup', signup);
router.post('/login', login);

export default router;  // Export the router to use in the app
