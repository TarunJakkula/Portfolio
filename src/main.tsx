import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RootLayout from "./Layout.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootLayout />
  </StrictMode>
);
