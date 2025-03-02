 "use client";
import { useState } from "react";

export default function ChatComponent() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        try {
            const res = await fetch("/api/chat/mistral", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userInput: input })
            });

            if (!res.ok) throw new Error(`Error: ${res.statusText}`);

            const data = await res.json();
            setResponse(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Ask something..."
            />
            <button onClick={handleSubmit}>Send</button>

            {response && <p>Response: {JSON.stringify(response)}</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
}
