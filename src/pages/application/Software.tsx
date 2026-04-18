export default function Software() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Software Systems</h1>

      <p style={styles.text}>
        Software systems are increasingly driven by AI-generated changes.
      </p>

      <p style={styles.text}>
        Approval no longer guarantees correctness.
      </p>

      <p style={styles.textStrong}>
        Manthan ensures every deployment decision is:
      </p>

      <ul style={styles.list}>
        <li>Bound to exact code state</li>
        <li>Deterministically evaluated</li>
        <li>Fully traceable</li>
      </ul>

      <p style={styles.highlight}>
        What is approved is exactly what ships.
      </p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    padding: "80px 20px",
  },
  title: {
    fontSize: "36px",
  },
  text: {
    marginTop: "10px",
    color: "rgba(255,255,255,0.7)",
  },
  textStrong: {
    marginTop: "20px",
    fontWeight: 600,
  },
  list: {
    marginTop: "10px",
    paddingLeft: "20px",
  },
  highlight: {
    marginTop: "20px",
    color: "#4ade80",
  },
};