import { useState } from "react";
import Header from "./components/Header";
import RecursionCanvas from "./components/RecursionCanvas";
import DocsPage from "./pages/DocsPage";

export default function App() {
  const [fps, setFps] = useState(0);
  const [branchCount, setBranchCount] = useState(0);

  const path = window.location.pathname;

  if (path === "/docs") {
    return <DocsPage />;
  }

  return (
    <>
      <Header
        fps={fps}
        branchCount={branchCount}
        onOpenDocs={() => {
          window.location.href = "/docs";
        }}
      />
      <RecursionCanvas
        onFpsChange={setFps}
        onBranchCountChange={setBranchCount}
      />
    </>
  );
}
