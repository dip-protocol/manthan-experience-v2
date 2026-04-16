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
        text: "AI generates code instantly. It looks correct.",
      };
    case 1:
      return {
        title: "AI code approved",
        text: "You approve AI-generated code.",
      };
    case 2:
      return {
        title: "AI updates code",
        text: "AI changes code after approval. Not reviewed.",
      };
    case 3:
      return {
        title: "Validation removed",
        text: "Critical validation removed. Risk introduced.",
      };
    case 4:
      return {
        title: "Manthan decision",
        text: "Approved version ≠ current code. Blocked.",
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
      <h1 style={styles.title}>AI Code Decision</h1>

      <p style={styles.context}>
        AI writes code faster than humans can verify it.
      </p>

      <h2 style={styles.subTitle}>
        {step === 0 && "AI generates code"}
        {step === 1 && "You approve it"}
        {step === 2 && "AI updates it"}
        {step === 3 && "Validation removed"}
        {step >= 4 && "Manthan blocks it"}
      </h2>

      <div style={styles.explanation}>
        <p>{explanation.title}</p>
        <p>{explanation.text}</p>
      </div>

      <PRCard>
        {step === 0 && <Message text="AI generated PR" />}
        {step >= 1 && <Message text="AI code approved" />}
        {step >= 2 && (
          <Message text="AI updated code" highlight />
        )}
        {step >= 3 && (
          <>
            <Message text="Validation removed" type="error" />
            <CodeBlock />
          </>
        )}
        {step >= 4 && (
          <Message text="BLOCKED by Manthan" type="block" />
        )}

        <MergeButton blocked={step >= 4} />
      </PRCard>

      <div style={styles.actions}>
        <button
          disabled={isRunning}
          onClick={() => {
            setIsRunning(false);
            setTimeout(() => setIsRunning(true), 50);
          }}
        >
          {isRunning ? `Running (${timer}s)` : "Replay"}
        </button>

        <button onClick={() => navigate("/concept")}>
          Try scenario →
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
  },

  title: {
    fontSize: "32px",
  },

  context: {
    opacity: 0.6,
  },

  subTitle: {
    fontSize: "20px",
  },

  explanation: {
    background: "#111",
    padding: "16px",
    borderRadius: "8px",
  },

  actions: {
    display: "flex",
    gap: "10px",
  },
};