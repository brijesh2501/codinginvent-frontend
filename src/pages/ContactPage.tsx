// ============================================================
// ContactPage — contact / enrollment inquiry form
// Captures: Name, Email, Phone, Selected Course, Message.
// On submit the data goes to the lead service (mock JSON now,
// real API later).
// ============================================================
import { useState, type FormEvent } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { submitLead } from "../services";
import { courses } from "../data";
import "./ContactPage.css";

// Form field initial state
const emptyForm = {
  name: "",
  email: "",
  phone: "",
  selectedCourse: "",
  message: "",
};

export default function ContactPage() {
  // If the user arrived via a "Contact / Enroll" button, pre-select the course
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get("course") ?? "";

  const [form, setForm] = useState({
    ...emptyForm,
    selectedCourse: preselected,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Generic field updater
  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  // Handle form submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.selectedCourse) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setSubmitting(true);
      // TODO: Replace JSON with API call later — the service layer
      // currently writes to the in-memory mock leads array.
      await submitLead({
        name: form.name,
        email: form.email,
        phone: form.phone,
        selectedCourse: form.selectedCourse,
        message: form.message,
      });
      setSuccess(true);
      setForm(emptyForm);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ---- Success state ----
  if (success) {
    return (
      <div className="ci-contact ci-contact--success">
        <div className="ci-contact__success-card">
          <span className="ci-contact__success-icon">✅</span>
          <h2>Thank You!</h2>
          <p>
            Your inquiry has been submitted. Our team will reach out to you
            within 24 hours.
          </p>
          <div className="ci-contact__success-actions">
            <Link to="/courses" className="ci-contact__btn ci-contact__btn--primary">
              Browse Courses
            </Link>
            <button
              className="ci-contact__btn ci-contact__btn--ghost"
              onClick={() => setSuccess(false)}
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- Form state ----
  return (
    <div className="ci-contact">
      {/* ---- Hero banner with catchy image ---- */}
      <section className="ci-contact__hero">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
          alt="Team collaborating on a project"
          className="ci-contact__hero-bg"
        />
        <div className="ci-contact__hero-overlay" />
        <div className="ci-contact__hero-content">
          <h1>Let's Build Your Tech Career — Together</h1>
          <p>
            Whether you want to enroll, have a question, or just want to say
            hello — we'd love to hear from you.
          </p>
          <div className="ci-contact__trust">
            <span className="ci-contact__trust-item">🚀 24h Response</span>
            <span className="ci-contact__trust-item">🎓 13,000+ Students</span>
            <span className="ci-contact__trust-item">⭐ 4.8 Avg Rating</span>
          </div>
        </div>
      </section>

      <div className="ci-contact__container">
        {/* Left — info panel with illustration */}
        <div className="ci-contact__info">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
            alt="Person working at a modern desk with code on screen"
            className="ci-contact__info-img"
          />
          <h2>Get in Touch</h2>
          <p>
            Have questions about a course or want to enroll? Fill out the form
            and our team will get back to you within 24 hours.
          </p>

          <div className="ci-contact__details">
            <div className="ci-contact__detail-item">
              <span className="ci-contact__detail-icon">📧</span>
              <span>info@codinginvent.com</span>
            </div>
            <div className="ci-contact__detail-item">
              <span className="ci-contact__detail-icon">📞</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="ci-contact__detail-item">
              <span className="ci-contact__detail-icon">📍</span>
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <form className="ci-contact__form" onSubmit={handleSubmit} noValidate>
          <h2 className="ci-contact__form-title">Contact / Enroll</h2>

          {error && <p className="ci-contact__error">{error}</p>}

          <label className="ci-contact__label">
            <span className="ci-contact__label-text">Name <span className="ci-contact__required">*</span></span>
            <input
              type="text"
              className="ci-contact__input"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your full name"
              required
            />
          </label>

          <label className="ci-contact__label">
            <span className="ci-contact__label-text">Email <span className="ci-contact__required">*</span></span>
            <input
              type="email"
              className="ci-contact__input"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="ci-contact__label">
            <span className="ci-contact__label-text">Phone <span className="ci-contact__required">*</span></span>
            <input
              type="tel"
              className="ci-contact__input"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+91 00000 00000"
              required
            />
          </label>

          <label className="ci-contact__label">
            <span className="ci-contact__label-text">Select Course <span className="ci-contact__required">*</span></span>
            <select
              className="ci-contact__input ci-contact__select"
              value={form.selectedCourse}
              onChange={(e) => update("selectedCourse", e.target.value)}
              required
            >
              <option value="">— Choose a course —</option>
              {courses.map((c) => (
                <option key={c.id} value={c.title}>
                  {c.title}
                </option>
              ))}
              <option value="Other">Other / General Inquiry</option>
            </select>
          </label>

          <label className="ci-contact__label">
            <span className="ci-contact__label-text">Message</span>
            <textarea
              className="ci-contact__input ci-contact__textarea"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Tell us about your goals or questions…"
              rows={4}
            />
          </label>

          <button
            type="submit"
            className="ci-contact__submit"
            disabled={submitting}
          >
            {submitting ? "Submitting…" : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
