// ============================================================
// DashboardPage — user dashboard with enrolled courses
// ============================================================
import { Link } from "react-router-dom";
import { Loader, ErrorMessage } from "../components/shared";
import { getCurrentUser, getEnrollmentsByUser, getCourses } from "../services";
import { useAsync } from "../hooks";
import "./DashboardPage.css";

export default function DashboardPage() {
  const { data: user, loading: loadingUser } = useAsync(getCurrentUser, []);
  const {
    data: enrollments,
    loading: loadingEnrollments,
    error,
    refetch,
  } = useAsync(
    () => (user ? getEnrollmentsByUser(user.id) : Promise.resolve({ data: [], success: true })),
    [user?.id]
  );
  const { data: courses } = useAsync(getCourses, []);

  const loading = loadingUser || loadingEnrollments;

  const enrolledCourses = (enrollments ?? []).map((e) => {
    const course = courses?.find((c) => c.id === e.courseId);
    return { ...e, course };
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <div className="ci-dashboard">
      {/* Profile Card */}
      <section className="ci-dashboard__profile">
        <div className="ci-dashboard__avatar">
          {user?.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1 className="ci-dashboard__name">{user?.name}</h1>
          <p className="ci-dashboard__email">{user?.email}</p>
          <span className="ci-dashboard__role">{user?.role}</span>
        </div>
      </section>

      {/* Enrolled Courses */}
      <section className="ci-dashboard__enrollments">
        <h2>My Enrolled Courses</h2>

        {enrolledCourses.length === 0 && (
          <p className="ci-dashboard__empty">
            You haven't enrolled in any courses yet.{" "}
            <Link to="/courses">Browse Courses →</Link>
          </p>
        )}

        <div className="ci-dashboard__enroll-list">
          {enrolledCourses.map((item) => (
            <div key={item.id} className="ci-dashboard__enroll-card">
              <div className="ci-dashboard__enroll-info">
                <h3>{item.course?.title ?? "Unknown Course"}</h3>
                <span className="ci-dashboard__status">{item.status}</span>
              </div>
              <div className="ci-dashboard__progress">
                <div className="ci-dashboard__progress-bar">
                  <div
                    className="ci-dashboard__progress-fill"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <span className="ci-dashboard__progress-label">
                  {item.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
