// ============================================================
// CourseCard — AI-native card for displaying a course summary
// ============================================================
import { Link } from "react-router-dom";
import type { Course } from "../../../types";
import "./CourseCard.css";

interface CourseCardProps {
  course: Course;
}

const difficultyColor: Record<string, string> = {
  Beginner: "#22c55e",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444",
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/courses/${course.slug}`} className="ci-course-card">
      {/* Animated glow border on hover */}
      <span className="ci-course-card__glow" aria-hidden="true" />

      <div className="ci-course-card__thumb">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="ci-course-card__thumb-img"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement!.classList.add("ci-course-card__thumb--fallback");
          }}
        />
        <span
          className="ci-course-card__difficulty"
          style={{ background: difficultyColor[course.level] ?? "#64748b" }}
        >
          {course.level}
        </span>
        <span className="ci-course-card__ai-badge">
          <span className="ci-course-card__ai-sparkle" aria-hidden="true">✦</span> AI Native
        </span>
      </div>

      <div className="ci-course-card__body">
        <span className="ci-course-card__category">{course.category}</span>
        <h3 className="ci-course-card__title">{course.title}</h3>
        <p className="ci-course-card__desc">
          {course.description.length > 100
            ? `${course.description.slice(0, 100)}…`
            : course.description}
        </p>

        {/* AI feature pills */}
        {course.aiFeatures?.length > 0 && (
          <div className="ci-course-card__ai-features">
            {course.aiFeatures.map((f) => (
              <span key={f} className="ci-course-card__ai-pill">🤖 {f}</span>
            ))}
          </div>
        )}

        {/* Topic tags */}
        <div className="ci-course-card__tags">
          {course.topics.slice(0, 4).map((t) => (
            <span key={t} className="ci-course-card__tag">{t}</span>
          ))}
        </div>

        <div className="ci-course-card__meta">
          <span>⭐ {course.rating}</span>
          <span>⏱ {course.duration}</span>
          <span>👥 {course.enrolledCount.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
}
