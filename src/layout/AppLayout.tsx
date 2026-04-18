import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";

export default function AppLayout({ children }: any) {
  return (
    <div style={styles.page}>
      <Navbar />
      <ProgressBar />
      <main style={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
  },

  content: {
    paddingTop: "20px",
  },
};