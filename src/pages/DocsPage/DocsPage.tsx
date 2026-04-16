import { useEffect, useState } from "react";
import DocsContent from "../../components/DocsContent/DocsContent";
import DocsSidebar from "../../components/DocsSidebar/DocsSidebar";
import DocsAside from "../../components/DocsAside/DocsAside";

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "how", label: "How it works" },
  { id: "math", label: "Mathematical Model" },
  { id: "render", label: "Render Modes" },
  { id: "lifecycle", label: "Lifecycle" },
  { id: "randomness", label: "Randomness" },
  { id: "params", label: "Parameters" },
  { id: "performance", label: "Performance" },
  { id: "ideas", label: "Ideas" },
  { id: "presets", label: "Presets" },
];

export default function DocsPage() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const handler = () => {
      const scroll = window.scrollY;

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (!el) continue;

        if (scroll >= el.offsetTop - 120) {
          setActive(sec.id);
        }
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="docs-layout">
      <DocsSidebar sections={sections} active={active} />
      <DocsContent />
      <DocsAside />
    </div>
  );
}
