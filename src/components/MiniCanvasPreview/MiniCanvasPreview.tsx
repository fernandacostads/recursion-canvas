// import { useEffect, useRef } from "react";
// import { Branch } from "../../core/Branch";
// import { PRESETS } from "../../config/presets";

// export default function MiniCanvasPreview() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const branchesRef = useRef<Branch[]>([]);
//   const animationRef = useRef<number | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;
//     const config = PRESETS["Vines"]; // 🔥 mesma config

//     const scale = window.devicePixelRatio || 1;

//     const size = 220;

//     canvas.width = size * scale;
//     canvas.height = size * scale;

//     canvas.style.width = size + "px";
//     canvas.style.height = size + "px";

//     ctx.setTransform(scale, 0, 0, scale, 0, 0);

//     // spawn igual ao principal
//     const spawn = () => {
//       branchesRef.current = [];

//       const x = size / 2;
//       const y = size / 2;

//       for (let i = 0; i < config.NUM_BRANCHES; i++) {
//         const theta = (i / config.NUM_BRANCHES) * Math.PI * 2;

//         branchesRef.current.push(
//           new Branch(x, y, theta - Math.PI / 2, config.MAX_RADIUS, config),
//         );
//       }
//     };

//     spawn();

//     const loop = () => {
//       animationRef.current = requestAnimationFrame(loop);

//       const branches = branchesRef.current;

//       branches.forEach((b) => {
//         b.update(branches, config);
//         b.render(ctx, config);
//       });

//       // 🔥 importante: NÃO limpar o canvas
//       branchesRef.current = branches.filter((b) => b.growing);

//       // respawn automático pra manter vivo
//       if (branchesRef.current.length === 0) {
//         spawn();
//       }
//     };

//     loop();

//     return () => {
//       cancelAnimationFrame(animationRef.current!);
//     };
//   }, []);

//   return <canvas ref={canvasRef} />;
// }

// FPG CAI
// import { useEffect, useRef } from "react";
// import { Branch } from "../../core/Branch";
// import type { Config } from "../../types";

// const TWO_PI = Math.PI * 2;
// const HALF_PI = Math.PI / 2;

// interface Props {
//   config: Config;
// }

// export default function MiniCanvasPreview({ config }: Props) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const branchesRef = useRef<Branch[]>([]);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;

//     // 🔥 DPI FIX (igual ao principal)
//     const scale = window.devicePixelRatio || 1;

//     const width = 220;
//     const height = 220;

//     canvas.width = width * scale;
//     canvas.height = height * scale;

//     canvas.style.width = width + "px";
//     canvas.style.height = height + "px";

//     ctx.setTransform(scale, 0, 0, scale, 0, 0);

//     // 🔥 spawn radial igual ao original
//     const spawn = () => {
//       branchesRef.current = [];

//       for (let i = 0; i < config.NUM_BRANCHES; i++) {
//         const theta = (i / config.NUM_BRANCHES) * TWO_PI;

//         branchesRef.current.push(
//           new Branch(
//             width / 2,
//             height / 2,
//             theta - HALF_PI,
//             config.MAX_RADIUS,
//             config,
//           ),
//         );
//       }
//     };

//     spawn();

//     let animationId: number;

//     const loop = () => {
//       animationId = requestAnimationFrame(loop);

//       const ctx = canvas.getContext("2d")!;

//       // 🔥 leve fade (igual sensação do principal)
//       ctx.fillStyle = "rgba(0,0,0,0.05)";
//       ctx.fillRect(0, 0, width, height);

//       branchesRef.current.forEach((b) => {
//         b.update(branchesRef.current, config);
//         b.render(ctx, config);
//       });

//       // 🔥 ESSENCIAL
//       branchesRef.current = branchesRef.current.filter((b) => b.growing);
//     };

//     loop();

//     return () => cancelAnimationFrame(animationId);
//   }, [config]);

//   return <canvas ref={canvasRef} />;
// }

//the last
// import { useEffect, useRef } from "react";
// import { Branch } from "../../core/Branch";
// import type { Config } from "../../types";

// const TWO_PI = Math.PI * 2;
// const HALF_PI = Math.PI / 2;

// interface Props {
//   config: Config;
//   resetSignal?: number;
// }

// export default function MiniCanvasPreview({ config, resetSignal }: Props) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const branchesRef = useRef<Branch[]>([]);
//   const animationRef = useRef<number | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;

//     // 🔥 DPI FIX (igual ao principal)
//     const scale = window.devicePixelRatio || 1;

//     const width = 250;
//     const height = 200;

//     canvas.width = width * scale;
//     canvas.height = height * scale;

//     canvas.style.width = width + "px";
//     canvas.style.height = height + "px";

//     ctx.setTransform(scale, 0, 0, scale, 0, 0);

//     const spawn = () => {
//       branchesRef.current = [];

//       for (let i = 0; i < config.NUM_BRANCHES; i++) {
//         const theta = (i / config.NUM_BRANCHES) * TWO_PI;

//         branchesRef.current.push(
//           new Branch(
//             width / 2,
//             height / 2,
//             theta - HALF_PI,
//             config.MAX_RADIUS,
//             config,
//           ),
//         );
//       }
//     };

//     spawn();

//     let animationId: number;

//     const loop = () => {
//       animationId = requestAnimationFrame(loop);

