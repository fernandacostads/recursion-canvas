import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import RecursionCanvas from "./components/RecursionCanvas";
import DocsPage from "./pages/DocsPage";

export default function App() {
  const [fps, setFps] = useState(0);
  const [branchCount, setBranchCount] = useState(0);

  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                fps={fps}
                branchCount={branchCount}
                onOpenDocs={() => navigate("/docs")}
              />
              <RecursionCanvas
                onFpsChange={setFps}
                onBranchCountChange={setBranchCount}
              />
            </>
          }
        />

        <Route path="/docs" element={<DocsPage />} />
      </Routes>
    </>
  );
}
