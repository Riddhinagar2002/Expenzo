import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';


// Import routes
import authRoutes from './routes/authRoutes.js';  // Correct path
import expenseRoutes from './routes/expenseRoutes.js';  // Correct path
import categoryRoutes from './routes/categoryRoutes.js';  // Correct path

// Initialize dotenv
dotenv.config();

// Create an instance of Express
const app = express();
const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.send('Welcome to the homepage! The Server is Running Fine.');
  });

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/categories', categoryRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
