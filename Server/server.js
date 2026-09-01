
// backend/server.js (add to your existing file)
require("dotenv").config();
const Anthropic = require("@anthropic-ai/sdk");
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import usersRouter from './Routes/userRouter.js';
import connectDB from './Config/db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.post("/api/ask", async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: "Question is required" });

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      // Give it context that it's answering about a heritage site
      system: "You are a knowledgeable guide for a heritage/historical site. Answer visitor questions clearly and briefly, using web search for facts you're unsure of.",
      tools: [{ type: "web_search_20250305", name: "web_search" }],
      messages: [{ role: "user", content: question }],
    });

    let answer = "";
    for (const block of response.content) {
      if (block.type === "text") answer += block.text;
    }

    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get answer" });
  }
});