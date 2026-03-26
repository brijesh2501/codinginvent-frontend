// ============================================================
// CoursesPage — browse all courses with search + filter
// ============================================================
import { useState, useMemo } from "react";
import { CourseCard, Loader, ErrorMessage, SearchBar } from "../components/shared";
import { getCourses } from "../services";
import { useAsync } from "../hooks";
import "./CoursesPage.css";

export default function CoursesPage() {
  const { data: courses, loading, error, refetch } = useAsync(getCourses, []);
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (!courses) return [];
    return courses.filter((c) => {
      const matchesSearch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase());
      const matchesLevel = levelFilter === "All" || c.level === levelFilter;
      return matchesSearch && matchesLevel;
    });
  }, [courses, search, levelFilter]);

  return (
    <div className="ci-courses-page">
      <div className="ci-courses-page__header">
        <h1>All Courses</h1>
        <p>Browse our curated collection of industry-ready tech courses.</p>
      </div>

      <div className="ci-courses-page__toolbar">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search courses…"
        />
        <div className="ci-courses-page__filters">
          {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
            <button
              key={level}
              className={`ci-filter-btn ${
                levelFilter === level ? "ci-filter-btn--active" : ""
              }`}
              onClick={() => setLevelFilter(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} onRetry={refetch} />}

      {!loading && !error && filtered.length === 0 && (
        <p className="ci-courses-page__empty">
          No courses found. Try a different search or filter.
        </p>
      )}

      <div className="ci-courses-page__grid">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
