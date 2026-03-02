const express = require("express");
const app = express();

require("dotenv").config();
console.log("DATABASE_URL =", process.env.DATABASE_URL);

const PORT = process.env.PORT || 4000;

// Middleware: parse JSON body
app.use(express.json());

// DB connect
const dbConnect = require("./config/database");
dbConnect();

// Routes
const todoRoutes = require("./routes/todos");
app.use(todoRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 App is running at port ${PORT}`);
});