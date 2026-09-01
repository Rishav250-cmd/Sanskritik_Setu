import { useState } from "react";

function HeritageAgent() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");
    try {
      const res = await fetch("http://localhost:5050/api/ask", {
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Answer drops above the bar when there's something to show */}
      {open && (loading || answer) && (
        <div className="mb-2 w-[26rem] max-w-[90vw] bg-amber-50 border border-amber-200 rounded-xl shadow-xl px-4 py-3 max-h-56 overflow-y-auto">
          {loading ? (
            <p className="text-sm text-amber-700 italic">Thinking…</p>
          ) : (
            <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
              {answer}
            </p>
          )}
        </div>
      )}

      {/* Horizontal bar */}
      <div
        className={`flex items-center gap-2 rounded-full border border-amber-300 bg-amber-800 shadow-lg transition-all duration-200 ${
          open
            ? "opacity-100 pl-4 pr-2 py-2 w-[26rem] max-w-[90vw]"
            : "opacity-40 hover:opacity-100 px-4 py-2.5"
        }`}
      >
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 text-white text-sm font-medium tracking-wide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Agent
          </button>
        )}

        {open && (
          <>
            <span className="text-amber-100 text-sm font-medium pl-1 shrink-0">
              Agent
            </span>
            <input
              autoFocus
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about this site…"
              onKeyDown={(e) => e.key === "Enter" && handleAsk()}
              className="flex-1 min-w-0 px-2 py-1.5 text-sm text-gray-900 placeholder-gray-400 bg-white rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              onClick={handleAsk}
              disabled={loading}
              className="shrink-0 px-3 py-1.5 text-sm font-medium text-amber-900 bg-amber-50 rounded-full hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "…" : "Ask"}
            </button>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="shrink-0 w-6 h-6 flex items-center justify-center text-amber-200 hover:text-white text-lg leading-none rounded-full hover:bg-amber-700/60 transition-colors"
            >
              ×
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default HeritageAgent;