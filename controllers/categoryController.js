import Category from '../models/category.js'; // Correct path to models

// Add a new category
const addCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).send(newCategory);
  } catch (err) {
    res.status(400).send('Error adding category: ' + err.message);
  }
};

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send(categories);
  } catch (err) {
    res.status(400).send('Error fetching categories: ' + err.message);
  }
};

export { addCategory, getCategories };
