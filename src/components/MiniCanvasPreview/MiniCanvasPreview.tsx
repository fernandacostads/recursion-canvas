import { useEffect, useRef } from "react";
import { Branch } from "../../core/Branch";
import type { Props } from "./types";

const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let scrollTimeout: any = null;

    const handleScroll = () => {
      isScrollingRef.current = true;

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        isScrollingRef.current = false;

        if (visibleRef.current && animationRef.current === null) {
          loop();
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    let animationId: number | null = null;

    const loop = () => {
      if (!visibleRef.current || isScrollingRef.current) {
        animationRef.current = null;
        return;
      }

      animationId = requestAnimationFrame(loop);
      animationRef.current = animationId;

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
