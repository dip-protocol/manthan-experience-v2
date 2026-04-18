export default function Healthcare() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Healthcare Systems</h1>

      <p style={styles.text}>
        Healthcare decisions directly impact human lives.
      </p>

      <p style={styles.text}>
        Assumptions, guesses, or hidden logic cannot be tolerated.
      </p>

      <p style={styles.textStrong}>
        Manthan ensures every decision is:
      </p>

      <ul style={styles.list}>
        <li>Explicit</li>
        <li>Deterministic</li>
        <li>Explainable</li>
      </ul>

      <p style={styles.highlight}>
        No hidden reasoning. No silent risk. Only verifiable truth.
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