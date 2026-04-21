// Entry point de la aplicación React
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Inicializa la aplicación en el nodo root del DOM.
 * Se asume que el elemento existe (definido en index.html).
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(<App />);
