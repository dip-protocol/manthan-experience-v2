import { useNavigate } from "react-router-dom";

export default function Concept() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <p style={styles.killer}>
          AI is generating code faster than anyone can verify it.
        </p>

        <h1 style={styles.headline}>
          You approved the PR.
          <br />
          <span style={styles.highlight}>
            That’s not what got merged.
          </span>
        </h1>

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

      {/* PROBLEM CARDS */}
      <section style={styles.cards}>
        <div style={styles.card}>
          <h3>Approval captures intent</h3>
          <p>
            You approved a version of the code.
            <br />
            <br />
            That approval reflects a moment in time.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Systems assume it stays true</h3>
          <p>
            The system trusts that approval.
            <br />
            <br />
            Even if the underlying code changes.
          </p>
        </div>
      </section>

      {/* INSIGHT */}
      <section style={styles.centerBlock}>
        <p style={styles.transition}>
          Intent was captured.
          <br />
          Reality changed.
        </p>

        <p style={styles.impact}>
          Systems trust intent.
          <br />
          They do not verify reality.
        </p>
      </section>

      {/* INTRO MANHTHAN */}
      <section style={styles.centerBlock}>
        <h2 style={styles.sectionTitle}>
          This is the missing layer.
        </h2>

        <p style={styles.subtext}>
          Not better approvals.
          <br />
          Not more checks.
          <br />
          <br />
          A system that verifies decisions
          against actual state.
        </p>
      </section>

      {/* SYSTEM DEFINITION */}
      <section style={styles.cards}>
        <div style={styles.card}>
          <h3>Input Schema</h3>
          <p>
            Defines what data must exist
            <br />
            for a decision to be valid.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Decision Rules</h3>
          <p>
            Defines what is allowed
            <br />
            based on that data.
          </p>
        </div>
      </section>

      {/* PIPELINE */}
      <section style={styles.centerBlock}>
        <p style={styles.pipeline}>
          Validate → Check Completeness → Apply Rules → Outcome
        </p>
      </section>

      {/* OUTCOMES */}
      <section style={styles.cards}>
        <div style={styles.card}>
          <h3>ALLOW</h3>
          <p>Conditions satisfied</p>
        </div>

        <div style={styles.card}>
          <h3>BLOCK</h3>
          <p>Conditions violated</p>
        </div>

        <div style={styles.card}>
          <h3>ESCALATE</h3>
          <p>Missing information</p>
        </div>
      </section>

      {/* CATEGORY */}
      <section style={styles.centerBlock}>
        <h2 style={styles.sectionTitle}>
          Decision Infrastructure
        </h2>

        <p style={styles.subtext}>
          Systems should not trust what was approved.
          <br />
          They should verify what is true.
        </p>

        <p style={styles.impact}>
          Same input → same decision.
        </p>
      </section>

      {/* AI POSITIONING */}
      <section style={styles.centerBlock}>
        <p style={styles.subtext}>
          AI generates capability.
          <br />
          Manthan ensures correctness.
        </p>
      </section>

      {/* CTA */}
      <button
        style={styles.cta}
        onClick={() => navigate("/experience")}
      >
        See how it works →
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
    gap: "60px",
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
  },

  card: {
    width: "300px",
    background: "#0b0b0b",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center" as const,
  },

  centerBlock: {
    textAlign: "center" as const,
    maxWidth: "700px",
  },

  transition: {
    fontSize: "20px",
    marginBottom: "12px",
  },

  impact: {
    fontSize: "22px",
    fontWeight: 600,
  },

  sectionTitle: {
    fontSize: "32px",
    fontWeight: 600,
  },

  pipeline: {
    fontSize: "18px",
    color: "#4ade80",
    marginTop: "10px",
  },

  cta: {
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