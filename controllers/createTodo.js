const Todo = require("../models/Todo");

// Route handler: create a new Todo
exports.createTodo = async (req, res) => {
  try {
    // 1) Extract data from request body (req.body is an object, NOT a function)
    const { title, description } = req.body;

    // 2) Basic validation (optional but recommended)
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "title and description are required",
      });
    }

    // 3) Create and save in DB (use await)
    const createdTodo = await Todo.create({ title, description });

    // 4) Send success response
    return res.status(201).json({
      success: true,
      message: "Data entered successfully",
      data: createdTodo,
    });
  } catch (error) {
    // 5) Send error response
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};