// ============================================================
// HomePage — landing page with hero + featured courses
// ============================================================
import { Link } from "react-router-dom";
import { CourseCard, HeroBanner, Loader, ErrorMessage } from "../components/shared";
import { getCourses } from "../services";
import { useAsync } from "../hooks";
import type { Course } from "../types";
import "./HomePage.css";

export default function HomePage() {
  const { data: courses, loading, error, refetch } = useAsync(getCourses, []);

  const featuredSlugs = ["generative-ai", "mern-stack", "dotnet-fullstack"];
  const featured = courses
    ? featuredSlugs.reduce<Course[]>((acc, s) => { const c = courses.find((x) => x.slug === s); if (c) acc.push(c); return acc; }, [])
    : [];

  return (
    <div className="ci-home">
      {/* Hero Banner — Udemy-style carousel */}
      <HeroBanner />

      {/* Featured Courses */}
      <section className="ci-home__section">
        <div className="ci-home__section-header">
          <h2>Featured Courses</h2>
          <Link to="/courses" className="ci-home__view-all">
            View All →
          </Link>
        </div>

        {loading && <Loader />}
        {error && <ErrorMessage message={error} onRetry={refetch} />}

        <div className="ci-home__grid">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="ci-home__stats">
        <div className="ci-home__stat">
          <span className="ci-home__stat-value">7+</span>
          <span className="ci-home__stat-label">Courses</span>
        </div>
        <div className="ci-home__stat">
          <span className="ci-home__stat-value">14+</span>
          <span className="ci-home__stat-label">Interview Q&A</span>
        </div>
        <div className="ci-home__stat">
          <span className="ci-home__stat-value">14,500+</span>
          <span className="ci-home__stat-label">Students</span>
        </div>
      </section>
    </div>
  );
}
