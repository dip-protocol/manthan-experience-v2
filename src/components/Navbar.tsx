import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  function isActive(path: string) {
    return pathname === path;
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        {/* Logo */}
        <div style={styles.logo}>
          <Link to="/" style={styles.logoText}>
            Manthan
          </Link>
        </div>

        {/* Links */}
        <div style={styles.links}>
          <NavLink to="/" label="Home" active={isActive("/")} />
          <NavLink to="/concept" label="Concept" active={isActive("/concept")} />
          <NavLink to="/experience" label="Experience" active={isActive("/experience")} />
          <NavLink to="/trust" label="Trust" active={isActive("/trust")} />
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  to,
  label,
  active,
}: {
  to: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      style={{
        ...styles.link,
        ...(active ? styles.active : {}),
      }}
    >
      {label}
    </Link>
  );
}

const styles = {
  nav: {
    width: "100%",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "16px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {},

  logoText: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 600,
    fontSize: "16px",
  },

  links: {
    display: "flex",
    gap: "20px",
  },

  link: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.6)",
    fontSize: "14px",
    transition: "color 0.2s",
  },

  active: {
    color: "#fff",
  },
};