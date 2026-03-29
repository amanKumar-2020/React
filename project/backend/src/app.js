import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './config/database.js';
import authRouter from './routes/auth.route.js';
import errorHandler from './middleware/error.middleware.js'

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRouter);

app.use(errorHandler);

export default app;