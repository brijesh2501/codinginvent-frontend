// ============================================================
// HomePage — landing page with hero + featured courses
// ============================================================
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { CourseCard, HeroBanner, Loader, ErrorMessage } from "../../components/shared";
import { getCourses } from "../../services";
import { useAsync } from "../../hooks";
import type { Course } from "../../types";
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

/* ── Trainer data ─────────────────────────────────────────── */
interface Trainer {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialties: string[];
  experience: string;
  linkedin?: string;
}

const trainers: Trainer[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Lead Full-Stack Instructor",
    bio: "12+ years building enterprise apps with React, Node.js, and cloud platforms. Ex-Microsoft, passionate about making complex topics simple.",
    photo: "/images/trainers/trainer-1.svg",
    specialties: ["React", "Node.js", "Azure", "System Design"],
    experience: "12+ Years",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Priya Venkatesh",
    role: "AI & Machine Learning Instructor",
    bio: "AI researcher turned educator. Specialises in LLMs, RAG pipelines, and agentic workflows. Published 15+ papers on applied AI.",
    photo: "/images/trainers/trainer-2.svg",
    specialties: ["GenAI", "LangChain", "Python", "MLOps"],
    experience: "10+ Years",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Amit Deshmukh",
    role: "DevOps & Cloud Instructor",
    bio: "AWS & Azure certified architect. Built CI/CD pipelines for Fortune 500 companies. Believes in learning by deploying real projects.",
    photo: "/images/trainers/trainer-3.svg",
    specialties: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    experience: "9+ Years",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Sneha Patil",
    role: "Java & .NET Instructor",
    bio: "Enterprise backend specialist with deep expertise in Spring Boot, .NET Core, and microservices architecture. Mentored 5000+ students.",
    photo: "/images/trainers/trainer-4.svg",
    specialties: ["Java", ".NET", "Spring Boot", "Microservices"],
    experience: "11+ Years",
    linkedin: "#",
  },
];

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

      {/* ── Trainers ──────────────────────────────────────────── */}
      <section className="ci-trainers">
        <div className="ci-trainers__header">
          <span className="ci-trainers__badge">👨‍🏫 Expert Trainers</span>
          <h2 className="ci-trainers__title">Learn from Industry Veterans</h2>
          <p className="ci-trainers__subtitle">
            Our trainers bring real-world experience from top tech companies —
            not just theory, but battle-tested knowledge.
          </p>
        </div>

        <div className="ci-trainers__grid">
          {trainers.map((t) => (
            <div key={t.id} className="ci-trainer-card">
              <div className="ci-trainer-card__img-wrapper">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="ci-trainer-card__img"
                />
                <span className="ci-trainer-card__exp">{t.experience}</span>
              </div>
              <h3 className="ci-trainer-card__name">{t.name}</h3>
              <span className="ci-trainer-card__role">{t.role}</span>
              <p className="ci-trainer-card__bio">{t.bio}</p>
              <div className="ci-trainer-card__specialties">
                {t.specialties.map((s) => (
                  <span key={s} className="ci-trainer-card__tag">{s}</span>
                ))}
              </div>
              {t.linkedin && (
                <a
                  href={t.linkedin}
                  className="ci-trainer-card__linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn →
                </a>
              )}
            </div>
          ))}
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
