export default function PRCard({ children }: any) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div>PR #42 · Update approval logic</div>
        <div style={styles.branch}>main ← feature/limit-change</div>
      </div>

      <div style={styles.body}>{children}</div>
    </div>
  );
}

const styles = {
  card: {
    width: "100%",
    maxWidth: "700px",
    background: "#0b0b0b",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    overflow: "hidden",
  },

  header: {
    padding: "12px 16px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    fontSize: "13px",
    display: "flex",
    justifyContent: "space-between",
    opacity: 0.8,
  },

  branch: {
    fontSize: "12px",
    opacity: 0.5,
  },

  body: {
    padding: "16px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "14px",
  },
};