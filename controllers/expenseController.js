import Expense from '../models/expense.js'; // Correct path to models

// Add an expense
const addExpense = async (req, res) => {
  const { date, category_id, amount, description } = req.body;
  const newExpense = new Expense({ date, category_id, amount, description });

  try {
    await newExpense.save();
    res.status(201).send(newExpense);
  } catch (err) {
    res.status(400).send('Error adding expense: ' + err.message);
  }
};

// Update an expense
const updateExpense = async (req, res) => {
  const { id } = req.params;
  const { date, category_id, amount, description } = req.body;

  try {
    const expense = await Expense.findByIdAndUpdate(id, { date, category_id, amount, description }, { new: true });
    if (!expense) {
      return res.status(404).send('Expense not found');
    }
    res.status(200).send(expense);
  } catch (err) {
    res.status(400).send('Error updating expense: ' + err.message);
  }
};

// Delete an expense
const deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    await Expense.findByIdAndDelete(id);
    res.status(200).send('Expense deleted.');
  } catch (err) {
    res.status(400).send('Error deleting expense: ' + err.message);
  }
};

// Get expenses by category
const getExpensesByCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const expenses = await Expense.find({ category_id: categoryId });
    res.status(200).send(expenses);
  } catch (err) {
    res.status(400).send('Error fetching expenses: ' + err.message);
  }
};

// Get monthly expense report
const getMonthlyReport = async (req, res) => {
  const { month, year } = req.query;

  try {
    const expenses = await Expense.aggregate([
      {
        $match: {
          date: {
            $gte: new Date(year, month - 1, 1),
            $lt: new Date(year, month, 1), // Correcting the end date
          },
        },
      },
      {
        $group: {
          _id: '$category_id',
          total: { $sum: '$amount' },
        },
      },
    ]);

    res.status(200).send(expenses);
  } catch (err) {
    res.status(400).send('Error generating report: ' + err.message);
  }
};

export { addExpense, updateExpense, deleteExpense, getExpensesByCategory, getMonthlyReport };
