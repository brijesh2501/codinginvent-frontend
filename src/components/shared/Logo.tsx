// ============================================================
// Logo — CodingInvent brand logo (code brackets + lightbulb)
// Represents "Coding" (angle brackets) + "Invent" (lightbulb)
// ============================================================

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-label="CodingInvent logo"
    >
      <defs>
        <linearGradient id="ci-logo-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="ci-logo-bulb" x1="20" y1="8" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
      </defs>
      {/* Rounded square background */}
      <rect width="48" height="48" rx="12" fill="url(#ci-logo-bg)" />
      {/* Left angle bracket < */}
      <path d="M14 24l7-9" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 24l7 9" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right angle bracket > */}
      <path d="M34 24l-7-9" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 24l-7 9" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Lightbulb in center (invention) */}
      <ellipse cx="24" cy="20" rx="4.5" ry="5" fill="url(#ci-logo-bulb)" />
      <rect x="22" y="25" width="4" height="3" rx="0.8" fill="url(#ci-logo-bulb)" />
      {/* Lightbulb rays */}
      <line x1="24" y1="11" x2="24" y2="13" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18.5" y1="16" x2="20" y2="17.2" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="29.5" y1="16" x2="28" y2="17.2" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
      {/* Forward slash / */}
      <line x1="26" y1="33" x2="22" y2="39" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
