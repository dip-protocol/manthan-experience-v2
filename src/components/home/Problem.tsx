export default function Problem() {
  return (
    <section style={styles.container}>
      <div style={styles.card}>
        <h3>You approved AI-generated code</h3>
        <p>
          Then the AI updated it.
          <br />
          <br />
          That version was never reviewed.
        </p>
      </div>

      <div style={styles.cardAlt}>
        <h3>You shipped unverified AI code</h3>
        <p>
          The version that gets merged
          <br />
          is not the one that was reviewed.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "40px",
  },

  card: {
    width: "300px",
    background: "#0b0b0b",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "20px",
  },

  cardAlt: {
    width: "300px",
    background: "#0b0b0b",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "20px",
  },
};