export default function StatusBadge({ text }: { text: string }) {
  return <div style={styles.badge}>{text}</div>;
}

const styles = {
  badge: {
    color: "#4ade80",
    fontWeight: 600,
    fontSize: "15px",
  },
};