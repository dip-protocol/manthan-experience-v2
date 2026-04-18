export default function Aviation() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Aviation Systems</h1>

      <p style={styles.text}>
        Aviation systems operate in zero-error environments.
      </p>

      <p style={styles.text}>
        A wrong decision is not recoverable — it is catastrophic.
      </p>

      <p style={styles.textStrong}>
        Manthan ensures every decision is:
      </p>

      <ul style={styles.list}>
        <li>Deterministic</li>
        <li>Traceable</li>
        <li>Auditable</li>
      </ul>

      <p style={styles.highlight}>
        Every outcome is explainable. Every decision is provable.
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