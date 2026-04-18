export default function Trust() {
  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.headline}>
          If you cannot trace a decision,
          <br />
          <span style={styles.highlight}>
            you cannot trust it.
          </span>
        </h1>

        <p style={styles.killer}>
          AI systems are making decisions faster than humans can verify them.
        </p>

        <p style={styles.subtext}>
          Most systems give you an answer.
          <br />
          <br />
          They cannot prove why it is correct.
        </p>
      </section>

      {/* CORE TRUST PROPERTIES */}
      <section style={styles.cards}>
        <div style={styles.card}>
          <h3>Every decision is explicit</h3>
          <p>
            Inputs are defined.
            <br />
            Rules are defined.
            <br />
            <br />
            Nothing is assumed.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Deterministic by design</h3>
          <p>
            Same input → same decision.
            <br />
            <br />
            No randomness.
            <br />
            No hidden logic.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Missing data is not ignored</h3>
          <p>
            If required data is missing,
            the system does not guess.
            <br />
            <br />
            <strong>It escalates.</strong>
          </p>
        </div>
      </section>

      {/* NEW: CRITICAL TRUST LAYER */}
      <section style={styles.centerBlock}>
        <h2 style={styles.sectionTitle}>
          Decisions are not made by AI
        </h2>

        <p style={styles.subtext}>
          AI can generate inputs.
          <br />
          <br />
          But decisions are evaluated
          using explicit rules and verified data.
        </p>
      </section>

      {/* NEW: TRACEABILITY */}
      <section style={styles.cards}>
        <div style={styles.card}>
          <h3>Fully traceable</h3>
          <p>
            Every decision can be traced
            back to the exact input and rules used.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Auditable by design</h3>
          <p>
            Decisions are reproducible.
            <br />
            <br />
            Nothing is hidden.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Versioned decisions</h3>
          <p>
            Every decision is tied
            to a specific rule set.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <p style={styles.closing}>
        Trust requires proof.
        <br />
        <span style={styles.highlight}>Not probability.</span>
      </p>
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

  headline: {
    fontSize: "48px",
    lineHeight: 1.2,
    fontWeight: 600,
  },

  highlight: {
    color: "#4ade80",
  },

  killer: {
    marginTop: "16px",
    fontSize: "16px",
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
  },

  centerBlock: {
    textAlign: "center" as const,
    maxWidth: "700px",
  },

  sectionTitle: {
    fontSize: "28px",
    fontWeight: 600,
  },

  closing: {
    fontSize: "22px",
    fontWeight: 600,
    textAlign: "center" as const,
  },
};