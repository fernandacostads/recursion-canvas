import { useEffect, useRef, useState } from "react";

export default function RandomnessDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [wander, setWander] = useState(0.2);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let x = 200;
    let y = 200;
    let theta = -Math.PI / 2;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      x = canvas.width / 2;
      y = canvas.height / 2;
      theta = -Math.PI / 2;

      ctx.beginPath();
      ctx.moveTo(x, y);

      for (let i = 0; i < 150; i++) {
        theta += (Math.random() - 0.5) * wander;

        x += Math.cos(theta) * 2;
        y += Math.sin(theta) * 2;

        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "#6ee7ff";
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    draw();
  }, [wander]);

  return (
    <div>
      <canvas ref={canvasRef} width={400} height={300} />

      <label>Wander: {wander.toFixed(2)}</label>
      <input
        type="range"
        min={0}
        max={2}
        step={0.01}
        value={wander}
        onChange={(e) => setWander(+e.target.value)}
      />
    </div>
  );
}
