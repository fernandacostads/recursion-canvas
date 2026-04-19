import { useNavigate } from "react-router-dom";
import type { Props } from "./types";

export default function DocsSidebar({ sections, active }: Props) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <aside className="docs-sidebar">
      <div className="header-left clickable" onClick={handleHomeClick}>
        <h1>🔁 Recursion</h1>
        <span className="subtitle">Canvas</span>
      </div>

      <h3>Documentation</h3>

      <nav>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={active === s.id ? "active" : ""}
          >
            {s.label}
          </a>
        ))}
      </nav>

      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>
    </aside>
  );
}
