interface Props {
  fps: number;
  branchCount: number;
  onOpenDocs: () => void;
}

export default function Header({ fps, branchCount, onOpenDocs }: Props) {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Recursion</h1>
        <span className="subtitle">Generative Art</span>
      </div>

      <div className="header-center">
        <div className="metric">
          <span>FPS</span>
          <strong>{fps}</strong>
        </div>

        <div className="metric">
          <span>Branches</span>
          <strong>{branchCount}</strong>
        </div>
      </div>

      <div className="header-right">
        <button className="link-btn" onClick={onOpenDocs}>
          How it works
        </button>
      </div>
    </header>
  );
}
