import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.headline}>
          AI writes code.
          <br />
          <span style={styles.highlight}>
            Who decides if it should ship?
          </span>
        </h1>

        {/* Killer line */}
        <p style={styles.killer}>
          AI is generating code faster than anyone can verify it.
        </p>

        {/* Narrative */}
        <p style={styles.subtext}>
          AI generates code.
          <br />
          You approve it.
          <br />
          <br />
          Then the AI changes it again.
          <br />
          The system still says “approved.”
        </p>

        <p style={styles.impact}>
          No one reviewed what actually shipped.
        </p>

        {/* CTA */}
        <button
          style={styles.cta}
          onClick={() => navigate("/experience")}
        >
          See why this fails →
        </button>
      </section>

      {/* PROBLEM BLOCKS */}
      <section style={styles.blocks}>
        <div style={styles.card}>
          <h3>AI changes code after approval</h3>
          <p>
            You approve AI-generated code.
            <br />
            The AI updates it again.
            <br />
            <br />
            That version is never reviewed.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Your system trusts outdated approval</h3>
          <p>
            CI passes. Tests pass.
            <br />
            <br />
            The system still assumes
            the approved version is current.
          </p>
        </div>

        <div style={styles.card}>
          <h3>You ship unverified AI code</h3>
          <p>
            A different version gets merged.
            <br />
            <br />
            <strong>No one verified what actually shipped.</strong>
          </p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "60px 20px",
  },

  hero: {
    textAlign: "center" as const,
    maxWidth: "900px",
    margin: "0 auto",
    marginBottom: "100px",
  },

  headline: {
    fontSize: "52px",
    lineHeight: 1.2,
    fontWeight: 600,
  },

  highlight: {
    color: "#4ade80",
  },

  killer: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#4ade80",
  },

  subtext: {
    marginTop: "24px",
    fontSize: "18px",
    color: "rgba(255,255,255,0.7)",
    lineHeight: 1.6,
  },

  impact: {
    marginTop: "20px",
    fontSize: "20px",
    fontWeight: 600,
  },

  cta: {
    marginTop: "32px",
    padding: "14px 28px",
    background: "#4ade80",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
  },

  blocks: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap" as const,
  },

  card: {
    width: "300px",
    background: "#0b0b0b",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "20px",
  },
};