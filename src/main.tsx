import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import ReactDebugGuidePage from "./components/ReactDebugGuidePage"; // ✅ correct path
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/react-debug-guide" element={<ReactDebugGuidePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
