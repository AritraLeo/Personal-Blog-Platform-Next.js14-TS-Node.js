import express from 'express';
import connectDB from './config/db';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import postRoutes from './routes/postRoutes';

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api', postRoutes);

export default app;
