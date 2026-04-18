import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Concept", path: "/concept" },
    { label: "Experience", path: "/experience" },
    { label: "Trust", path: "/trust" },
  ];

  return (
    <nav style={styles.nav}>
      {/* LOGO */}
      <Link to="/" style={styles.logo}>
        Manthan
      </Link>

      {/* LINKS */}
      <div style={styles.links}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                ...styles.link,
                color: isActive
                  ? "#4ade80"
                  : "rgba(255,255,255,0.6)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#fff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isActive
                  ? "#4ade80"
                  : "rgba(255,255,255,0.6)")
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "rgba(0,0,0,0.85)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    zIndex: 1000,
  },

  logo: {
    color: "#fff",
    fontWeight: 600,
    fontSize: "18px",
    textDecoration: "none",
  },

  links: {
    display: "flex",
    gap: "28px",
  },

  link: {
    textDecoration: "none",
    fontSize: "14px",
    transition: "0.2s",
    cursor: "pointer",
  },
};