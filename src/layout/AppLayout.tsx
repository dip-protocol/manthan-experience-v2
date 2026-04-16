import Navbar from "../components/Navbar";

export default function AppLayout({ children }: any) {
  return (
    <div style={styles.page}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
  },
};