// ============================================================
// SearchBar — reusable search / filter input
// ============================================================
import "./SearchBar.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search…",
}: SearchBarProps) {
  return (
    <div className="ci-search">
      <span className="ci-search__icon">🔍</span>
      <input
        className="ci-search__input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <button
          className="ci-search__clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
