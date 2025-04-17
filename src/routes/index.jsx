import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* More routes to add later */}
    </Routes>
  );
}
