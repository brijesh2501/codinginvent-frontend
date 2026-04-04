// ============================================================
// HomePage — landing page with hero + featured courses
// ============================================================
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { CourseCard, HeroBanner, Loader, ErrorMessage } from "../components/shared";
import { getCourses } from "../services";
import { useAsync } from "../hooks";
import type { Course } from "../types";
import "./HomePage.css";

/* ── Testimonial data ─────────────────────────────────────── */
interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  course: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ananya Mehta",
    role: "Frontend Developer at Flipkart",
    avatar: "👩‍💻",
    rating: 5,
    course: "MERN Full Stack",
    text: "This platform completely transformed my career. The project-based approach helped me land my dream job within 3 months of course completion. The AI-powered code reviews were a game-changer!",
  },
  {
    id: 2,
    name: "Rohit Gupta",
    role: "Software Engineer at Google",
    avatar: "👨‍💻",
    rating: 5,
    course: "Java Enterprise Development",
    text: "The Spring Boot & Microservices sections were incredibly thorough. I went from basic Java knowledge to building production-grade services. Best investment I've made in my career.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "AI Engineer at Microsoft",
    avatar: "👩‍🔬",
    rating: 5,
    course: "Gen AI Full-Stack Developer",
    text: "The RAG pipeline and LangChain modules are unmatched. I built an AI chatbot for my company during the course itself. My manager was blown away — got promoted within weeks!",
  },
  {
    id: 4,
    name: "Vikash Reddy",
    role: "Full Stack Developer at Amazon",
    avatar: "🧑‍💻",
    rating: 5,
    course: "Python Full Stack with Gen AI",
    text: "From Python basics to deploying AI-powered apps on AWS — this course covers everything. The capstone project alone is worth the price. Highly recommend to anyone serious about AI.",
  },
  {
    id: 5,
    name: "Sneha Kulkarni",
    role: "React Native Developer at Swiggy",
    avatar: "👩‍🎨",
    rating: 5,
    course: "React Native Mobile App Development",
    text: "I published my first app on both Play Store and App Store during this course! The step-by-step deployment guide saved me days of Googling. Absolutely brilliant content.",
  },
  {
    id: 6,
    name: "Arjun Nair",
    role: "Backend Engineer at Razorpay",
    avatar: "👨‍🚀",
    rating: 5,
    course: ".NET Full Stack with C#",
    text: "The ASP.NET Core + Azure deployment module is gold. I migrated our legacy system to .NET 8 using patterns I learned here. My team now follows this course as onboarding material.",
  },
  {
    id: 7,
    name: "Meera Iyer",
    role: "Data Science Intern → Full-Time at TCS",
    avatar: "👩‍🎓",
    rating: 5,
    course: "Python Full Stack with Gen AI",
    text: "As a college student, this course bridged the gap between theory and industry. The AI agents module opened my eyes to what's possible. Got my first full-time offer before graduation!",
  },
  {
    id: 8,
    name: "Deepak Choudhary",
    role: "DevOps Engineer at Infosys",
    avatar: "🧑‍🔧",
    rating: 4,
    course: "MEAN Stack Development",
    text: "The Docker + CI/CD + Kubernetes sections were exactly what I needed. I automated our entire deployment pipeline using what I learned. Solid, practical content throughout.",
  },
];

export default function HomePage() {
  const { data: courses, loading, error, refetch } = useAsync(getCourses, []);

  const featuredSlugs = ["generative-ai", "mern-stack", "dotnet-fullstack"];
  const featured = courses
    ? featuredSlugs.reduce<Course[]>((acc, s) => { const c = courses.find((x) => x.slug === s); if (c) acc.push(c); return acc; }, [])
    : [];

  /* ── Testimonial carousel state ──────────────────────────── */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Show 1 card on mobile, 2 on tablet, 3 on desktop
  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [getVisibleCount]);

  const maxSlide = Math.max(0, testimonials.length - visibleCount);

  const nextSlide = useCallback(
    () => setCurrentSlide((s) => (s >= maxSlide ? 0 : s + 1)),
    [maxSlide],
  );
  const prevSlide = () => setCurrentSlide((s) => (s <= 0 ? maxSlide : s - 1));

  // Auto-play every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(nextSlide, 4000);
    return () => clearInterval(id);
  }, [isAutoPlaying, nextSlide]);

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
          <span className="ci-home__stat-value">8+</span>
          <span className="ci-home__stat-label">Courses</span>
        </div>
        <div className="ci-home__stat">
          <span className="ci-home__stat-value">14+</span>
          <span className="ci-home__stat-label">Interview Q&A</span>
        </div>
        <div className="ci-home__stat">
          <span className="ci-home__stat-value">19,700+</span>
          <span className="ci-home__stat-label">Students</span>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section
        className="ci-testimonials"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="ci-testimonials__header">
          <span className="ci-testimonials__badge">💬 Student Stories</span>
          <h2 className="ci-testimonials__title">
            What Our Students Say
          </h2>
          <p className="ci-testimonials__subtitle">
            Real results from real learners — hear how our courses helped them
            land dream jobs and build amazing products.
          </p>
        </div>

        <div className="ci-testimonials__carousel">
          <button
            className="ci-testimonials__arrow ci-testimonials__arrow--prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="ci-testimonials__track-wrapper">
            <div
              className="ci-testimonials__track"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="ci-testimonial-card"
                  style={{ minWidth: `${100 / visibleCount}%` }}
                >
                  <div className="ci-testimonial-card__inner">
                    <div className="ci-testimonial-card__stars">
                      {"★".repeat(t.rating)}
                      {"☆".repeat(5 - t.rating)}
                    </div>
                    <p className="ci-testimonial-card__text">"{t.text}"</p>
                    <div className="ci-testimonial-card__author">
                      <span className="ci-testimonial-card__avatar">{t.avatar}</span>
                      <div>
                        <span className="ci-testimonial-card__name">{t.name}</span>
                        <span className="ci-testimonial-card__role">{t.role}</span>
                      </div>
                    </div>
                    <span className="ci-testimonial-card__course">📚 {t.course}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="ci-testimonials__arrow ci-testimonials__arrow--next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="ci-testimonials__dots">
          {Array.from({ length: maxSlide + 1 }).map((_, i) => (
            <button
              key={i}
              className={`ci-testimonials__dot ${
                i === currentSlide ? "ci-testimonials__dot--active" : ""
              }`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
