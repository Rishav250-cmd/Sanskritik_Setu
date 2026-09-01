// backend/server.js
import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import usersRouter from './Routes/userRouter.js';
import connectDB from './Config/db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// TODO: if you already create `app` and mount middleware/routes elsewhere
// in your real file, remove these lines and keep only what's below them.
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/users', usersRouter);
// --- end TODO block ---

app.post('/api/ask', async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: 'Question is required' });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: question,
      config: {
        systemInstruction:
          "You are a knowledgeable guide for a heritage/historical site. Answer visitor questions clearly and briefly, using web search for facts you're unsure of.",
      },
    });

    const answer = response.text || "Sorry, I couldn't find an answer.";

    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get answer' });
  }
});

// Skipping DB connection for now — /api/ask doesn't need it.
// Re-enable once you have a MONGODB_URI in your .env (see MongoDB Atlas free tier).
// connectDB();

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));