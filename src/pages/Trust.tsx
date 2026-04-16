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

        {/* AI context */}
        <p style={styles.killer}>
          AI systems are making decisions faster than humans can verify them.
        </p>

        {/* Subtext */}
        <p style={styles.subtext}>
          Most systems give you an answer.
          <br />
          <br />
          They cannot prove why it is correct.
        </p>
      </section>

      {/* CARDS */}
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
          <h3>Same input → same decision</h3>
          <p>
            Given the same input,
            the outcome never changes.
            <br />
            <br />
            No randomness.
            <br />
            No interpretation.
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
    gap: "40px",
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
    marginTop: "20px",
  },

  card: {
    width: "300px",
    background: "#0b0b0b",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "20px",
  },

  closing: {
    marginTop: "20px",
    fontSize: "22px",
    fontWeight: 600,
    textAlign: "center" as const,
  },
};