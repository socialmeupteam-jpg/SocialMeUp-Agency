import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const PrivacyPolicy = lazy(() => import("./pages/Privacy/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms/Terms"));
const BlogDetails = lazy(() => import("./pages/BlogDetails/BlogDetails"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));

function App() {
  return (
    <Suspense fallback={<main aria-busy="true"><p>Loading...</p></main>}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
