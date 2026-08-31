// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";

// import App from "./App";
// import "./styles/global.css";
// import "./styles/base/animations.css";

// const rootElement = document.getElementById("root");

// if (!rootElement) {
//   throw new Error("Root element not found");
// }

// createRoot(rootElement).render(
//   <StrictMode>
//     <BrowserRouter>
//       <HelmetProvider>
//         <App />
//       </HelmetProvider>
//     </BrowserRouter>
//   </StrictMode>,
// );
import "@vitejs/plugin-react/preamble";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

import App from "./App";
import "./styles/global.css";
import "./styles/base/animations.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
);