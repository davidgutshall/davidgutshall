import { useMemo, useState } from "react";

const initialOutline = [
  "Intro (2 min)",
  "Background (5 min)",
  "Discovery Questions (7 min)",
  "Value Alignment (7 min)",
  "Close (3 min)",
].join("\n");

const aiSuggestionLibrary = {
  optimize: [
    "Lead with a one-sentence value proposition tailored to hiring managers in growth-stage teams.",
    "Use a quick credibility signal: mention one measurable recruiting win from a similar role profile.",
    "Shorten background context and move into candidate priorities by minute three to keep momentum high.",
    "Frame your process as collaborative: align on outcomes first, then calibrate candidate criteria together.",
  ],
  discovery: [
    "What does success in this role look like after 30, 60, and 90 days?",
    "Which skills are non-negotiable versus coachable once someone is hired?",
    "Where has your current interview process created the most drop-off with strong candidates?",
    "If we hire the right person quickly, what business metric improves first?",
  ],
  close: [
    "Summarize aligned priorities in two bullets before discussing next steps.",
    "Offer a concrete follow-up: send a shortlist framework and timeline within 24 hours.",
    "Ask for explicit commitment on interview availability to accelerate scheduling.",
    "Close with a confidence statement tied to their goals: speed, quality, and role-fit.",
  ],
};

const actionConfig = [
  { key: "optimize", label: "Optimize My Pitch" },
  { key: "discover", label: "Add Discovery Questions" },
  { key: "close", label: "Strengthen Close" },
];

function App() {
  const [outline, setOutline] = useState(initialOutline);
  const [activeAction, setActiveAction] = useState(null);

  const suggestions = useMemo(() => {
    if (!activeAction) return [];
    if (activeAction === "discover") return aiSuggestionLibrary.discovery;
    if (activeAction === "close") return aiSuggestionLibrary.close;
    return aiSuggestionLibrary.optimize;
  }, [activeAction]);

  return (
    <main className="app-shell">
      <header className="page-header">
        <h1>AI-Powered Recruiter Call Planner</h1>
        <p className="subtitle">Intro w/ Jen Aceituno &amp; David Gutshall</p>
      </header>

      <section className="planner-grid">
        <article className="panel">
          <div className="panel-header">
            <h2>Call Outline</h2>
          </div>
          <textarea
            aria-label="Call Outline"
            className="outline-input"
            value={outline}
            onChange={(event) => setOutline(event.target.value)}
          />
        </article>

        <article className="panel">
          <div className="panel-header">
            <h2>AI Assist</h2>
            <p>Generate fast coaching prompts for this recruiter call.</p>
          </div>

          <div className="actions">
            {actionConfig.map((action) => (
              <button
                key={action.key}
                className={`assist-btn ${
                  activeAction === action.key ? "active" : ""
                }`}
                onClick={() => setActiveAction(action.key)}
                type="button"
              >
                {action.label}
              </button>
            ))}
          </div>

          <div className="suggestions">
            <h3>Recommended Enhancements</h3>
            {suggestions.length === 0 ? (
              <p className="empty-state">
                Choose an AI Assist action to generate tailored bullet-point
                suggestions.
              </p>
            ) : (
              <ul>
                {suggestions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
