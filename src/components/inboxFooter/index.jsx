import { useState } from "react";
import { createMsg, generateAIMsg } from "../../utils/chatUtils";
import styles from "./inboxFooter.module.css";

const InboxFooter = ({ setMsgs }) => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault(); // Prevents form submission from reloading the page
        if (input.trim() === "") return;

        // Create user message
        const userMsg = createMsg({ msg: input, isBot: false });

        // Add user message to state
        setMsgs((prevMsgs) => [...prevMsgs, userMsg]);

        setInput(""); // Clear input field
        setLoading(true);

        try {
            // Call AI API
            const aiResponse = await generateAIMsg(input);
            console.log("API Response:", aiResponse); // ✅ Log response to console

            // Create bot message
            const botMsg = createMsg({ msg: aiResponse, isBot: true });

            // Add bot message to state
            setMsgs((prevMsgs) => [...prevMsgs, botMsg]);
        } catch (error) {
            console.error("AI API Error:", error);
        }

        setLoading(false);
    };

    return (
        <div className={styles.inboxFooter}>
            <form onSubmit={handleSend}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={styles.inboxInput}
                    placeholder="Type here..."
                />
        <button className={styles.inboxBtn}>Send</button>
                    {/* {loading ? "Thinking..." : "Send"} */}
                
            </form>
        </div>
    );
};

export default InboxFooter;
