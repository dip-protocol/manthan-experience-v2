export default function Founder() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Why Manthan Exists</h1>

        <p style={styles.lead}>
          Software decisions are being made faster than humans can verify them.
        </p>

        <p style={styles.text}>
          AI writes code. Systems approve it. Code gets merged.
        </p>

        <p style={styles.text}>
          But no one knows what actually shipped.
        </p>

        <h2 style={styles.sectionTitle}>The Problem</h2>

        <p style={styles.text}>
          Approval is tied to a moment—not the actual code that gets merged.
        </p>

        <p style={styles.textStrong}>
          A different version gets shipped than what was reviewed.
        </p>

        <h2 style={styles.sectionTitle}>The Shift</h2>

        <p style={styles.text}>
          Systems trust intent.
          <br />
          Manthan verifies reality.
        </p>

        <h2 style={styles.sectionTitle}>Founder</h2>

        <p style={styles.text}>
          Built by Pavan Dev Singh Charak.
        </p>

        <div style={styles.contact}>
          <a
            href="https://www.linkedin.com/in/pavancharak/"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            LinkedIn →
          </a>

          <a
            href="mailto:founder@manthan.systems"
            style={styles.link}
          >
            founder@manthan.systems
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    padding: "60px 20px",
  },
  container: {
    maxWidth: "720px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  title: {
    fontSize: "36px",
    fontWeight: 600,
  },
  lead: {
    color: "#4ade80",
  },
  sectionTitle: {
    marginTop: "20px",
  },
  text: {
    color: "rgba(255,255,255,0.7)",
  },
  textStrong: {
    fontWeight: 600,
  },
  contact: {
    marginTop: "20px",
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#4ade80",
    textDecoration: "none",
  },
};