export default function Finance() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Financial Systems</h1>

      <p style={styles.text}>
        Financial systems depend on trust, compliance, and accuracy.
      </p>

      <p style={styles.text}>
        A single incorrect decision can lead to systemic failure.
      </p>

      <p style={styles.textStrong}>
        Manthan ensures every decision is:
      </p>

      <ul style={styles.list}>
        <li>Auditable</li>
        <li>Deterministic</li>
        <li>Regulation-aligned</li>
      </ul>

      <p style={styles.highlight}>
        Every decision can be traced, verified, and justified.
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