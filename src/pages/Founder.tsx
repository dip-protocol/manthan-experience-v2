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

        <div style={styles.break} />

        <h2 style={styles.sectionTitle}>The Problem</h2>

        <p style={styles.text}>
          Today, approval is tied to a moment—not to the actual code that gets merged.
        </p>

        <p style={styles.text}>
          Code changes after approval. Systems don’t notice. CI still passes.
        </p>

        <p style={styles.textStrong}>
          A different version gets shipped than what was reviewed.
        </p>

        <div style={styles.break} />

        <h2 style={styles.sectionTitle}>Why This Matters</h2>

        <p style={styles.text}>
          As AI accelerates development, this gap becomes dangerous.
        </p>

        <p style={styles.text}>
          We are moving toward a world where:
        </p>

        <ul style={styles.list}>
          <li>No one reviews final code</li>
          <li>Approvals become meaningless</li>
          <li>Trust in systems breaks</li>
        </ul>

        <p style={styles.textStrong}>
          If you cannot trace a decision, you cannot trust it.
        </p>

        <div style={styles.break} />

        <h2 style={styles.sectionTitle}>What Manthan Does</h2>

        <p style={styles.text}>
          Manthan ensures that every decision is:
        </p>

        <ul style={styles.list}>
          <li>Based on explicit inputs</li>
          <li>Evaluated against deterministic rules</li>
          <li>Fully traceable and auditable</li>
        </ul>

        <p style={styles.textStrong}>
          Approval is only valid for the exact code reviewed.
        </p>

        <div style={styles.break} />

        <h2 style={styles.sectionTitle}>Why Now</h2>

        <p style={styles.text}>
          AI is changing how software is built.
        </p>

        <p style={styles.text}>
          But decision systems have not evolved.
        </p>

        <p style={styles.textStrong}>
          Manthan is the missing layer—decision infrastructure for the AI era.
        </p>

        <div style={styles.break} />

        <h2 style={styles.sectionTitle}>Founder</h2>

        <p style={styles.text}>
          Built by Pavan Dev Singh Charak.
        </p>

        <p style={styles.text}>
          Focused on making decisions deterministic, explainable, and trustworthy.
        </p>

        {/* CONTACT (FIXED) */}
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

const styles: Record<string, React.CSSProperties> = {
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
    fontSize: "18px",
    color: "#4ade80",
  },

  sectionTitle: {
    fontSize: "22px",
    marginTop: "20px",
  },

  text: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.7)",
    lineHeight: 1.6,
  },

  textStrong: {
    fontSize: "15px",
    fontWeight: 500,
  },

  list: {
    paddingLeft: "18px",
    color: "rgba(255,255,255,0.7)",
    lineHeight: 1.6,
  },

  break: {
    height: "20px",
  },

  contact: {
    marginTop: "20px",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  link: {
    color: "#4ade80",
    textDecoration: "none",
    fontSize: "14px",
  },
};