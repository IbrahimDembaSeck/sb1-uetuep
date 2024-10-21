import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import Chat from '../models/Chat.js';
import auth from '../middleware/auth.js';

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post('/', auth, async (req, res) => {
  try {
    const { message } = req.body;
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: message,
      max_tokens: 150
    });
    const response = completion.data.choices[0].text.trim();
    await Chat.create({ message, response, UserId: req.user.id });
    res.json({ response });
  } catch (error) {
    res.status(500).json({ message: 'Error processing chat' });
  }
});

router.get('/history', auth, async (req, res) => {
  try {
    const chats = await Chat.findAll({ where: { UserId: req.user.id } });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chat history' });
  }
});

export default router;