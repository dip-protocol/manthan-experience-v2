import { Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Founder from "./pages/Founder";
import Home from "./pages/Home";
import Concept from "./pages/Concept";
import Experience from "./pages/Experience";
import Trust from "./pages/Trust";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/founder" element={<Founder />} />
      </Routes>
    </AppLayout>
  );
}