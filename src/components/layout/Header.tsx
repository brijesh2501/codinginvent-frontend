// ============================================================
// Header — top navigation bar
// ============================================================
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../shared";
import "./Header.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/interview-questions", label: "Interview Prep" },
  { to: "/contact", label: "Contact" },
  { to: "/dashboard", label: "Dashboard" },
];

export default function Header() {
  return (
    <header className="ci-header">
      <div className="ci-header__container">
        <Link to="/" className="ci-header__logo">
          <Logo size={36} />
          <span className="ci-header__logo-text">CodingInvent</span>
        </Link>

        <nav className="ci-header__nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `ci-header__link ${isActive ? "ci-header__link--active" : ""}`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ci-header__actions">
          {/* TODO: Replace with real auth state */}
          <Link to="/dashboard" className="ci-header__avatar" title="Profile">
            👤
          </Link>
        </div>
      </div>
    </header>
  );
}
