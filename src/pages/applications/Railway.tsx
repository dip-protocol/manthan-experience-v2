export default function Railway() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Railway Signalling</h1>

      <p style={styles.text}>
        Railway systems depend on deterministic decisions.
      </p>

      <p style={styles.text}>
        A wrong signal is not a bug — it is a catastrophe.
      </p>

      <p style={styles.textStrong}>
        Manthan ensures every signal decision is:
      </p>

      <ul style={styles.list}>
        <li>Traceable</li>
        <li>Deterministic</li>
        <li>Auditable</li>
      </ul>

      <p style={styles.highlight}>
        No assumptions. No silent failures. No ambiguity.
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