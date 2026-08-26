import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  return (
    <Routes>
      {/* MAIN WEBSITE ROUTES */}

      <Route path="/" element={<Home />} />

      <Route path="/portfolio" element={<Portfolio />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      <Route path="/terms" element={<Terms />} />

      <Route path="/blog/:slug" element={<BlogDetails />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
