import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section style={styles.wrapper}>
      <div style={styles.cta}>
        <p style={styles.text}>
          If the code changes, the approval should not count.
        </p>

        <button
          style={styles.button}
          onClick={() => navigate("/experience")}
        >
          See it in action →
        </button>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    maxWidth: "700px",   // 🔥 aligns with Hero width
  },

  cta: {
    textAlign: "center" as const,
  },

  text: {
    fontSize: "18px",
    marginBottom: "16px",
    fontWeight: 500,
    opacity: 0.9,
  },

  button: {
    padding: "14px 24px",
    background: "#4ade80",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "15px",
  },
};