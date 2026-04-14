export default function DocsPage() {
  return (
    <div className="docs">
      <div className="docs-container">
        <header className="docs-header">
          <h1>Recursion</h1>
          <p>Procedural branching experiment inspired by organic growth.</p>

          <button onClick={() => (window.location.href = "/")}>
            ← Back to simulation
          </button>
        </header>

        <section>
          <h2>🌱 How it works</h2>
          <p>
            The system generates branches recursively. Each branch grows,
            shrinks, and may spawn new branches based on probability.
          </p>

          <ul>
            <li>Each branch has direction (theta)</li>
            <li>Growth is affected by random wandering</li>
            <li>Branches shrink over time</li>
            <li>New branches spawn using divergence angles</li>
          </ul>
        </section>

        <section>
          <h2>⚙️ Parameters</h2>

          <div className="docs-grid">
            <div>
              <h3>Structure</h3>
              <p>
                <b>NUM_BRANCHES</b> – initial trunks
              </p>
              <p>
                <b>MAX_CONCURRENT</b> – max active branches
              </p>
            </div>

            <div>
              <h3>Growth</h3>
              <p>
                <b>MIN/MAX_GROWTH_RATE</b> – speed
              </p>
              <p>
                <b>MIN/MAX_SHRINK_RATE</b> – decay
              </p>
            </div>

            <div>
              <h3>Shape</h3>
              <p>
                <b>MIN/MAX_WANDER_STEP</b> – randomness
              </p>
              <p>
                <b>MIN/MAX_DIVERGENCE</b> – branching angle
              </p>
            </div>

            <div>
              <h3>Rendering</h3>
              <p>
                <b>RENDER_MODE</b> – visual style
              </p>
              <p>darkness / segmented / sketched</p>
            </div>
          </div>
        </section>

        <section>
          <h2>🎨 Presets</h2>

          <p>
            Presets are curated parameter combinations that produce different
            organic patterns like vines, roots, or abstract shapes.
          </p>
        </section>
      </div>
    </div>
  );
}
