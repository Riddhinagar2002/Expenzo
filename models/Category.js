import mongoose from 'mongoose';

// Define the Category schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

// Export the model using ES6 export syntax
export default mongoose.model('Category', categorySchema);
