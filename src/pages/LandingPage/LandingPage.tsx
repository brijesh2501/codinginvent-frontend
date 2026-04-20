// ============================================================
// LandingPage — Ad-targeted conversion landing page
// Single-purpose page for Facebook / Instagram ad traffic.
// Goal: capture lead → free live demo class.
// Renders WITHOUT the site Header/Footer (see App routing)
// so the visitor has exactly one action to take.
// ============================================================
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { submitLead } from "../../services";
import "./LandingPage.css";

/* WhatsApp number (same as Contact page) */
const WHATSAPP_NUMBER = "919140868839";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi! I want to join the FREE live coding demo class."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const emptyForm = { name: "", phone: "", email: "", goal: "" };

export default function LandingPage() {
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof typeof emptyForm, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.phone) {
      setError("Please enter your name and phone number.");
      return;
    }

    try {
      setSubmitting(true);
      await submitLead({
        name: form.name,
        email: form.email || "not-provided@landing.local",
        phone: form.phone,
        selectedCourse: "Free Live Demo — Coding Program",
        message: form.goal || "Requested free live demo class from ad landing page.",
      });
      setSuccess(true);
      setForm(emptyForm);
    } catch {
      setError("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document
      .getElementById("ci-lp-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="ci-lp">
      {/* ── Top announcement bar ───────────────────────── */}
      <div className="ci-lp__topbar">
        🎯 Next FREE Live Demo Batch Starts Soon — Limited Seats
      </div>

      {/* ── 1. HERO ────────────────────────────────────── */}
      <section className="ci-lp__hero">
        <div className="ci-lp__hero-inner">
          <div className="ci-lp__hero-copy">
            <span className="ci-lp__pill">Live • Practice-First • 1:1 Mentorship</span>
            <h1 className="ci-lp__h1">
              Become a <span className="ci-lp__accent">Job-Ready Developer</span> with
              Daily Live Coding, 1:1 Mentorship &amp; Real Practice
            </h1>
            <p className="ci-lp__sub">
              No recorded videos. Learn by doing — live classes, pair programming
              with a mentor, and real projects every single day.
            </p>

            <ul className="ci-lp__highlights">
              <li>✅ Daily Live Coding Sessions</li>
              <li>✅ 1:1 Doubt Solving</li>
              <li>✅ Pair Programming with Mentor</li>
              <li>✅ Real Projects + Assignments</li>
              <li>✅ Progress Tracking Dashboard</li>
            </ul>

            <div className="ci-lp__cta-row">
              <button
                type="button"
                className="ci-lp__btn ci-lp__btn--primary"
                onClick={scrollToForm}
              >
                👉 Join FREE Live Demo Class
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ci-lp__btn ci-lp__btn--whatsapp"
              >
                💬 WhatsApp Us
              </a>
            </div>

            <div className="ci-lp__trust">
              <span>⭐ 14+ Years Industry Experience</span>
              <span>🎓 Small Batches</span>
              <span>🛡️ 7-Day Refund Guarantee</span>
            </div>
          </div>

          {/* ── Hero-side form card ───────────────────── */}
          <form
            id="ci-lp-form"
            className="ci-lp__form-card"
            onSubmit={handleSubmit}
            noValidate
          >
            {success ? (
              <div className="ci-lp__success">
                <span className="ci-lp__success-icon">✅</span>
                <h3>You're In!</h3>
                <p>
                  We'll contact you on WhatsApp within a few minutes with your
                  free demo class details.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ci-lp__btn ci-lp__btn--whatsapp ci-lp__btn--block"
                >
                  💬 Message Us on WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h3 className="ci-lp__form-title">Book Your FREE Demo Class</h3>
                <p className="ci-lp__form-sub">
                  Fill this in — we'll call you within 10 minutes.
                </p>

                {error && <p className="ci-lp__error">{error}</p>}

                <input
                  type="text"
                  className="ci-lp__input"
                  placeholder="Your Full Name *"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  required
                />
                <input
                  type="tel"
                  className="ci-lp__input"
                  placeholder="WhatsApp Number *"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  required
                />
                <input
                  type="email"
                  className="ci-lp__input"
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
                <select
                  className="ci-lp__input"
                  value={form.goal}
                  onChange={(e) => update("goal", e.target.value)}
                >
                  <option value="">What's your goal?</option>
                  <option value="Get first IT job">Get my first IT job</option>
                  <option value="Switch to coding career">Switch to coding career</option>
                  <option value="Learn full-stack development">Learn full-stack development</option>
                  <option value="Learn Generative AI">Learn Generative AI</option>
                  <option value="Just exploring">Just exploring</option>
                </select>

                <button
                  type="submit"
                  className="ci-lp__btn ci-lp__btn--primary ci-lp__btn--block"
                  disabled={submitting}
                >
                  {submitting ? "Reserving Your Seat…" : "Reserve My Free Seat"}
                </button>
                <p className="ci-lp__form-note">
                  🔒 Your details are safe. No spam calls.
                </p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* ── 2. TRUST BREAKER — Why most courses fail ──── */}
      <section className="ci-lp__section ci-lp__section--dark">
        <div className="ci-lp__wrap">
          <h2 className="ci-lp__h2">Why Most Online Courses Fail Students</h2>
          <p className="ci-lp__lead">
            You've probably bought courses before. Maybe even finished one. But
            you're still not job-ready. Here's why:
          </p>
          <div className="ci-lp__grid-4">
            <div className="ci-lp__fail-card">
              <span>❌</span>
              <h4>Only Recorded Videos</h4>
              <p>Watch, forget, repeat. No interaction, no accountability.</p>
            </div>
            <div className="ci-lp__fail-card">
              <span>❌</span>
              <h4>No Real Practice</h4>
              <p>Theory looks easy — until you face a blank screen.</p>
            </div>
            <div className="ci-lp__fail-card">
              <span>❌</span>
              <h4>No Doubt Solving</h4>
              <p>Stuck at a bug? You wait days on a forum. Motivation dies.</p>
            </div>
            <div className="ci-lp__fail-card">
              <span>❌</span>
              <h4>No Mentorship</h4>
              <p>Nobody tells you what's wrong, what to fix, or what's next.</p>
            </div>
          </div>
          <p className="ci-lp__verdict">
            👉 Result: You complete the course — but still can't clear an
            interview.
          </p>
        </div>
      </section>

      {/* ── 3. OUR SOLUTION ────────────────────────────── */}
      <section className="ci-lp__section">
        <div className="ci-lp__wrap">
          <h2 className="ci-lp__h2">
            We Train You Like a Developer — Not Just Teach Theory
          </h2>
          <p className="ci-lp__lead">
            Our program is designed like a real IT work environment.
          </p>
          <div className="ci-lp__grid-3">
            <div className="ci-lp__feat">
              <span className="ci-lp__feat-icon">🎥</span>
              <h4>Live Daily Coding</h4>
              <p>Code along with your mentor in real time — not passive videos.</p>
            </div>
            <div className="ci-lp__feat">
              <span className="ci-lp__feat-icon">💪</span>
              <h4>Practice-First Approach</h4>
              <p>80% practice, 20% theory. You build, not just watch.</p>
            </div>
            <div className="ci-lp__feat">
              <span className="ci-lp__feat-icon">👨‍💻</span>
              <h4>Pair Programming</h4>
              <p>Work with your mentor like a real job environment.</p>
            </div>
            <div className="ci-lp__feat">
              <span className="ci-lp__feat-icon">❓</span>
              <h4>1:1 Doubt Solving</h4>
              <p>Get unstuck instantly. No waiting, no guessing.</p>
            </div>
            <div className="ci-lp__feat">
              <span className="ci-lp__feat-icon">🧱</span>
              <h4>Real-World Projects</h4>
              <p>Ship real projects to showcase in interviews.</p>
            </div>
            <div className="ci-lp__feat">
              <span className="ci-lp__feat-icon">📊</span>
              <h4>Progress Dashboard</h4>
              <p>Track classes, assignments and assessments in one portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ────────────────────────────── */}
      <section className="ci-lp__section ci-lp__section--soft">
        <div className="ci-lp__wrap">
          <h2 className="ci-lp__h2">How It Works</h2>
          <div className="ci-lp__steps">
            <div className="ci-lp__step">
              <span className="ci-lp__step-num">1</span>
              <h4>Attend Daily Live Classes</h4>
              <p>Learn concepts by coding in real-time with your mentor.</p>
            </div>
            <div className="ci-lp__step">
              <span className="ci-lp__step-num">2</span>
              <h4>Practice Assignments</h4>
              <p>Daily tasks to strengthen your skills and build muscle memory.</p>
            </div>
            <div className="ci-lp__step">
              <span className="ci-lp__step-num">3</span>
              <h4>Pair Programming</h4>
              <p>Work with a mentor exactly like a real job environment.</p>
            </div>
            <div className="ci-lp__step">
              <span className="ci-lp__step-num">4</span>
              <h4>1:1 Doubt Solving</h4>
              <p>Get unstuck instantly — no waiting in queue.</p>
            </div>
            <div className="ci-lp__step">
              <span className="ci-lp__step-num">5</span>
              <h4>Track Your Progress</h4>
              <p>Monitor improvement through your personal dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ABOUT / AUTHORITY ───────────────────────── */}
      <section className="ci-lp__section">
        <div className="ci-lp__wrap ci-lp__author">
          <div className="ci-lp__author-photo">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Your mentor"
            />
          </div>
          <div>
            <h2 className="ci-lp__h2 ci-lp__h2--left">Learn from an Industry Expert</h2>
            <ul className="ci-lp__author-list">
              <li>✔ 14+ years of IT industry experience</li>
              <li>✔ Worked on enterprise-level production projects</li>
              <li>✔ Passionate trainer &amp; mentor</li>
              <li>✔ Focus on making you job-ready through practice</li>
            </ul>
            <p className="ci-lp__quote">
              “I don't teach courses. I train developers. Practice is everything.”
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. WHAT YOU GET ────────────────────────────── */}
      <section className="ci-lp__section ci-lp__section--soft">
        <div className="ci-lp__wrap">
          <h2 className="ci-lp__h2">What You'll Get</h2>
          <ul className="ci-lp__benefits">
            <li>✅ Live Interactive Classes</li>
            <li>✅ Lifetime Access to Recordings</li>
            <li>✅ Daily Practice Assignments</li>
            <li>✅ Real Projects for Portfolio</li>
            <li>✅ 1:1 Mentorship</li>
            <li>✅ Pair Programming Sessions</li>
            <li>✅ Interview Preparation</li>
            <li>✅ Progress Tracking Portal</li>
            <li>✅ Certificate of Completion</li>
          </ul>
        </div>
      </section>

      {/* ── 7. PRICING ─────────────────────────────────── */}
      <section className="ci-lp__section">
        <div className="ci-lp__wrap">
          <h2 className="ci-lp__h2">Simple, Honest Pricing</h2>
          <p className="ci-lp__lead">Start small. No lock-in. Cancel anytime.</p>

          <div className="ci-lp__pricing">
            <div className="ci-lp__plan">
              <h4>Starter</h4>
              <div className="ci-lp__price">
                ₹999<span>/month</span>
              </div>
              <ul>
                <li>✔ Live daily classes</li>
                <li>✔ Doubt solving sessions</li>
                <li>✔ Practice assignments</li>
                <li>✔ Dashboard access</li>
              </ul>
              <button
                type="button"
                className="ci-lp__btn ci-lp__btn--ghost ci-lp__btn--block"
                onClick={scrollToForm}
              >
                Start Free Demo
              </button>
            </div>

            <div className="ci-lp__plan ci-lp__plan--featured">
              <span className="ci-lp__plan-badge">⭐ Most Popular</span>
              <h4>Full Program</h4>
              <div className="ci-lp__price">
                ₹2,999<span> / one-time</span>
              </div>
              <ul>
                <li>✔ Everything in Starter</li>
                <li>✔ Pair programming 1:1</li>
                <li>✔ Real projects + portfolio</li>
                <li>✔ Interview preparation</li>
                <li>✔ Certificate of completion</li>
                <li>✔ 7-day refund guarantee</li>
              </ul>
              <button
                type="button"
                className="ci-lp__btn ci-lp__btn--primary ci-lp__btn--block"
                onClick={scrollToForm}
              >
                Reserve My Seat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ─────────────────────────────────────── */}
      <section className="ci-lp__section ci-lp__section--soft">
        <div className="ci-lp__wrap ci-lp__faq-wrap">
          <h2 className="ci-lp__h2">Frequently Asked Questions</h2>
          <details className="ci-lp__faq">
            <summary>Is this live or recorded?</summary>
            <p>100% live classes — plus recordings so you can revise anytime.</p>
          </details>
          <details className="ci-lp__faq">
            <summary>Will I get doubt support?</summary>
            <p>Yes — 1:1 doubt solving is included in every plan.</p>
          </details>
          <details className="ci-lp__faq">
            <summary>Is this beginner friendly?</summary>
            <p>Absolutely. We start from basics and go all the way to advanced.</p>
          </details>
          <details className="ci-lp__faq">
            <summary>Will I get job support?</summary>
            <p>Yes — interview preparation, mock interviews and guidance included.</p>
          </details>
          <details className="ci-lp__faq">
            <summary>What if I'm not satisfied?</summary>
            <p>We offer a 7-day refund guarantee. No questions asked.</p>
          </details>
        </div>
      </section>

      {/* ── 9. FINAL CTA ───────────────────────────────── */}
      <section className="ci-lp__section ci-lp__section--cta">
        <div className="ci-lp__wrap ci-lp__final">
          <h2>Ready to Start Your Coding Journey?</h2>
          <p>
            Stop wasting time on theory-based courses. Start learning with real
            practice today.
          </p>
          <div className="ci-lp__cta-row ci-lp__cta-row--center">
            <button
              type="button"
              className="ci-lp__btn ci-lp__btn--primary"
              onClick={scrollToForm}
            >
              👉 Join FREE Live Demo Class
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ci-lp__btn ci-lp__btn--whatsapp"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Mini footer ────────────────────────────────── */}
      <footer className="ci-lp__footer">
        <div className="ci-lp__wrap ci-lp__footer-inner">
          <span>© {new Date().getFullYear()} CodingInvent. All rights reserved.</span>
          <div className="ci-lp__footer-links">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp button ───────────────────── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="ci-lp__wa-float"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
