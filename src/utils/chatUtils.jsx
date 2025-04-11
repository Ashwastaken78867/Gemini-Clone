// import GeminiModel from "../ai/gemini";
// import { get12Hour } from "./timeFormatters";
// const createMsg = ({ msg, isBot = false, userName = "Me" }) => {
//   const currTime = new Date().getTime();
//   const newMsg = {
//     userName,
//     isBot,
//     time: currTime,
//     text: msg,
//     id: parseInt(Math.random() * 10000),
//     date: get12Hour(currTime),
//   };
//   return newMsg;
// };

// const generateAIMsg = async (prompt) => {
//     try {
//         console.log("Calling AI API with:", prompt);

//         const result = await GeminiModel.generateContent({
//             contents: [{ parts: [{ text: prompt }] }] // Proper request format
//         });

//         console.log("Full API Response:", result);

//         // Extracting text properly
//         const msg = result.response.candidates?.[0]?.content?.parts?.[0]?.text || 
//                     "Sorry, I couldn't fetch a response.";

//         console.log("AI Response:", msg);
//         return msg;
//     } catch (error) {
//         console.error("AI API Error:", error);
//         return "Sorry, I couldn't fetch a response.";
//     }
// };




// export { createMsg, generateAIMsg };



import GeminiModel from "../ai/gemini";
import { get12Hour } from "./timeFormatters";

const createMsg = ({ msg, isBot = false, userName = "Me" }) => {
  const currTime = new Date().getTime();
  const newMsg = {
    userName,
    isBot,
    time: currTime,
    text: msg,
    id: parseInt(Math.random() * 10000),
    date: get12Hour(currTime),
  };
  return newMsg;
};

const generateAIMsg = async (prompt) => {
  const result = await GeminiModel.generateContent(prompt);
  const msg = result.response.text();
  return msg;
};

export { createMsg, generateAIMsg };

