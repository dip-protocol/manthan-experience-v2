import { useLocation } from "react-router-dom";

export default function ProgressBar() {
  const location = useLocation();

  const steps = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Concept", path: "/concept" },
    { label: "Trust", path: "/trust" },
  ];

  const currentIndex = steps.findIndex(
    (step) => step.path === location.pathname
  );

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {steps.map((step, index) => {
          const isActive = index === currentIndex;
          const isCompleted = index < currentIndex;

          return (
            <div key={step.path} style={styles.step}>
              <div
                style={{
                  ...styles.circle,
                  background: isActive || isCompleted ? "#4ade80" : "#222",
                  color: isActive ? "#000" : "#aaa",
                }}
              >
                {index + 1}
              </div>

              <span
                style={{
                  ...styles.label,
                  color: isActive ? "#4ade80" : "rgba(255,255,255,0.5)",
                }}
              >
                {step.label}
              </span>

              {/* LINE */}
              {index !== steps.length - 1 && (
                <div
                  style={{
                    ...styles.line,
                    background:
                      index < currentIndex ? "#4ade80" : "#222",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* TEXT */}
      <p style={styles.text}>
        Step {currentIndex + 1} of {steps.length} —{" "}
        {steps[currentIndex]?.label}
      </p>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    padding: "20px 0",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "10px",
  },

  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  step: {
    display: "flex",
    alignItems: "center",
  },

  circle: {
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: 600,
  },

  label: {
    marginLeft: "6px",
    marginRight: "10px",
    fontSize: "12px",
  },

  line: {
    width: "40px",
    height: "2px",
  },

  text: {
    fontSize: "12px",
    color: "rgba(255,255,255,0.6)",
  },
};