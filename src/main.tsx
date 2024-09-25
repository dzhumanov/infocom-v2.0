import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "./i18n.ts";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
);
