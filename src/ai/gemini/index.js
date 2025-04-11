import { GoogleGenerativeAI } from "@google/generative-ai";

// Get API key from environment variables
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const GeminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default GeminiModel;
