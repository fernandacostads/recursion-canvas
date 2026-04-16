import { PRESETS } from "../../config/presets";
import MiniCanvasPreview from "../MiniCanvasPreview/MiniCanvasPreview";
import RandomnessDemo from "../RandomnessDemo/RandomnessDemo";

export default function DocsContent() {
  return (
    <main className="docs-content">
      {/* INTRO */}
      <section id="intro">
        <h2>Recursion Canvas - Intro</h2>

        <p>
          Recursion is a procedural branching system that simulates organic
          growth using simple mathematical rules combined with randomness.
        </p>

        <p>
          Inspired by natural structures such as trees, roots, veins, and
          lightning, this system evolves over time by continuously spawning and
          transforming branches.
        </p>
      </section>

      {/* HOW */}
      <section id="how">
        <h2>How it works</h2>

        <p>Each branch is an independent entity that evolves frame by frame.</p>

        <h3>Core principles</h3>

        <ul>
          <li>
            <b>Directional growth</b> — branches move using an angle (theta)
          </li>
          <li>
            <b>Wandering</b> — small random variations create organic motion
          </li>
          <li>
            <b>Scaling</b> — branches shrink as they grow
          </li>
          <li>
            <b>Branching</b> — new branches spawn probabilistically
          </li>
        </ul>

        <h3>Lifecycle</h3>

        <ol>
          <li>Spawn: Branch starts at a point</li>
          <li>Grow: Moves forward based on angle</li>
          <li>Wander: Slightly changes direction</li>
          <li>Branch: New branches spawn probabilistically</li>
          <li>Shrink: Shrinks over time</li>
          <li>Die: Branch is removed</li>
        </ol>
      </section>

      {/* MATH */}
      <section id="math">
        <h2>Mathematical Model</h2>

        <p>
          The system is based on a simple idea: complex organic behavior can
          emerge from very small mathematical rules combined with randomness.
        </p>

        <h4>Growth visualization:</h4>

        <p>
          This diagram shows how a single branch evolves over time using growth,
          randomness, and decay.
        </p>
        <h3>Deterministic rules</h3>
        <p>Each branch follows predictable equations at every frame:</p>

        <ul>
          <li>Position is updated using trigonometry (cosine and sine)</li>
          <li>Growth follows a constant rate</li>
          <li>Scale decreases over time (shrink factor)</li>
        </ul>

        <p>In simplified form:</p>

        <pre>
          x += cos(theta) * growthRate y += sin(theta) * growthRate scale *=
          shrinkRate
        </pre>

        <h3>Randomness (stochastic behavior)</h3>

        <h4>Interactive example:</h4>
        <p>
          Adjust the randomness (wander) and see how the path changes from
          straight to chaotic.
        </p>

        <RandomnessDemo />

        <p>
          To avoid rigid and artificial patterns, randomness is introduced at
          key points in the system:
        </p>

        <ul>
          <li>
            <b>Wander</b> — small random changes in direction (theta)
          </li>
          <li>
            <b>Branching probability</b> — determines if a new branch is created
          </li>
          <li>
            <b>Parameter ranges</b> — values like growth and shrink vary per
            branch
          </li>
        </ul>

        <h3>Emergent complexity</h3>

        <p>
          Individually, each rule is extremely simple. However, when hundreds of
          branches interact over time, the result is complex, natural-looking
          structures.
        </p>

        <p>
          This phenomenon is known as <b>emergence</b>, where complexity arises
          from the interaction of simple components.
        </p>

        <h3>Why it looks organic</h3>

        <ul>
          <li>No two branches behave exactly the same</li>
          <li>Small variations accumulate over time</li>
          <li>Growth + decay mimics natural systems</li>
        </ul>

        <p>
          This combination of deterministic rules and controlled randomness is
          what creates the illusion of life-like growth.
        </p>
      </section>

      {/* RENDER */}
      <section id="render">
        <h2>Render Modes</h2>
        <p>
          The rendering mode defines how branches are visually represented on
          the canvas.
        </p>
        <div className="docs-grid">
          <div className="doc-item">
            <h3>darkness</h3>
            <p>Organic filled shapes. Visualiy represented with dark color.</p>
            <div className="preview">
              <MiniCanvasPreview
                config={{ ...PRESETS.Hairball, RENDER_MODE: "darkness" }}
              />
            </div>
            <div
              style={{
                display: "inline-flex",
                gap: "3px",
                background: "transparent",
              }}
            >
              <span className="tag">Organic</span>
              <span className="tag">Heavy</span>
            </div>
          </div>

          <div className="doc-item">
            <h3>segmented</h3>
            <p>Layered strokes that resemble tubes or fibers.</p>
            <div className="preview">
              <MiniCanvasPreview
                config={{ ...PRESETS.Fibrous, RENDER_MODE: "segmented" }}
              />
            </div>
            <div
              style={{
                display: "inline-flex",
                gap: "3px",
                background: "transparent",
                flexWrap: "wrap",
              }}
            >
              <span className="tag">Structured</span>
              <span className="tag">Balanced</span>
              <span className="tag">visual</span>
            </div>
          </div>

          <div className="doc-item">
            <h3>sketched</h3>
            <p>Hand-drawn represented with a sketchy appearance.</p>
            <div className="preview">
              <MiniCanvasPreview
                config={{ ...PRESETS.Graffiti, RENDER_MODE: "sketched" }}
              />
            </div>
            <div
              style={{
                display: "inline-flex",
                gap: "3px",
                background: "transparent",
              }}
            >
              <span className="tag">Artistic</span>
              <span className="tag">Lightweight</span>
            </div>
          </div>
        </div>
      </section>

      <section id="lifecycle">
        <h2>Lifecycle</h2>
        <p>Every branch follows a lifecycle from creation to disappearance.</p>
        <ol>
          <li>
            <b>Spawn</b> — created at origin or from another branch
          </li>
          <li>
            <b>Grow</b> — moves forward using angle and growth rate
          </li>
          <li>
            <b>Wander</b> — small randomness alters direction
          </li>
          <li>
            <b>Branch</b> — may spawn new branches
          </li>
          <li>
            <b>Shrink</b> — scale decreases over time
          </li>
          <li>
            <b>Death</b> — removed when too small
          </li>
        </ol>
        <p>
          This cycle repeats recursively, creating complex structures from
          simple rules.
        </p>
      </section>

      {/* RANDOMNESS */}
      <section id="randomness">
        <h2>Randomness & Determinism</h2>
        <p>
          The system combines deterministic rules with controlled randomness.
        </p>
        <ul>
          <li>Deterministic math (cos/sin)</li>
          <li>Random wander</li>
          <li>Probabilistic branching</li>
        </ul>
        <h3>Deterministic</h3>
        <ul>
          <li>Movement uses trigonometry</li>
          <li>Growth and shrink follow fixed rates</li>
          <li>Each frame updates predictably</li>
        </ul>
        <h3>Randomness</h3>
        <ul>
          <li>Wander introduces directional variation</li>
          <li>Branching is probabilistic</li>
          <li>Parameters vary per branch</li>
        </ul>
        <p>
          <h3>Probabilistic Branching</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          This balance ensures results are never identical, yet always coherent.
        </p>
        <div className="doc-item">
          <span className="tag">Stochastic</span>
          <span className="tag">Emergence</span>
        </div>
      </section>

      <section id="params">
        <h2>Parameters</h2>
        <p>
          These parameters control the behavior and appearance of the system.
        </p>
        <div className="docs-grid">
          <div className="doc-item">
            <h3>NUM_BRANCHES</h3>
            <p>Number of initial trunks spawned from origin.</p>
            <span className="tag">Structure</span>
          </div>
          <div className="doc-item">
            <h3>MAX_CONCURRENT</h3>
            <p>
              Maximum number of active branches at any given time. Acts as a
              performance limiter.
            </p>{" "}
            <span className="tag">Performance</span>
          </div>
          <div className="doc-item">
            <h3>BRANCH_PROBABILITY</h3>
            <p>Probability of a branch spawning a new branch each frame.</p>
            <span className="tag">Growth</span>
            <span className="tag">Chaos</span>
          </div>
          <div className="doc-item">
            <h3>MIN/MAX_RADIUS</h3>
            <p>
              Controls thickness of branches. Larger values create bolder
              shapes.
            </p>{" "}
            <span className="tag">Visual</span>
          </div>
          <div className="doc-item">
            <h3>MIN/MAX_WANDER_STEP</h3>
            <p>
              Controls how much direction changes over time. Higher values =
              more chaotic movement.
            </p>
            <span className="tag">Randomness</span>
          </div>
          <div className="doc-item">
            <h3>MIN/MAX_GROWTH_RATE</h3>
            <p>
              Speed at which branches extend. Higher values = faster growth.
            </p>
            <span className="tag">Speed</span>
          </div>
          <div className="doc-item">
            <h3>MIN/MAX_SHRINK_RATE</h3>
            <p>
              How quickly branches shrink. Values closer to 1 = longer lifespan.
            </p>{" "}
            <span className="tag">Decay</span>
          </div>
          <div>
            <h3>MIN/MAX_DIVERGENCE</h3>
            <p>Angle difference when spawning new branches. Controls spread.</p>
            <span className="tag">Spread</span>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section id="performance">
        <h2>Performance</h2>

        <p>
          Performance is directly tied to how many branches are active and how
          often they update and render. Since each branch performs calculations
          and drawing operations every frame, the system can scale from very
          lightweight to computationally intensive depending on configuration.
        </p>

        <h3>Key factors</h3>
        <ul>
          <li>
            <b>MAX_CONCURRENT</b> — hard limit of active branches. This is the
            most important parameter for performance.
          </li>
          <li>
            <b>BRANCH_PROBABILITY</b> — controls how quickly the system grows in
            complexity.
          </li>
          <li>
            <b>GROWTH_RATE</b> — affects how fast branches move and update
            positions.
          </li>
          <li>
            <b>SHRINK_RATE</b> — determines how long branches stay alive.
          </li>
        </ul>

        <h3>Optimization strategies</h3>
        <ul>
          <li>
            Lower <b>MAX_CONCURRENT</b> to cap total workload
          </li>
          <li>
            Reduce <b>BRANCH_PROBABILITY</b> to slow down exponential growth
          </li>
          <li>
            Use <b>segmented</b> render mode for lighter drawing operations
          </li>
          <li>
            Increase <b>SHRINK_RATE</b> to remove branches faster
          </li>
          <li>
            Lower <b>GROWTH_RATE</b> to reduce per-frame movement
          </li>
        </ul>

        <h3>Trade-offs</h3>
        <p>
          Higher values produce richer and more complex visuals, but at the cost
          of performance. Finding the right balance between visual density and
          frame rate is key for a smooth experience.
        </p>

        <div className="doc-item">
          <span className="tag">Optimization</span>
          <span className="tag">Real-time</span>
          <span className="tag">GPU/CPU bound</span>
        </div>
      </section>
      {/* IDEAS */}
      <section id="ideas">
        <h2>Ideas & Exploration</h2>

        <p>
          The system is highly flexible and designed for exploration. By
          combining different parameters, you can simulate a wide range of
          natural and abstract behaviors.
        </p>

        <h3>Natural patterns</h3>
        <ul>
          <li>
            <b>Tree-like</b> → low branching + upward growth + moderate
            divergence
          </li>
          <li>
            <b>Roots</b> → low divergence + slow growth + downward direction
          </li>
          <li>
            <b>Frost</b> → no wander + high branching symmetry
          </li>
        </ul>

        <h3>Chaotic systems</h3>
        <ul>
          <li>
            <b>Chaos</b> → high wander + high probability
          </li>
          <li>
            <b>Explosion</b> → high divergence + many initial branches
          </li>
          <li>
            <b>Hairball</b> → high shrink resistance + extreme branching
          </li>
        </ul>

        <h3>Artistic exploration</h3>
        <ul>
          <li>
            <b>Calligraphy</b> → sketched mode + smooth wander
          </li>
          <li>
            <b>Neural networks</b> → dense branching + low shrink
          </li>
          <li>
            <b>Lightning</b> → sharp divergence + fast growth
          </li>
        </ul>

        <p>
          Small parameter changes can lead to dramatically different outcomes.
          This sensitivity is what makes the system powerful for generative art.
        </p>

        <div className="doc-item">
          <span className="tag">Creative Coding</span>
          <span className="tag">Generative Art</span>
          <span className="tag">Emergence</span>
        </div>
      </section>

      {/* PRESETS */}
      <section id="presets">
        <h2>Presets</h2>

        <p>
          Presets are curated configurations that highlight specific behaviors
          of the system. They serve as starting points for exploration and
          demonstrate how parameter combinations affect the final result.
        </p>

        <h3>Included presets</h3>
        <ul>
          <li>
            <b>Vines</b> → flowing, organic tendrils with smooth curvature
          </li>
          <li>
            <b>Fibrous</b> → dense, thread-like structures with layered strokes
          </li>
          <li>
            <b>Graffiti</b> → expressive, chaotic lines with artistic randomness
          </li>
          <li>
            <b>Frost</b> → crystalline, symmetric branching patterns
          </li>
          <li>
            <b>Hairball</b> → compact, tangled mass with extreme density
          </li>
          <li>
            <b>Beech Tree</b> → structured, tree-like growth with natural
            balance
          </li>
          <li>
            <b>Vegetable Root</b> → grounded, directional growth with minimal
            spread
          </li>
        </ul>

        <h3>Why use presets?</h3>
        <ul>
          <li>Quickly explore different visual styles</li>
          <li>Understand parameter relationships</li>
          <li>Use as a base for custom configurations</li>
        </ul>

        <p>
          Each preset represents a different region of the parameter space.
          Tweaking them in real-time allows you to discover entirely new
          behaviors.
        </p>

        <div className="doc-item">
          <span className="tag">Presets</span>
          <span className="tag">Exploration</span>
          <span className="tag">Parameter Space</span>
        </div>
      </section>
    </main>
  );
}
