export default function Footer() {
  return (
    <footer style={styles.footer}>
      {/* BRAND */}
      <div style={styles.section}>
        <h3 style={styles.brand}>Manthan</h3>
        <p style={styles.text}>
          Decision Infrastructure for an AI-driven world.
        </p>
      </div>

      {/* STORY */}
      <div style={styles.section}>
        <h4 style={styles.heading}>Why Manthan</h4>
        <p style={styles.text}>
          Born from AI.
          <br />
          Built to solve its challenges and unlock its potential.
        </p>

        <a href="/founder" style={styles.link}>
          Read the story →
        </a>
      </div>

      {/* APPLICATIONS */}
      <div style={styles.section}>
        <h4 style={styles.heading}>Applications</h4>
        <p style={styles.text}>
          Railway signalling
          <br />
          Aviation systems
          <br />
          Healthcare
          <br />
          Financial systems
          <br />
          Software systems
        </p>
      </div>

      {/* CONTACT */}
      <div style={styles.section}>
        <h4 style={styles.heading}>Contact</h4>

        <a
          href="mailto:founder@manthan.systems"
          style={styles.link}
        >
          founder@manthan.systems
        </a>

        <a
          href="https://www.linkedin.com/in/pavancharak/"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          LinkedIn →
        </a>
      </div>

      {/* BOTTOM */}
      <div style={styles.bottom}>
        <p style={styles.small}>
          © {new Date().getFullYear()} Manthan. Every decision is traceable,
          auditable, and built for trust.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "120px",
    padding: "60px 20px 30px",
    background: "#050505",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    display: "flex",
    flexWrap: "wrap" as const,
    justifyContent: "space-between",
    gap: "40px",
  },

  section: {
    minWidth: "180px",
    maxWidth: "250px",
  },

  brand: {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "10px",
  },

  heading: {
    fontSize: "14px",
    marginBottom: "10px",
    color: "#aaa",
  },

  text: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.6)",
    lineHeight: 1.6,
  },

  link: {
    display: "block",
    marginTop: "8px",
    fontSize: "13px",
    color: "#4ade80",
    textDecoration: "none",
  },

  bottom: {
    width: "100%",
    marginTop: "40px",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    paddingTop: "20px",
  },

  small: {
    fontSize: "12px",
    color: "rgba(255,255,255,0.4)",
    textAlign: "center" as const,
  },
};