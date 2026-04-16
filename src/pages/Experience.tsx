import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PRCard from "../components/experience/PRCard";
import Message from "../components/experience/Message";
import MergeButton from "../components/experience/MergeButton";
import CodeBlock from "../components/experience/CodeBlock";

function getExplanation(step: number) {
  switch (step) {
    case 0:
      return {
        title: "AI generates code",
        text: "AI generates code instantly. It looks correct at first glance.",
      };

    case 1:
      return {
        title: "AI code approved",
        text: "A reviewer approves the AI-generated code based on what they see.",
      };

    case 2:
      return {
        title: "AI updates code",
        text: "The AI regenerates or modifies code after approval. This version was never reviewed.",
      };

    case 3:
      return {
        title: "Validation removed",
        text: "The AI removes a critical validation check. The risk is subtle but real.",
      };

    case 4:
      return {
        title: "Manthan decision",
        text: "The approved version does not match the current AI-generated code. Manthan blocks the merge.",
      };

    default:
      return { title: "", text: "" };
  }
}

export default function Experience() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [timer, setTimer] = useState(6);

  // Auto sequence
  useEffect(() => {
    if (!isRunning) return;

    setStep(0);
    setTimer(6);

    const timeline = [
      { t: 1000, step: 1 },
      { t: 2500, step: 2 },
      { t: 4000, step: 3 },
      { t: 5500, step: 4 },
    ];

    const timers = timeline.map(({ t, step }) =>
      setTimeout(() => setStep(step), t)
    );

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(countdown);
    };
  }, [isRunning]);

  const explanation = getExplanation(step);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>AI Code Decision</h1>

      {/* Context */}
      <p style={styles.context}>
        AI writes code faster than humans can verify it.
        <br />
        You approved it.
        <br />
        But did you verify it?
      </p>

      {/* Narrative */}
      <h2 style={styles.subTitle}>
        {step === 0 && "AI generates code."}
        {step === 1 && "You approve it."}
        {step === 2 && "AI updates the code."}
        {step === 3 && "A critical check is removed."}
        {step >= 4 && "Manthan blocks it."}
      </h2>

      {/* Explanation */}
      <div style={styles.explanation}>
        <p style={styles.explTitle}>{explanation.title}</p>
        <p style={styles.explText}>{explanation.text}</p>
      </div>

      {/* PR Simulation */}
      <PRCard>
        {step === 0 && <Message text="AI generated PR" />}

        {step >= 1 && <Message text="AI-generated code approved" />}

        {step >= 2 && (
          <Message
            text="AI regenerated code after approval"
            highlight
          />
        )}

        {step >= 3 && (
          <>
            <Message
              text="AI removed validation — risk introduced"
              type="error"
            />
            <CodeBlock />
          </>
        )}

        {step >= 4 && (
          <Message
            text="BLOCKED by Manthan — AI-modified code no longer matches approved version"
            type="block"
          />
        )}

        {/* Decision */}
        <div style={{ marginTop: "16px" }}>
          <p style={styles.label}>Decision Outcome</p>
          <MergeButton blocked={step >= 4} />
        </div>
      </PRCard>

      {/* Actions */}
      <div style={styles.actions}>
        {/* Replay */}
        <button
          style={{
            ...styles.replay,
            opacity: isRunning ? 0.5 : 1,
            cursor: isRunning ? "not-allowed" : "pointer",
          }}
          disabled={isRunning}
          onClick={() => {
            setIsRunning(false);
            setTimeout(() => setIsRunning(true), 50);
          }}
        >
          {isRunning ? `Running (${timer}s)` : "Replay"}
        </button>

        {/* Product CTA */}
        <button
          style={styles.primary}
          onClick={() => navigate("/concept")}
        >
          Try your own scenario →
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    padding: "40px 20px",
  },

  title: {
    fontSize: "32px",
    fontWeight: 600,
  },

  context: {
    fontSize: "14px",
    opacity: 0.6,
    textAlign: "center" as const,
  },

  subTitle: {
    fontSize: "20px",
    color: "rgba(255,255,255,0.7)",
    textAlign: "center" as const,
  },

  explanation: {
    maxWidth: "600px",
    textAlign: "center" as const,
    background: "#0b0b0b",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "20px",
  },

  explTitle: {
    fontWeight: 600,
    marginBottom: "6px",
  },

  explText: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.7)",
  },

  label: {
    fontSize: "12px",
    opacity: 0.6,
    marginBottom: "6px",
  },

  actions: {
    display: "flex",
    gap: "12px",
    marginTop: "20px",
  },

  replay: {
    padding: "10px 18px",
    background: "transparent",
    color: "#4ade80",
    border: "1px solid #4ade80",
    borderRadius: "6px",
  },

  primary: {
    padding: "10px 18px",
    background: "#4ade80",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    fontWeight: 600,
    cursor: "pointer",
  },
};