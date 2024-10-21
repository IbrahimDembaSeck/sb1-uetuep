import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './db.js';
import authRoutes from './routes/auth.js';
import chatRoutes from './routes/chat.js';
import feedbackRoutes from './routes/feedback.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/feedback', feedbackRoutes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});