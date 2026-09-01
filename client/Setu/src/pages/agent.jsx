import { useState } from "react";

function HeritageAgent() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setAnswer(data.answer || "Sorry, I couldn't find an answer.");
    } catch (err) {
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-sm shadow-sm">
      <h3 className="text-amber-900 font-semibold text-base mb-2">
        Ask about this site
      </h3>

      <div className="flex gap-2">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. When was this built?"
          onKeyDown={(e) => e.key === "Enter" && handleAsk()}
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <button
          onClick={handleAsk}
          disabled={loading}
          className="px-3 py-2 text-sm font-medium text-white bg-amber-700 rounded-md hover:bg-amber-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "..." : "Ask"}
        </button>
      </div>

      {answer && (
        <p className="mt-3 text-sm text-gray-800 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

export default HeritageAgent;