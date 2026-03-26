// ============================================================
// ErrorMessage — reusable error display
// ============================================================
import "./ErrorMessage.css";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="ci-error" role="alert">
      <p className="ci-error__text">⚠️ {message}</p>
      {onRetry && (
        <button className="ci-error__retry" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}
