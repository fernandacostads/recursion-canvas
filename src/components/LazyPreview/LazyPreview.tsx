import { useState } from "react";
import MiniCanvasPreview from "../MiniCanvasPreview/MiniCanvasPreview";
import style from "./styles.module.css";

interface Props {
  config: any;
}

export default function LazyPreview({ config }: Props) {
  const [key, setKey] = useState(0);
  const [active, setActive] = useState(false);
  const [reset, setReset] = useState(0);

  if (!active) {
    return (
      <div className={style.placeholder} onClick={() => setActive(true)}>
        <span>▶ Click to run</span>
      </div>
    );
  }

  return (
    <div className={style.wrapper}>
      <MiniCanvasPreview key={key} config={config} resetSignal={reset} />

      <button className={style.replay} onClick={() => setReset((r) => r + 1)}>
        ↻ See it again
      </button>
    </div>
  );
}
