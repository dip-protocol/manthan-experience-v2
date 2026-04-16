export default function MergeButton({ blocked }: { blocked?: boolean }) {
  return (
    <div
      style={{
        ...styles.container,
        ...(blocked ? styles.blocked : styles.allowed),
      }}
    >
      {blocked ? "Merge blocked ❌" : "Ready to merge"}
    </div>
  );
}

const styles = {
  container: {
    padding: "14px",
    borderRadius: "6px",
    textAlign: "center" as const,
    fontWeight: 600,
    marginTop: "8px",
  },

  allowed: {
    background: "#4ade80",
    color: "#000",
  },

  blocked: {
    background: "#1a1a1a",
    color: "#f87171",
    border: "1px solid rgba(248,113,113,0.3)",
  },
};