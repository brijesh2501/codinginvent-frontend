// ============================================================
// Footer — site-wide footer
// ============================================================
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ci-footer">
      <div className="ci-footer__container">
        <p className="ci-footer__copy">
          &copy; {year} CodingInvent. All rights reserved.
        </p>
        <div className="ci-footer__links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
