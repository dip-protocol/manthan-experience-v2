import React from "react";

type Props = {
  text: string;
  highlight?: boolean;
  type?: "error" | "block";
};

export default function Message({ text, highlight, type }: Props) {
  let style = styles.base;

  if (highlight) style = { ...style, ...styles.highlight };
  if (type === "error") style = { ...style, ...styles.error };
  if (type === "block") style = { ...style, ...styles.block };

  return <p style={style}>{text}</p>;
}

const styles: Record<string, React.CSSProperties> = {
  base: {
    fontSize: "14px",
    color: "#fff",
    marginBottom: "8px",
  },

  highlight: {
    color: "#facc15",
  },

  error: {
    color: "#f87171",
  },

  block: {
    color: "#fff",
    background: "#7f1d1d",
    padding: "6px 10px",
    borderRadius: "6px",
  },
};