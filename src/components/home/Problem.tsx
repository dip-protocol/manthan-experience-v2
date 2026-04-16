export default function Problem() {
  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <h3 style={styles.heading}>What actually happens</h3>
        <p>
          1. You review and approve a PR <br />
          2. New commits are pushed <br />
          3. The PR still shows approved
        </p>
      </div>

      <div style={styles.card}>
        <h3 style={styles.heading}>The problem</h3>
        <p>
          You approved earlier code.
          <br />
          But a different version can get merged.
        </p>
      </div>

      <div style={styles.card}>
        <h3 style={styles.heading}>Why it matters</h3>
        <p>
          Code can be merged
          <br />
          that no one actually reviewed.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap" as const,
  },

 card: {
  flex: 1,
  minWidth: "260px",
  background: "#0b0b0b",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  padding: "24px",
  lineHeight: 1.6,

  boxShadow: "0 0 0 1px rgba(255,255,255,0.02)", // subtle edge
},

  heading: {
    fontSize: "16px",
    marginBottom: "10px",
  },

section: {
  display: "flex",
  gap: "28px",
  flexWrap: "wrap" as const,
  width: "100%",
  maxWidth: "1100px",   // 🔥 single system width
},
};