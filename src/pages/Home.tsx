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

        <p style={styles.killer}>
          AI is accelerating how systems are built and decisions are made.
        </p>

        <p style={styles.subtext}>
          AI generates code instantly.
          <br />
          It enables speed at scale.
          <br />
          <br />
          But speed introduces complexity.
          <br />
          And complexity demands certainty.
        </p>

        <p style={styles.impact}>
          The question is no longer speed.
          <br />
          It is: can we trust the decision?
        </p>

        <button
          style={styles.cta}
          onClick={() => navigate("/experience")}
        >
          See how this evolves →
        </button>
      </section>

      {/* PROBLEM / GAP */}
      <section style={styles.blocks}>
        <div style={styles.card}>
          <h3>AI moves faster than verification</h3>
          <p>
            AI generates and updates rapidly.
            <br />
            <br />
            Systems struggle to continuously verify
            what is actually changing.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Systems rely on assumed state</h3>
          <p>
            Approvals, tests, and signals pass.
            <br />
            <br />
            But they often reflect
            an earlier version of reality.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Decisions lack deterministic truth</h3>
          <p>
            Actions are taken on incomplete context.
            <br />
            <br />
            <strong>The system cannot guarantee correctness.</strong>
          </p>
        </div>
      </section>

      {/* MANTHAN INTRO */}
      <section style={{ ...styles.hero, marginTop: "120px" }}>
        <h2 style={styles.sectionTitle}>Manthan</h2>

        <p style={{ ...styles.subtext, marginTop: "16px" }}>
          Born from AI. Built to make its decisions reliable.
        </p>

        <p style={{ ...styles.subtext, marginTop: "16px" }}>
          Manthan introduces deterministic decision-making
          where every outcome is traceable, auditable, and verifiable.
        </p>

        <p style={{ ...styles.impact, marginTop: "20px" }}>
          Same input → same decision. Every time.
        </p>
      </section>

      {/* VALUE SHIFT */}
      <section style={{ ...styles.hero, marginTop: "120px" }}>
        <h2 style={styles.sectionTitle}>AI + Manthan</h2>

        <p style={{ ...styles.subtext, marginTop: "16px" }}>
          AI unlocks speed and capability.
          <br />
          Manthan ensures trust and correctness.
        </p>

        <div style={styles.blocks}>
          <div style={styles.card}>
            <h3 style={{ color: "#999" }}>AI Alone</h3>
            <p>
              Fast decisions
              <br />
              High capability
              <br />
              Low predictability
            </p>
          </div>

          <div style={{ ...styles.card, border: "1px solid #4ade80" }}>
            <h3 style={{ color: "#4ade80" }}>AI + Manthan</h3>
            <p>
              Deterministic outcomes
              <br />
              Explainable decisions
              <br />
              Fully auditable systems
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...styles.hero, marginTop: "120px" }}>
        <h2 style={styles.sectionTitle}>
          Unlock the full value of AI with trust.
        </h2>

        <button style={styles.cta}>
          Explore Manthan →
        </button>
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

  sectionTitle: {
    fontSize: "36px",
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
    marginTop: "40px",
  },

  card: {
    width: "300px",
    background: "#0b0b0b",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "20px",
  },
};