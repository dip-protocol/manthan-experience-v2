export default function Message({
  text,
  highlight,
  type,
}: {
  text: string;
  highlight?: boolean;
  type?: "error" | "block";
}) {
  let style = styles.text;

  if (highlight) style = { ...style, color: "#facc15" };
  if (type === "error") style = { ...style, color: "#f87171" };
  if (type === "block") style = styles.block;

  return <p style={style}>{text}</p>;
}

const styles = {
  text: {
    fontSize: "14px",
  },
  block: {
    color: "#f87171",
    background: "rgba(248,113,113,0.1)",
    padding: "10px",
    borderRadius: "6px",
  },
};