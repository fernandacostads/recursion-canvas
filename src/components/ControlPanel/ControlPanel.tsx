import type { Props } from "./types";

export default function ControlPanel({
  config,
  setConfig,
  presets,
  onReset,
  onPause,
  onClear,
  onSave,
  onRegenerate,
  onClose,
}: Props) {
  const update = (key: string, value: number | string) => {
    setConfig({ ...config, [key]: value });
  };

  const sliders: [string, number, number, number][] = [
    ["NUM_BRANCHES", 1, 20, 1],
    ["MAX_CONCURRENT", 10, 1000, 1],
    ["BRANCH_PROBABILITY", 0.01, 1, 0.01],
    ["MIN_RADIUS", 0.1, 100, 0.1],
    ["MAX_RADIUS", 0.1, 100, 0.1],
    ["MIN_WANDER_STEP", 0, Math.PI, 0.01],
    ["MAX_WANDER_STEP", 0, Math.PI, 0.01],
    ["MIN_GROWTH_RATE", 0.1, 20, 0.1],
    ["MAX_GROWTH_RATE", 0.1, 20, 0.1],
    ["MIN_SHRINK_RATE", 0.9, 0.999, 0.001],
    ["MAX_SHRINK_RATE", 0.9, 0.999, 0.001],
    ["MIN_DIVERGENCE", 0, Math.PI, 0.01],
    ["MAX_DIVERGENCE", 0, Math.PI, 0.01],
  ];

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <h3>🌿 Recursion</h3>
          <span className="panel-subtitle">Controls</span>
        </div>

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="panel-section">
        <label>Preset</label>
        <select onChange={(e) => setConfig({ ...presets[e.target.value] })}>
          {Object.keys(presets).map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      <div className="panel-section">
        <label>Render Mode</label>
        <select
          value={config.RENDER_MODE}
          onChange={(e) => update("RENDER_MODE", e.target.value)}
        >
          <option value="darkness">Darkness</option>
          <option value="segmented">Segmented</option>
          <option value="sketched">Sketched</option>
        </select>
      </div>

      <div className="panel-sliders">
        {sliders.map(([key, min, max, step]) => (
          <div className="slider-group" key={key}>
            <div className="slider-label">
              <span>{key}</span>
              <strong>
                {typeof config[key] === "number"
                  ? config[key].toFixed(2)
                  : config[key]}
              </strong>
            </div>

            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={config[key]}
              onChange={(e) => update(key, +e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="panel-buttons">
        <button onClick={onReset}>Reset</button>
        <button onClick={onPause}>Pause</button>
        <button onClick={onClear}>Clear</button>
        <button onClick={onRegenerate}>New</button>
        <button onClick={onSave}>Save</button>
      </div>
    </div>
  );
}
