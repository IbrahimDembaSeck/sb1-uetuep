import express from 'express';
import Feedback from '../models/Feedback.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    await Feedback.create({ rating, comment, UserId: req.user.id });
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback' });
  }
});

export default router;