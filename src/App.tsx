import { Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Concept from "./pages/Concept";
import Experience from "./pages/Experience";
import Trust from "./pages/Trust";
import Founder from "./pages/Founder";

// APPLICATION PAGES
import Railway from "./pages/applications/Railway.tsx";
import Aviation from "./pages/applications/Aviation.tsx";
import Healthcare from "./pages/applications/Healthcare.tsx";
import Finance from "./pages/applications/Finance.tsx";
import Software from "./pages/applications/Software.tsx";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/founder" element={<Founder />} />

        {/* APPLICATION ROUTES */}
        <Route path="/applications/railway" element={<Railway />} />
        <Route path="/applications/aviation" element={<Aviation />} />
        <Route path="/applications/healthcare" element={<Healthcare />} />
        <Route path="/applications/finance" element={<Finance />} />
        <Route path="/applications/software" element={<Software />} />
      </Routes>
    </AppLayout>
  );
}