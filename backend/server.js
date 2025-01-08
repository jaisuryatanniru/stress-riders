import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';  // Use named import


// Initialize environment variables


dotenv.config();

// DB connection
connectDb();

// Rest object
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
import userRoutes from './routes/userRoutes.js';  // Use import

app.use("/api/v1/authentication/user", userRoutes);



// Root route
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
