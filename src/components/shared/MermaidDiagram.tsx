// ============================================================
// MermaidDiagram — renders a Mermaid.js diagram from a string
// ============================================================
import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

// Module-level counter so every diagram gets a truly unique ID
let idCounter = 0;

// Initialize mermaid once
mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
  themeVariables: {
    primaryColor: "#6366f1",
    primaryTextColor: "#f8fafc",
    primaryBorderColor: "#818cf8",
    lineColor: "#94a3b8",
    secondaryColor: "#1e293b",
    tertiaryColor: "#0f172a",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "14px",
  },
  flowchart: { curve: "basis", padding: 15 },
  sequence: { mirrorActors: false },
});

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!chart) return;

    let cancelled = false;
    const id = `mermaid_diagram_${++idCounter}`;

    const renderChart = async () => {
      try {
        // Remove any leftover temp element from a previous failed render
        const existing = document.getElementById(id);
        if (existing) existing.remove();

        // Fix: replace literal newlines inside quoted node labels with <br/>
        // Template literals turn \n into real newlines which breaks mermaid parsing
        const processedChart = chart.replace(/"[^"]*"/g, (match) =>
          match.replace(/\n/g, "<br/>")
        );

        const { svg } = await mermaid.render(id, processedChart);

        if (!cancelled) {
          setSvgContent(svg);
          setError("");
        }
      } catch (err) {
        // Clean up the temp element mermaid may have left behind
        const tempEl = document.getElementById(id);
        if (tempEl) tempEl.remove();

        if (!cancelled) {
          console.error("Mermaid render error:", err);
          setError(String(err));
          setSvgContent("");
        }
      }
    };

    renderChart();

    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="ci-qa__diagram">
        <pre style={{ color: "#94a3b8", fontSize: "0.8rem", whiteSpace: "pre-wrap", margin: 0 }}>
          {chart}
        </pre>
      </div>
    );
  }

  if (!svgContent) {
    return (
      <div className="ci-qa__diagram" style={{ color: "#94a3b8", textAlign: "center", padding: "1rem" }}>
        Rendering diagram…
      </div>
    );
  }

  return (
    <div
      className="ci-qa__diagram"
      ref={containerRef}
      aria-label="Diagram"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
