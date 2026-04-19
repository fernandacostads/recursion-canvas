import { PRESETS } from "../../config/presets";
import LazyPreview from "../LazyPreview/LazyPreview";
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
        <div className="docs-flex">
          <div className="doc-item">
            <h3>darkness</h3>
            <p>Organic filled shapes with dark color.</p>
            <LazyPreview
              config={{ ...PRESETS.Hairball, RENDER_MODE: "darkness" }}
            />
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
            <LazyPreview
              config={{ ...PRESETS.Frost, RENDER_MODE: "segmented" }}
            />
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
            <LazyPreview
              config={{ ...PRESETS.Graffiti, RENDER_MODE: "sketched" }}
            />
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
          The system operates at the intersection of <b>deterministic rules</b>{" "}
          and <b>controlled randomness</b>. This balance is what allows simple
          equations to generate complex, organic structures.
        </p>

        <div className="doc-item">
          <span className="tag">Deterministic</span>
          <span className="tag">Stochastic</span>
          <span className="tag">Emergence</span>
        </div>

        <h3>Deterministic foundation</h3>
        <p>
          At its core, every branch follows predictable mathematical rules.
          These ensure stability and coherence across the system.
        </p>

        <ul>
          <li>
            <b>Trigonometric movement</b> — position evolves using cosine and
            sine
          </li>
          <li>
            <b>Consistent growth</b> — branches expand at a defined rate
          </li>
          <li>
            <b>Gradual decay</b> — scale reduces over time (shrink factor)
          </li>
        </ul>

        <p>
          Without randomness, the system would produce rigid, repetitive and
          artificial patterns.
        </p>

        <h3>Controlled randomness</h3>
        <p>
          To break uniformity, randomness is introduced at key points — not as
          noise, but as a structured source of variation.
        </p>

        <ul>
          <li>
            <b>Wander</b> — small directional changes create fluid, organic
            motion
          </li>
          <li>
            <b>Parameter variation</b> — each branch has slightly different
            properties
          </li>
          <li>
            <b>Probabilistic branching</b> — growth is driven by chance, not
            certainty
          </li>
        </ul>

        <h3>Probabilistic Branching</h3>

        <p>
          Instead of always splitting, each branch has a <b>chance</b> to
          generate a new one at every frame. This introduces stochastic behavior
          while preserving overall structure.
        </p>

        <ul>
          <li>A random value between 0 and 1 is generated</li>
          <li>
            It is compared against <b>BRANCH_PROBABILITY</b>
          </li>
          <li>
            If the condition is met, a new branch is spawned with angular
            divergence
          </li>
        </ul>

        <p>
          This simple rule leads to <b>exponential growth</b>, but in a
          non-uniform way. Some regions become dense, while others remain sparse
          — mimicking natural systems like trees, veins and lightning.
        </p>

        <h3>Emergent behavior</h3>

        <p>
          Individually, each rule is trivial. Together, they create structures
          that appear complex and alive. This phenomenon is known as{" "}
          <b>emergence</b> — where complexity arises from the interaction of
          simple components.
        </p>

        <p>The result is a system that is:</p>

        <ul>
          <li>Never exactly the same twice</li>
          <li>Visually coherent</li>
          <li>Rich in variation</li>
          <li>Capable of simulating natural growth</li>
        </ul>

        <div className="doc-item">
          <span className="tag">Procedural</span>
          <span className="tag">Organic Systems</span>
          <span className="tag">Generative Art</span>
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
          often they are updated and rendered. Since each branch executes logic
          every frame, the system behaves like a real-time simulation with
          dynamic complexity.
        </p>

        <h3>Algorithmic perspective</h3>

        <p>The core loop iterates over all active branches every frame:</p>

        <pre>for each branch: update() render()</pre>

        <p>
          This results in a time complexity of <b>O(n)</b> per frame, where{" "}
          <b>n</b> is the number of active branches.
        </p>

        <p>
          However, due to <b>probabilistic branching</b>, the system can
          approach <b>exponential growth</b> over time if left unchecked:
        </p>

        <pre>n → n + (n * BRANCH_PROBABILITY)</pre>

        <p>Without constraints, this leads to rapid performance degradation.</p>

        <h3>Space complexity</h3>

        <p>
          All active branches are stored in a linear structure (array),
          resulting in
          <b>O(n)</b> space complexity.
        </p>

        <ul>
          <li>Each branch stores position, direction, scale and state</li>
          <li>Memory usage grows linearly with active branches</li>
          <li>Frequent allocation occurs when new branches are created</li>
        </ul>

        <p>
          The <b>MAX_CONCURRENT</b> parameter acts as a hard cap, preventing
          unbounded memory growth.
        </p>

        <h3>Key performance factors</h3>

        <ul>
          <li>
            <b>MAX_CONCURRENT</b> — limits total active nodes (primary
            bottleneck)
          </li>
          <li>
            <b>BRANCH_PROBABILITY</b> — controls exponential growth rate
          </li>
          <li>
            <b>RENDER_MODE</b> — affects drawing cost (fill vs stroke vs shadow)
          </li>
          <li>
            <b>SHRINK_RATE</b> — defines lifecycle duration of branches
          </li>
        </ul>

        <h3>Rendering cost (CPU vs GPU)</h3>

        <ul>
          <li>
            <b>Segmented</b> → lighter (simple strokes, minimal fill)
          </li>
          <li>
            <b>Sketched</b> → moderate (more geometry calculations)
          </li>
          <li>
            <b>Darkness</b> → heavier (fills + shadows + overdraw)
          </li>
        </ul>

        <p>
          Rendering cost is cumulative — each branch adds draw calls per frame,
          increasing pressure on both CPU and GPU.
        </p>

        <h3>Optimization strategies</h3>

        <ul>
          <li>
            Lower <b>MAX_CONCURRENT</b> to cap overall complexity
          </li>
          <li>
            Reduce <b>BRANCH_PROBABILITY</b> to slow exponential growth
          </li>
          <li>
            Increase <b>SHRINK_RATE</b> to shorten branch lifespan
          </li>
          <li>
            Prefer <b>segmented</b> mode for better performance
          </li>
          <li>Avoid unnecessary re-renders (pause when off-screen)</li>
        </ul>

        <h3>Trade-offs</h3>

        <p>
          The system exists in a balance between <b>visual richness</b> and{" "}
          <b>computational cost</b>.
        </p>

        <ul>
          <li>High density → more organic and complex visuals</li>
          <li>Low density → better performance and stability</li>
        </ul>

        <p>
          Finding the optimal configuration is a matter of tuning parameters to
          stay within real-time constraints (~60 FPS).
        </p>

        <div className="doc-item">
          <span className="tag">O(n)</span>
          <span className="tag">Real-time Simulation</span>
          <span className="tag">CPU/GPU Bound</span>
          <span className="tag">Exponential Growth</span>
        </div>
      </section>

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
