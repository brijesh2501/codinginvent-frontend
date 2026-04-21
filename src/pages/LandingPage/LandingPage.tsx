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

export default function LandingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    workExperience: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.phone) {
      setError("Please enter your name and phone number.");
      return;
    }

    try {
      setSubmitting(true);
      const email = form.email || "not-provided@landing.local";
      const education = form.education || "Not specified";
      const workExperience = form.workExperience || "Not specified";

      await submitLead({
        name: form.name,
        email,
        phone: form.phone,
        selectedCourse: "Free Live Demo — Coding Program",
        message:
          `Requested free live demo class from ad landing page.\n` +
          `Education: ${education}\n` +
          `Work Experience: ${workExperience}`,
      });

      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        education: "",
        workExperience: "",
      });
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
        🎯 Next FREE Live Demo Batch Starts Soon — Hindi Live Classes + Limited Seats
      </div>

      {/* ── 1. HERO ────────────────────────────────────── */}
      <section className="ci-lp__hero">
        <div className="ci-lp__hero-inner">
          <div className="ci-lp__hero-copy">
            <span className="ci-lp__pill">Live • Hindi Medium • Practice-First • 1:1 Mentorship</span>
            <h1 className="ci-lp__h1">
              Become a <span className="ci-lp__accent">Job-Ready Developer</span> with
              Daily Live Coding, 1:1 Mentorship &amp; Real Practice
            </h1>
            <p className="ci-lp__sub">
              No recorded videos. Learn by doing — live classes, pair programming
              with a mentor, and real projects every single day. Classes,
              interview preparation, and mock interviews are conducted in English.
              Our courses are structured from basic to advanced and aligned with
              current industry standards.
            </p>

            <ul className="ci-lp__highlights">
              <li>✅ Daily Live Coding Sessions</li>
              <li>✅ 1:1 Doubt Solving</li>
              <li>✅ Pair Programming with Mentor</li>
              <li>✅ Real Projects + Assignments</li>
              <li>✅ Progress Tracking Dashboard</li>
              <li>✅ Interview Preparation in English</li>
              <li>✅ AI Tools: Copilot + Cursor for 10x Productivity</li>
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
                  value={form.education}
                  onChange={(e) => update("education", e.target.value)}
                >
                  <option value="">Highest education</option>
                  <option value="B.Tech IT/CS">B.Tech (IT/CS)</option>
                  <option value="Diploma IT/CS">Diploma (IT/CS)</option>
                  <option value="BCA">BCA (IT/CS)</option>
                  <option value="MCA in Computers">MCA (IT/CS)</option>
                </select>

                <select
                  className="ci-lp__input"
                  value={form.workExperience}
                  onChange={(e) => update("workExperience", e.target.value)}
                >
                  <option value="">Work experience</option>
                  <option value="Freshers (0 Years)">Freshers (0 Years)</option>
                  <option value="0-1 years">0-1 years</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>

                <button
                  type="submit"
                  className="ci-lp__btn ci-lp__btn--primary ci-lp__btn--block"
                  disabled={submitting}
                >
                  {submitting ? "Reserving Your Seat..." : "Reserve My Free Seat"}
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
            Our program is designed like a real IT work environment, with a
            basic-to-advanced curriculum that matches industry standards.
          </p>
          <div className="ci-lp__grid-3">
            <div className="ci-lp__feat">
              <span className="ci-lp__feat-icon">🎥</span>
              <h4>Live Daily Coding</h4>
              <p>Code along with your mentor in real time in Hindi, not passive videos.</p>
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
              <span className="ci-lp__feat-icon">🤖</span>
              <h4>Copilot + Cursor Workflow</h4>
              <p>After basics, learn GitHub Copilot and Cursor workflows to build faster and become 10x productive.</p>
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
              <h4>Copilot/Cursor Productivity Layer</h4>
              <p>After fundamentals, use Copilot and Cursor the right way to ship projects faster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ABOUT / AUTHORITY ───────────────────────── */}
      <section className="ci-lp__section">
        <div className="ci-lp__wrap ci-lp__author">
          <div className="ci-lp__author-photo">
            <img
              src="/images/trainers/profile.jpg"
              alt="CodingInvent mentor profile"
              onError={(e) => {
                e.currentTarget.src = "/images/trainers/trainer-1.svg";
              }}
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
            <li>✅ Live Interactive Classes in Hindi</li>
            <li>✅ Lifetime Access to Recordings</li>
            <li>✅ Daily Practice Assignments</li>
            <li>✅ Real Projects for Portfolio</li>
            <li>✅ 1:1 Mentorship</li>
            <li>✅ Pair Programming Sessions</li>
            <li>✅ Interview Preparation in English</li>
            <li>✅ Mock Interviews in English</li>
            <li>✅ Copilot/Cursor Training After Basics</li>
            <li>✅ 10x Productivity Workflows for Companies</li>
            <li>✅ Progress Tracking Portal</li>
            <li>✅ Certificate of Completion</li>
          </ul>
        </div>
      </section>

      {/* ── 7. REAL-WORLD PRODUCTS ─────────────────────── */}
      <section className="ci-lp__section">
        <div className="ci-lp__wrap">
          <h2 className="ci-lp__h2">Company-Centric Portfolio Products You Will Build</h2>
          <p className="ci-lp__lead">
            These are high-impact, real-world products that help students get
            shortlisted and hired. We build like industry teams, not college assignments.
          </p>

          <div className="ci-lp__signals">
            <span className="ci-lp__signal">✅ Problem-solving</span>
            <span className="ci-lp__signal">✅ Real-world use cases</span>
            <span className="ci-lp__signal">✅ End-to-end ownership</span>
            <span className="ci-lp__signal">✅ Code quality &amp; architecture</span>
            <span className="ci-lp__signal">✅ Deployment &amp; documentation</span>
          </div>

          <h3 className="ci-lp__product-category">1) Full-Stack Web Products</h3>
          <p className="ci-lp__category-note">
            Every full-stack project includes CI/CD pipeline setup and release workflow understanding.
          </p>
          <div className="ci-lp__products-grid">
            <article className="ci-lp__product-card">
              <span className="ci-lp__product-icon">🧭</span>
              <img
                className="ci-lp__product-img"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
                alt="Job application tracking dashboard"
              />
              <h4>Job Application Tracking System (ATS-like)</h4>
              <p>Real hiring workflow product with status tracking and analytics.</p>
              <ul>
                <li>✔ Login + auth (JWT/OAuth)</li>
                <li>✔ Applied → Interview → Offer flow</li>
                <li>✔ Resume upload, tagging, dashboard</li>
                <li>✔ Bonus: role-based Admin/HR panels</li>
                <li>✔ CI/CD setup + deployment workflow understanding</li>
              </ul>
            </article>

            <article className="ci-lp__product-card">
              <span className="ci-lp__product-icon">🎓</span>
              <img
                className="ci-lp__product-img"
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                alt="Learning platform with online classes"
              />
              <h4>Learning Management System (Mini Coursera)</h4>
              <p>End-to-end learning platform with student progress and assessments.</p>
              <ul>
                <li>✔ Course creation + video lessons</li>
                <li>✔ Progress tracking + quizzes + results</li>
                <li>✔ Certificate generation</li>
                <li>✔ Bonus: plagiarism-safe assessments</li>
                <li>✔ CI/CD setup + release pipeline understanding</li>
              </ul>
            </article>

            <article className="ci-lp__product-card">
              <span className="ci-lp__product-icon">💼</span>
              <img
                className="ci-lp__product-img"
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
                alt="Expense dashboard and finance reports"
              />
              <h4>Expense Tracker for Teams</h4>
              <p>Corporate-style expense system with approvals and reporting.</p>
              <ul>
                <li>✔ Multi-user expense entries</li>
                <li>✔ Approval workflow + admin controls</li>
                <li>✔ Monthly reports + CSV export</li>
                <li>✔ CI/CD setup + production deployment understanding</li>
              </ul>
            </article>
          </div>

          <h3 className="ci-lp__product-category">2) React / Frontend-Focused Products</h3>
          <p className="ci-lp__category-note">
            Every frontend project includes CI/CD setup for build, preview, and production releases.
          </p>
          <div className="ci-lp__products-grid">
            <article className="ci-lp__product-card">
              <span className="ci-lp__product-icon">🧪</span>
              <img
                className="ci-lp__product-img"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                alt="Students preparing for coding interviews"
              />
              <h4>Interview Preparation Platform</h4>
              <p>Placement-focused platform with coding practice and analytics.</p>
              <ul>
                <li>✔ Topic-wise question bank</li>
                <li>✔ Monaco code editor + timed tests</li>
                <li>✔ Progress analytics + bookmarks + notes</li>
                <li>✔ Bonus: AI hints for code improvement</li>
                <li>✔ CI/CD setup + frontend release workflow understanding</li>
              </ul>
            </article>

            <article className="ci-lp__product-card">
              <span className="ci-lp__product-icon">📄</span>
              <img
                className="ci-lp__product-img"
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80"
                alt="Resume analysis and document review"
              />
              <h4>Resume Analyzer &amp; Builder</h4>
              <p>Practical product students can use immediately for job applications.</p>
              <ul>
                <li>✔ Resume upload + ATS score</li>
                <li>✔ Smart improvement suggestions</li>
                <li>✔ Industry-based resume templates</li>
                <li>✔ Bonus: parsing + scoring engine</li>
                <li>✔ CI/CD setup + deployment and rollback understanding</li>
              </ul>
            </article>
          </div>

          <h3 className="ci-lp__product-category">3) Backend / System Design Products</h3>
          <p className="ci-lp__category-note">
            Every backend project includes CI/CD pipeline setup with test automation and deployment flow understanding.
          </p>
          <div className="ci-lp__products-grid">
            <article className="ci-lp__product-card">
              <span className="ci-lp__product-icon">🔗</span>
              <img
                className="ci-lp__product-img"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                alt="Backend infrastructure and link analytics"
              />
              <h4>URL Shortener (Bitly-style)</h4>
              <p>Simple idea with strong backend architecture opportunities.</p>
              <ul>
                <li>✔ Rate limiting + URL expiration</li>
                <li>✔ Analytics dashboard</li>
                <li>✔ Redis caching + load testing</li>
                <li>✔ Architecture explained in README</li>
                <li>✔ CI/CD setup + backend release workflow understanding</li>
              </ul>
            </article>

            <article className="ci-lp__product-card">
              <span className="ci-lp__product-icon">📣</span>
              <img
                className="ci-lp__product-img"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
                alt="Notification and messaging system dashboard"
              />
              <h4>Notification System (Email/SMS/Push)</h4>
              <p>Core SaaS infrastructure system used by almost every product company.</p>
              <ul>
                <li>✔ Queue-based processing + retry logic</li>
                <li>✔ Email + SMS integrations</li>
                <li>✔ Event-driven architecture</li>
                <li>✔ Bonus: Kafka / RabbitMQ</li>
                <li>✔ CI/CD setup + monitoring-aware deploy understanding</li>
              </ul>
            </article>
          </div>

          <h3 className="ci-lp__product-category">4) AI / GenAI High-Demand Products</h3>
          <p className="ci-lp__category-note">
            Companies now demand LLM agent based automation that can handle daily
            repetitive workflows with minimal manual effort.
          </p>
          <p className="ci-lp__category-note">
            Every AI/GenAI project includes CI/CD setup for model-aware app releases and pipeline understanding.
          </p>
          <div className="ci-lp__products-grid">
            <article className="ci-lp__product-card">
              <span className="ci-lp__product-icon">🎯</span>
              <img
                className="ci-lp__product-img"
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80"
                alt="AI interview coach with feedback screen"
              />
              <h4>AI Interview Coach</h4>
              <p>High-demand product for 2026 interview readiness and feedback.</p>
              <ul>
                <li>✔ Mock interview questions</li>
                <li>✔ Voice/text input with AI feedback</li>
                <li>✔ Scorecard + improvement suggestions</li>
                <li>✔ OpenAI/Azure OpenAI + prompt engineering</li>
                <li>✔ CI/CD setup + AI service deployment understanding</li>
              </ul>
            </article>

            <article className="ci-lp__product-card">
              <span className="ci-lp__product-icon">🤖</span>
              <img
                className="ci-lp__product-img"
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80"
                alt="Smart chatbot and AI assistant interface"
              />
              <h4>Smart Chatbot for College / Company</h4>
              <p>Deployable support chatbot with context-aware responses.</p>
              <ul>
                <li>✔ FAQ assistant with document upload</li>
                <li>✔ Context-aware response system</li>
                <li>✔ Admin training panel</li>
                <li>✔ CI/CD setup + chatbot release workflow understanding</li>
              </ul>
            </article>

            <article className="ci-lp__product-card">
              <span className="ci-lp__product-icon">🧾</span>
              <img
                className="ci-lp__product-img"
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
                alt="LLM agent automating support ticket workflows"
              />
              <h4>Support Ticket Resolution Agent</h4>
              <p>
                Build an LLM agent that classifies, prioritizes, drafts responses,
                and escalates support tickets automatically.
              </p>
              <ul>
                <li>✔ Intent + urgency classification</li>
                <li>✔ Suggested replies with approval workflow</li>
                <li>✔ Human-in-the-loop escalation</li>
                <li>✔ SLA tracking dashboard</li>
                <li>✔ CI/CD setup + safe rollout understanding</li>
              </ul>
            </article>

            <article className="ci-lp__product-card">
              <span className="ci-lp__product-icon">⚙️</span>
              <img
                className="ci-lp__product-img"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
                alt="AI operations agent automating repetitive business tasks"
              />
              <h4>Business Ops Automation Agent</h4>
              <p>
                Create an agent that automates recurring ops tasks like status
                updates, report generation, and follow-up reminders.
              </p>
              <ul>
                <li>✔ Multi-step agent workflows</li>
                <li>✔ Tool calling with Sheets/CRM APIs</li>
                <li>✔ Daily summary + action recommendations</li>
                <li>✔ Audit logs for enterprise use</li>
                <li>✔ CI/CD setup + enterprise release process understanding</li>
              </ul>
            </article>
          </div>

          <h3 className="ci-lp__product-category">5) Optional Mobile Product</h3>
          <p className="ci-lp__category-note">
            The optional mobile project also includes CI/CD setup and app delivery workflow understanding.
          </p>
          <div className="ci-lp__products-grid">
            <article className="ci-lp__product-card">
              <span className="ci-lp__product-icon">📱</span>
              <img
                className="ci-lp__product-img"
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80"
                alt="Mobile habit tracker app interface"
              />
              <h4>Habit Tracker with Social Accountability</h4>
              <p>Strong mobile UX project showing retention and behavior design.</p>
              <ul>
                <li>✔ Daily habits + streaks</li>
                <li>✔ Peer accountability</li>
                <li>✔ Notifications + reminders</li>
                <li>✔ Build with Flutter or React Native</li>
                <li>✔ CI/CD setup + mobile release pipeline understanding</li>
              </ul>
            </article>
          </div>

          <div className="ci-lp__project-proof">
            <h3 className="ci-lp__product-category">How to Present Every Project (Critical)</h3>
            <ul className="ci-lp__proof-list">
              <li>✅ GitHub repository with clean structure</li>
              <li>✅ Proper README with setup + architecture diagram</li>
              <li>✅ API documentation + screenshots + live URL</li>
              <li>✅ Deployment with monitoring and production-ready configs</li>
              <li>✅ CI/CD setup with build, test, and deployment pipeline understanding</li>
            </ul>
            <p className="ci-lp__resume-example">
              Resume Example: Built a scalable Job Application Tracking System
              using React and Node.js, supporting 1K+ records with role-based
              access, JWT authentication, and analytics dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. PRICING ─────────────────────────────────── */}
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
                <li>✔ Live daily classes in Hindi</li>
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
                <li>✔ Interview preparation + mock interviews in English</li>
                <li>✔ Copilot/Cursor module after basics for 10x productivity</li>
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

      {/* ── 9. FAQ ─────────────────────────────────────── */}
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
            <p>Yes — interview preparation, mock interviews and guidance are included, and interviews are conducted in English.</p>
          </details>
          <details className="ci-lp__faq">
            <summary>Are classes conducted in Hindi?</summary>
            <p>Yes. Classes are taught in Hindi with practical coding and mentor support.</p>
          </details>
          <details className="ci-lp__faq">
            <summary>When do we learn AI tools for coding?</summary>
            <p>After basics are clear, we teach GitHub Copilot and Cursor workflows so you can build faster and work more productively.</p>
          </details>
          <details className="ci-lp__faq">
            <summary>What if I'm not satisfied?</summary>
            <p>We offer a 7-day refund guarantee. No questions asked.</p>
          </details>
        </div>
      </section>

      {/* ── 10. FINAL CTA ──────────────────────────────── */}
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
