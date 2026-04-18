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
        text: "AI generates code instantly. It accelerates development.",
      };
    case 1:
      return {
        title: "Code is approved",
        text: "You review and approve the AI-generated code.",
      };
    case 2:
      return {
        title: "AI updates the code",
        text: "AI continues improving the code after approval.",
      };
    case 3:
      return {
        title: "System does not re-verify",
        text: "The system assumes approval still applies. Reality has changed.",
      };
    case 4:
      return {
        title: "Manthan evaluates reality",
        text: "Approved version ≠ current code. Decision is re-evaluated and blocked.",
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
      {/* HEADER */}
      <h1 style={styles.title}>AI Decision Flow</h1>

      <p style={styles.context}>
        AI accelerates development. But decisions must still be verified.
      </p>

      <h2 style={styles.subTitle}>
        {step === 0 && "AI generates"}
        {step === 1 && "Decision approved"}
        {step === 2 && "State changes"}
        {step === 3 && "System assumes"}
        {step >= 4 && "Manthan verifies"}
      </h2>

      {/* EXPLANATION */}
      <div style={styles.explanation}>
        <p style={styles.explTitle}>{explanation.title}</p>
        <p style={styles.explText}>{explanation.text}</p>
      </div>

      {/* PR SIMULATION */}
      <PRCard>
        {step === 0 && <Message text="AI generated PR" />}

        {step >= 1 && <Message text="Code approved" />}

        {step >= 2 && (
          <Message text="AI updated code after approval" highlight />
        )}

        {step >= 3 && (
          <>
            <Message
              text="System state changed — verification required"
              type="error"
            />

            <CodeBlock
              before={`if (amount > limit) {
  throw new Error("Limit exceeded");
}`}
              after={`// validation removed`}
            />
          </>
        )}

        {step >= 4 && (
          <Message
            text="BLOCKED — current state does not match approved decision"
            type="block"
          />
        )}

        {/* DECISION */}
        <div style={{ marginTop: "16px" }}>
          <p style={styles.label}>Decision Outcome</p>
          <MergeButton blocked={step >= 4} />
        </div>
      </PRCard>

      {/* ACTIONS */}
      <div style={styles.actions}>
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

        <button
          style={styles.primary}
          onClick={() => navigate("/concept")}
        >
          Understand the system →
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
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
    textAlign: "center",
  },

  subTitle: {
    fontSize: "20px",
    color: "rgba(255,255,255,0.7)",
    textAlign: "center",
  },

  explanation: {
    maxWidth: "600px",
    textAlign: "center",
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