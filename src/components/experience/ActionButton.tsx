export default function ActionButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button style={styles.btn} onClick={onClick}>
      {label}
    </button>
  );
}

const styles = {
  btn: {
    padding: "10px",
    background: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};