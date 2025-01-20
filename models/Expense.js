import mongoose from 'mongoose';

// Define the Expense schema
const expenseSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
});

// Export the model using ES6 export syntax
export default mongoose.model('Expense', expenseSchema);

