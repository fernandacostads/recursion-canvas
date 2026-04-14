import { useState } from "react";
import Header from "./components/Header";
import RecursionCanvas from "./components/RecursionCanvas";

export default function App() {
  const [fps, setFps] = useState(0);
  const [branchCount, setBranchCount] = useState(0);
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
