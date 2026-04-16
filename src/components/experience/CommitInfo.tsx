export default function CommitInfo({ text }: { text: string }) {
  return <div style={styles.commit}>{text}</div>;
}

const styles = {
  commit: {
    fontSize: "12px",
    opacity: 0.6,
  },
};