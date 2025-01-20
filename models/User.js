import mongoose from 'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Export the model using ES6 export syntax
export default mongoose.model('User', userSchema);
