import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>
        You approved this PR.
        <br />
        Then new code was added.
      </h1>

      <p style={styles.subtitle}>
        It still shows approved.
        <br />
        You never reviewed the latest changes.
      </p>

      <button
        style={styles.button}
        onClick={() => navigate("/experience")}
      >
        Try it →
      </button>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: "center" as const,
    maxWidth: "760px",
    margin: "0 auto",
    paddingTop: "40px",
  },

  title: {
    fontSize: "42px",            // bigger = more authority
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "-0.02em",    // tighter, more modern
  },

  subtitle: {
    marginTop: "18px",
    fontSize: "16px",
    opacity: 0.6,               // softer, less noisy
    fontWeight: 400,
    lineHeight: 1.6,
  },

  button: {
    marginTop: "28px",
    padding: "14px 26px",
    background: "#4ade80",
    color: "#000",
    border: "none",
    borderRadius: "8px",        // slightly smoother
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "15px",
    transition: "all 0.2s ease", // subtle polish
  },
};