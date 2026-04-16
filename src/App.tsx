import { Routes, Route } from "react-router-dom";

import CanvasPage from "./pages/CanvasPage/CanvasPage";
import DocsPage from "./pages/DocsPage/DocsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CanvasPage />} />
      <Route path="/docs" element={<DocsPage />} />
    </Routes>
  );
}
