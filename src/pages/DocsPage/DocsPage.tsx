// import { useEffect, useState } from "react";
// import DocsContent from "../../components/DocsContent/DocsContent";
// import DocsSidebar from "../../components/DocsSidebar/DocsSidebar";
// import DocsAside from "../../components/DocsAside/DocsAside";

// const sections = [
//   { id: "intro", label: "Introduction" },
//   { id: "how", label: "How it works" },
//   { id: "math", label: "Mathematical Model" },
//   { id: "render", label: "Render Modes" },
//   { id: "lifecycle", label: "Lifecycle" },
//   { id: "randomness", label: "Randomness" },
//   { id: "params", label: "Parameters" },
//   { id: "performance", label: "Performance" },
//   { id: "ideas", label: "Ideas" },
//   { id: "presets", label: "Presets" },
// ];

// export default function DocsPage() {
//   const [active, setActive] = useState("intro");

//   useEffect(() => {
//     const container = document.querySelector(".docs-content");

//     const handler = () => {
//       if (!container) return;

//       let current = "intro";

//       for (const sec of sections) {
//         const el = document.getElementById(sec.id);
//         if (!el) continue;

//         const rect = el.getBoundingClientRect();

//         // 🎯 detecta seção visível
//         if (rect.top <= 150 && rect.bottom >= 150) {
//           current = sec.id;
//           break;
//         }
//       }

//       setActive(current);
//     };

//     container?.addEventListener("scroll", handler);

//     return () => container?.removeEventListener("scroll", handler);
//   }, []);

//   return (
//     <div className="docs-layout">
//       <DocsSidebar sections={sections} active={active} />
//       <DocsContent />
//       <DocsAside />
//     </div>
//   );
// }

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
    const container = document.querySelector(".docs-content");

    if (!container) return;

    const handler = () => {
      // 🔥 detecta se chegou no final (corrige últimas seções)
      const isAtBottom =
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 5;

      if (isAtBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      let closestSection = "intro";
      let closestOffset = Infinity;

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        // 🎯 distância do topo "ideal"
        const offset = Math.abs(rect.top - 120);

        if (offset < closestOffset) {
          closestOffset = offset;
          closestSection = sec.id;
        }
      }

      setActive(closestSection);
    };

    container.addEventListener("scroll", handler);

    // 🔥 roda uma vez ao montar
    handler();

    return () => {
      container.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className="docs-layout">
      <DocsSidebar sections={sections} active={active} />
      <DocsContent />
      <DocsAside />
    </div>
  );
}
