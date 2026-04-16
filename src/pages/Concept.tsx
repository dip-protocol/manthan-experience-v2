import { useNavigate } from "react-router-dom";

export default function Concept() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        {/* AI framing */}
        <p style={styles.killer}>
          AI is generating code faster than anyone can verify it.
        </p>

        {/* Headline */}
        <h1 style={styles.headline}>
          You approved the PR.
          <br />
          <span style={styles.highlight}>
            That’s not what got merged.
          </span>
        </h1>

        {/* Subtext */}
        <p style={styles.subtext}>
          You approved it at one moment.
          <br />
          <br />
          Then the code changed.
          <br />
          <br />
          The system didn’t notice.
        </p>
      </section>

      {/* CARDS */}
      <section style={styles.cards}>
        <div style={styles.card}>
          <h3>You approved AI-generated code</h3>
          <p>
            Then the AI updated it.
            <br />
            <br />
            That version was never reviewed.
          </p>
        </div>

        <div style={styles.card}>
          <h3>You shipped unverified AI code</h3>
          <p>
            The version that gets merged
            <br />
            is not the one that was reviewed.
          </p>
        </div>
      </section>

      {/* TRANSITION */}
      <p style={styles.transition}>
        Nothing enforces that approval matches the actual code.
      </p>

      {/* CTA */}
      <button
        style={styles.cta}
        onClick={() => navigate("/experience")}
      >
        See how it breaks →
      </button>
    </div>
  );
}

const styles = {
  page: {
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "80px 20px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "40px",
  },

  hero: {
    textAlign: "center" as const,
    maxWidth: "800px",
  },

  killer: {
    color: "#4ade80",
    fontSize: "16px",
    marginBottom: "16px",
  },

  headline: {
    fontSize: "48px",
    lineHeight: 1.2,
    fontWeight: 600,
  },

  highlight: {
    color: "#4ade80",
  },

  subtext: {
    marginTop: "24px",
    fontSize: "18px",
    color: "rgba(255,255,255,0.7)",
    lineHeight: 1.6,
  },

  cards: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap" as const,
    justifyContent: "center",
    marginTop: "20px",
  },

  card: {
    width: "320px",
    background: "#0b0b0b",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "20px",
  },

  transition: {
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: 500,
    textAlign: "center" as const,
  },

  cta: {
    marginTop: "20px",
    padding: "14px 28px",
    background: "#4ade80",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
  },
};