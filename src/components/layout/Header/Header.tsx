// ============================================================
// Header — top navigation bar
// ============================================================
import { useState, useCallback, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "../../shared";
import "./Header.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/interview-questions", label: "Interview Prep" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
  { to: "/dashboard", label: "Dashboard" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="ci-header">
      <div className="ci-header__container">
        <Link to="/" className="ci-header__logo" onClick={closeMenu}>
          <Logo size={36} />
          <span className="ci-header__logo-text">CodingInvent</span>
        </Link>

        {/* Hamburger button — visible only on mobile */}
        <button
          className={`ci-header__hamburger ${menuOpen ? "ci-header__hamburger--open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="ci-header__hamburger-line" />
          <span className="ci-header__hamburger-line" />
          <span className="ci-header__hamburger-line" />
        </button>

        <nav className={`ci-header__nav ${menuOpen ? "ci-header__nav--open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `ci-header__link ${isActive ? "ci-header__link--active" : ""}`
              }
              end={link.to === "/"}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ci-header__actions">
          {/* TODO: Replace with real auth state */}
          <Link to="/dashboard" className="ci-header__avatar" title="Profile" onClick={closeMenu}>
            👤
          </Link>
        </div>
      </div>

      {/* Backdrop overlay when mobile menu is open */}
      {menuOpen && <div className="ci-header__backdrop" onClick={closeMenu} />}
    </header>
  );
}
