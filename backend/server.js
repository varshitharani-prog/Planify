import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

app.post("/ask-ai", async (req, res) => {
  try {

    const { prompt } = req.body;

    const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: `
You are Planify AI Assistant.

Give concise, practical answers.

Rules:
- Keep responses under 150 words.
- Use bullet points.
- Give actionable advice.
- For study topics, create short study plans.
- For productivity questions, give task-focused suggestions.
- Do not give huge textbook-style explanations.

User Question:
${prompt}
`
});

    res.json({
      reply: response.text
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Something went wrong"
    });

  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});