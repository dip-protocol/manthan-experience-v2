export default function CodeBlock({
  before,
  after,
}: {
  before?: string;
  after: string;
}) {
  return (
    <div style={styles.box}>
      {before && <div style={styles.removed}>- {before}</div>}
      <div style={styles.added}>+ {after}</div>
    </div>
  );
}

const styles = {
  box: {
    background: "#111",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "13px",
  },
  removed: {
    color: "#f87171",
  },
  added: {
    color: "#4ade80",
  },
};