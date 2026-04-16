import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import RecursionCanvas from "../../components/RecursionCanvas/RecursionCanvas";

export default function CanvasPage() {
  const [fps, setFps] = useState(0);
  const [branchCount, setBranchCount] = useState(0);

  const navigate = useNavigate();

  return (
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
  );
}
