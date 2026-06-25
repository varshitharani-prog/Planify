import { useState } from "react";

function Assistant() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {

    if (!prompt.trim()) return;

    setLoading(true);

    try {

      const res = await fetch(
        "http://localhost:5000/ask-ai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt
          })
        }
      );

      const data = await res.json();

      setResponse(data.reply);

    } catch (error) {

      console.log(error);

      setResponse(
        "Unable to connect to AI Assistant."
      );

    }

    setLoading(false);
  }

  return (
    <div className="assistantPage">

      <h1>🤖 AI Productivity Assistant</h1>

      <p>
        Get study plans, productivity tips,
        interview guidance, and learning roadmaps.
      </p>

      <textarea
        value={prompt}
        onChange={(e) =>
          setPrompt(e.target.value)
        }
        placeholder="Ask anything..."
      />

      <button
        className="askBtn"
        onClick={askAI}
      >
        Ask AI
      </button>

      {loading && (
        <p className="thinking">
          Thinking...
        </p>
      )}

      {response && !loading && (
        <div className="aiResponse">
          {response}
        </div>
      )}

    </div>
  );
}

export default Assistant;