//       const ctx = canvas.getContext("2d")!;

//       // 🔥 leve fade (igual sensação do principal)
//       ctx.fillStyle = "rgba(0,0,0,0.05)";
//       ctx.fillRect(0, 0, width, height);

//       branchesRef.current.forEach((b) => {
//         b.update(branchesRef.current, config);
//         b.render(ctx, config);
//       });

//       // 🔥 ESSENCIAL
//       branchesRef.current = branchesRef.current.filter((b) => b.growing);
//     };

//     loop();

//     return () => cancelAnimationFrame(animationId);
//   }, [config, resetSignal]); // 🔥 resetSignal no array de dependências

//   return <canvas ref={canvasRef} />;
// }

// Ante do intersetion observer
// import { useEffect, useRef } from "react";
// import { Branch } from "../../core/Branch";
// import type { Config } from "../../types";

// const TWO_PI = Math.PI * 2;
// const HALF_PI = Math.PI / 2;

// interface Props {
//   config: Config;
//   resetSignal?: number;
// }

// export default function MiniCanvasPreview({ config, resetSignal }: Props) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const branchesRef = useRef<Branch[]>([]);
//   const animationRef = useRef<number | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;

//     const scale = window.devicePixelRatio || 1;

//     const width = 250;
//     const height = 200;

//     canvas.width = width * scale;
//     canvas.height = height * scale;

//     canvas.style.width = width + "px";
//     canvas.style.height = height + "px";

//     ctx.setTransform(scale, 0, 0, scale, 0, 0);

//     // 🔥 spawn igual ao principal
//     const spawn = () => {
//       branchesRef.current = [];

//       for (let i = 0; i < config.NUM_BRANCHES; i++) {
//         const theta = (i / config.NUM_BRANCHES) * TWO_PI;

//         branchesRef.current.push(
//           new Branch(
//             width / 2,
//             height / 2,
//             theta - HALF_PI,
//             config.MAX_RADIUS,
//             config,
//           ),
//         );
//       }
//     };

//     spawn();

//     let animationId: number | null = null;

//     const loop = () => {
//       animationId = requestAnimationFrame(loop);

//       // 🔥 fade leve (efeito bonito igual principal)
//       ctx.fillStyle = "rgba(0,0,0,0.05)";
//       ctx.fillRect(0, 0, width, height);

//       const branches = branchesRef.current;

//       for (let i = 0; i < branches.length; i++) {
//         const b = branches[i];
//         b.update(branches, config);
//         b.render(ctx, config);
//       }

//       branchesRef.current = branches.filter((b) => b.growing);

//       // 🔥 respawn automático (mantém vivo)
//       if (branchesRef.current.length === 0) {
//         spawn();
//       }
//     };

//     loop();
//     animationRef.current = animationId;

//     return () => {
//       if (animationId !== null) {
//         cancelAnimationFrame(animationId);
//       }
//     };
//   }, [config, resetSignal]); // 🔥 ESSENCIAL

//   return <canvas ref={canvasRef} />;
// }

import { useEffect, useRef } from "react";
import { Branch } from "../../core/Branch";
import type { Config } from "../../types";

const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;

interface Props {
  config: Config;
  resetSignal?: number;
}

export default function MiniCanvasPreview({ config, resetSignal }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const branchesRef = useRef<Branch[]>([]);
  const animationRef = useRef<number | null>(null);

  const visibleRef = useRef(true);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const scale = window.devicePixelRatio || 1;
    const width = 250;
    const height = 200;

    canvas.width = width * scale;
    canvas.height = height * scale;

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(scale, 0, 0, scale, 0, 0);

    // 🔥 SPAWN
    const spawn = () => {
      branchesRef.current = [];

      for (let i = 0; i < config.NUM_BRANCHES; i++) {
        const theta = (i / config.NUM_BRANCHES) * TWO_PI;

        branchesRef.current.push(
          new Branch(
            width / 2,
            height / 2,
            theta - HALF_PI,
            config.MAX_RADIUS,
            config,
          ),
        );
      }
    };

    spawn();

    // =========================
    // 👀 VISIBILITY OBSERVER
    // =========================
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting && animationRef.current === null) {
          loop();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(canvas);

    // =========================
    // 🖱 SCROLL DETECTION
    // =========================
    let scrollTimeout: any = null;

    const handleScroll = () => {
      isScrollingRef.current = true;

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        isScrollingRef.current = false;

        // 🔥 volta animação depois do scroll
        if (visibleRef.current && animationRef.current === null) {
          loop();
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    // =========================
    // 🎬 LOOP
    // =========================
    let animationId: number | null = null;

    const loop = () => {
      if (!visibleRef.current || isScrollingRef.current) {
        animationRef.current = null;
        return;
      }

      animationId = requestAnimationFrame(loop);
      animationRef.current = animationId;

      // 🔥 fade leve
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, width, height);

      const branches = branchesRef.current;

      for (let i = 0; i < branches.length; i++) {
        const b = branches[i];
        b.update(branches, config);
        b.render(ctx, config);
      }

      branchesRef.current = branches.filter((b) => b.growing);

      if (branchesRef.current.length === 0) {
        spawn();
      }
    };

    loop();

    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [config, resetSignal]);

  return <canvas ref={canvasRef} />;
}
