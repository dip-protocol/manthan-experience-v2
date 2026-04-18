import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.headline}>
          AI creates possibilities.
          <br />
          <span style={styles.highlight}>
            Manthan decides what is allowed.
          </span>
        </h1>

        <p style={styles.subtext}>
          AI is powerful.
          <br />
          But power without control creates risk.
        </p>

        <button
          style={styles.cta}
          onClick={() => navigate("/experience")}
        >
          See why this matters →
        </button>

        {/* RESPONSIVE VIDEO */}
        <div style={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/ndGwvSjgXu4?rel=0&modestbranding=1"
            title="Manthan Video"
            style={styles.video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* SHIFT */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>The Shift</h2>

        <p style={styles.text}>
          AI generates code, decisions, and actions faster than ever before.
        </p>

        <p style={styles.text}>
          But speed introduces a new problem:
        </p>

        <ul style={styles.list}>
          <li>Who verifies what is actually executed?</li>
          <li>Who ensures the decision is correct?</li>
          <li>Who is accountable when things go wrong?</li>
        </ul>

        <p style={styles.strong}>
          AI optimizes for probability.
          <br />
          Manthan enforces certainty.
        </p>
      </section>

      {/* POSITIONING */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Not competing with AI</h2>

        <p style={styles.text}>Manthan is not an AI system.</p>

        <p style={styles.text}>
          It is the layer that makes AI usable in critical systems.
        </p>

        <div style={styles.card}>
          <p>AI generates possibilities.</p>
          <p style={styles.highlight}>Manthan decides what is allowed.</p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Where this matters</h2>

        <p style={styles.text}>This is bigger than software.</p>

        <div style={styles.grid}>
          <div style={styles.box}>Railway signalling</div>
          <div style={styles.box}>Aviation systems</div>
          <div style={styles.box}>Healthcare</div>
          <div style={styles.box}>Financial systems</div>
          <div style={styles.box}>Software systems</div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What Manthan ensures</h2>

        <ul style={styles.list}>
          <li>Deterministic decisions</li>
          <li>Traceable outcomes</li>
          <li>Auditable logic</li>
          <li>No hidden assumptions</li>
        </ul>
      </section>

      {/* FUTURE */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>The future shift</h2>

        <p style={styles.text}>We are moving from:</p>

        <p style={styles.strong}>“AI can do this”</p>

        <p style={styles.text}>to</p>

        <p style={styles.highlightBig}>“Should this be done?”</p>

        <p style={styles.text}>That shift defines the future.</p>
      </section>

      {/* FINAL CTA */}
      <section style={styles.hero}>
        <h2 style={styles.headlineSmall}>
          Decision Infrastructure for the AI era
        </h2>

        <button
          style={styles.cta}
          onClick={() => navigate("/concept")}
        >
          Explore Manthan →
        </button>
      </section>
    </div>
  );
}

const styles = {
  page: {
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "60px 20px",
  },

  hero: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
    marginBottom: "100px",
  },

  headline: {
    fontSize: "clamp(32px, 6vw, 52px)", // responsive text
    lineHeight: 1.2,
    fontWeight: 600,
  },

  headlineSmall: {
    fontSize: "clamp(24px, 5vw, 36px)",
    fontWeight: 600,
  },

  highlight: {
    color: "#4ade80",
  },

  highlightBig: {
    fontSize: "clamp(22px, 4vw, 28px)",
    color: "#4ade80",
    fontWeight: 600,
  },

  subtext: {
    marginTop: "20px",
    fontSize: "clamp(16px, 2.5vw, 18px)",
    color: "rgba(255,255,255,0.7)",
  },

  section: {
    maxWidth: "800px",
    margin: "0 auto",
    marginBottom: "80px",
  },

  sectionTitle: {
    fontSize: "24px",
    marginBottom: "20px",
  },

  text: {
    color: "rgba(255,255,255,0.7)",
    marginTop: "10px",
    lineHeight: 1.6,
  },

  strong: {
    marginTop: "20px",
    fontWeight: 600,
  },

  list: {
    marginTop: "10px",
    paddingLeft: "20px",
    color: "rgba(255,255,255,0.7)",
  },

  card: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    background: "#0b0b0b",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "20px",
  },

  box: {
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "14px",
  },

  cta: {
    marginTop: "30px",
    padding: "14px 28px",
    background: "#4ade80",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    fontWeight: 600,
    cursor: "pointer",
  },

  /* ✅ RESPONSIVE VIDEO FIX */
  videoWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "900px",
    margin: "40px auto 0",
    paddingBottom: "56.25%", // 16:9 ratio
    height: 0,
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
};