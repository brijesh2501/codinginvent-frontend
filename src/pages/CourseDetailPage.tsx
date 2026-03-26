// ============================================================
// CourseDetailPage — GFG-style structured course view
// Layout inspired by geeksforgeeks.org course pages:
// clean sections, highlights, curriculum, prerequisites,
// and a "Contact / Enroll" CTA that links to the Contact page.
// ============================================================
import { useParams, Link } from "react-router-dom";
import { Loader, ErrorMessage } from "../components/shared";
import { getCourseBySlug } from "../services";
import { useAsync } from "../hooks";
import "./CourseDetailPage.css";

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const {
    data: course,
    loading,
    error,
    refetch,
  } = useAsync(() => getCourseBySlug(slug!), [slug]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;
  if (!course) {
    return (
      <div className="ci-detail ci-detail--empty">
        <h2>Course not found</h2>
        <Link to="/courses">← Back to Courses</Link>
      </div>
    );
  }

  // Build the contact URL with the course pre-selected
  const contactUrl = `/contact?course=${encodeURIComponent(course.title)}`;

  return (
    <div className="ci-detail">
      {/* ---- Top hero strip ---- */}
      <section className="ci-detail__hero">
        <div className="ci-detail__hero-inner">
          <Link to="/courses" className="ci-detail__back">← All Courses</Link>
          <span className="ci-detail__badge">{course.category}</span>
          <h1 className="ci-detail__title">{course.title}</h1>
          <p className="ci-detail__desc">{course.description}</p>

          <div className="ci-detail__meta">
            <span>👤 {course.instructor}</span>
            <span>⏱ {course.duration}</span>
            <span>⭐ {course.rating}</span>
            <span>📚 {course.level}</span>
            <span>👥 {course.enrolledCount.toLocaleString()} students</span>
          </div>

          <div className="ci-detail__cta-row">
            <Link to={contactUrl} className="ci-detail__cta ci-detail__cta--primary">
              Contact / Enroll
            </Link>
            <Link to={contactUrl} className="ci-detail__cta ci-detail__cta--ghost">
              Request Callback
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Body: two-column layout ---- */}
      <div className="ci-detail__body">
        {/* Main column */}
        <div className="ci-detail__main">

          {/* Section: Highlights / What You'll Learn */}
          <section className="ci-detail__section">
            <h2 className="ci-detail__section-title">What You'll Learn</h2>
            <div className="ci-detail__highlights">
              {course.highlights.map((h, i) => (
                <div key={i} className="ci-detail__highlight-item">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Curriculum */}
          <section className="ci-detail__section">
            <h2 className="ci-detail__section-title">
              Course Curriculum
              <span className="ci-detail__section-count">
                {course.curriculum.reduce((n, s) => n + s.lessons.length, 0)} lessons
              </span>
            </h2>
            <div className="ci-detail__curriculum">
              {course.curriculum.map((sec, si) => (
                <details key={si} className="ci-detail__curriculum-section" open={si === 0}>
                  <summary className="ci-detail__curriculum-header">
                    <span>{sec.section}</span>
                    <span className="ci-detail__curriculum-count">{sec.lessons.length} lessons</span>
                  </summary>
                  <ul className="ci-detail__curriculum-list">
                    {sec.lessons.map((lesson, li) => (
                      <li key={li} className="ci-detail__curriculum-lesson">
                        <span className="ci-detail__lesson-icon">📄</span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </section>

          {/* Section: Topics Covered */}
          <section className="ci-detail__section">
            <h2 className="ci-detail__section-title">Topics Covered</h2>
            <div className="ci-detail__topics-grid">
              {course.topics.map((topic) => (
                <span key={topic} className="ci-detail__topic-chip">{topic}</span>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="ci-detail__sidebar">
          <div className="ci-detail__sidebar-card">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="ci-detail__sidebar-img"
            />

            <div className="ci-detail__sidebar-body">
              <h3 className="ci-detail__sidebar-title">Ready to start?</h3>
              <p className="ci-detail__sidebar-text">
                Contact us to enroll or ask any questions about this course.
              </p>
              <Link to={contactUrl} className="ci-detail__sidebar-btn">
                Contact / Enroll
              </Link>
            </div>

            {/* Quick facts */}
            <ul className="ci-detail__sidebar-facts">
              <li><strong>Duration:</strong> {course.duration}</li>
              <li><strong>Level:</strong> {course.level}</li>
              <li><strong>Instructor:</strong> {course.instructor}</li>
              <li><strong>Students:</strong> {course.enrolledCount.toLocaleString()}</li>
              <li><strong>Rating:</strong> ⭐ {course.rating}</li>
            </ul>

            {/* Prerequisites */}
            {course.prerequisites.length > 0 && (
              <div className="ci-detail__sidebar-prereqs">
                <h4>Prerequisites</h4>
                <ul>
                  {course.prerequisites.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
