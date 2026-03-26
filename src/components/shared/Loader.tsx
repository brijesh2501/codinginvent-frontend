// ============================================================
// Loader — shared loading spinner
// ============================================================
import "./Loader.css";

export default function Loader() {
  return (
    <div className="ci-loader" role="status" aria-label="Loading">
      <div className="ci-loader__spinner" />
      <span className="ci-loader__text">Loading…</span>
    </div>
  );
}
