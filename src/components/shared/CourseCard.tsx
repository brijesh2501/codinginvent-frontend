// ============================================================
// CourseCard — reusable card for displaying a course summary
// ============================================================
import { Link } from "react-router-dom";
import type { Course } from "../../types";
import "./CourseCard.css";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/courses/${course.slug}`} className="ci-course-card">
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
      </div>

      <div className="ci-course-card__body">
        <span className="ci-course-card__category">{course.category}</span>
        <h3 className="ci-course-card__title">{course.title}</h3>
        <p className="ci-course-card__desc">
          {course.description.slice(0, 100)}…
        </p>

        <div className="ci-course-card__meta">
          <span>⭐ {course.rating}</span>
          <span>⏱ {course.duration}</span>
          <span className="ci-course-card__level">{course.level}</span>
        </div>

        <div className="ci-course-card__footer">
          <span className="ci-course-card__enrolled">
            {course.enrolledCount.toLocaleString()} enrolled
          </span>
        </div>
      </div>
    </Link>
  );
}
