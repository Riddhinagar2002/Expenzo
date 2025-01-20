
import express from 'express';  // Using ES module imports
import { addExpense, updateExpense, deleteExpense, getExpensesByCategory, getMonthlyReport } from '../controllers/expenseController.js';  // Correct path
import { authMiddleware } from '../middlewares/authMiddleware.js';  // Correct path

const router = express.Router();

// Routes for managing expenses
router.post('/', authMiddleware, addExpense);  // Add expense (requires authentication)
router.put('/:id', authMiddleware, updateExpense);  // Update expense (requires authentication)
router.delete('/:id', authMiddleware, deleteExpense);  // Delete expense (requires authentication)
router.get('/category/:categoryId', authMiddleware, getExpensesByCategory);  // Get expenses by category (requires authentication)
router.get('/monthly-report', authMiddleware, getMonthlyReport);  // Get monthly report (requires authentication)

export default router;  // Export the router to use in the app

