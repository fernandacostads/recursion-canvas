import { useNavigate } from "react-router-dom";

interface Section {
  id: string;
  label: string;
}

interface Props {
  sections: Section[];
  active: string;
}

export default function DocsSidebar({ sections, active }: Props) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <aside className="docs-sidebar">
      {/* HEADER */}
      <div className="header-left clickable" onClick={handleHomeClick}>
        <h1>🔁 Recursion</h1>
        <span className="subtitle">Canvas</span>
      </div>

      <h3>Documentation</h3>

      {/* NAV */}
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

      {/* BACK */}
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>
    </aside>
  );
}
