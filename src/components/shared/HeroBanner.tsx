// ============================================================
// HeroBanner — Udemy-style rotating hero carousel
// Professional banner with real images + text card overlay
// ============================================================
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";

interface BannerSlide {
  id: number;
  image: string;
  title: string;
  highlight: string;
  subtitle: string;
  cta: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
}

const slides: BannerSlide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1684369176170-463e84248b70?auto=format&fit=crop&w=1920&q=80",
    title: "New!",
    highlight: "Generative AI Full-Stack Developer Course",
    subtitle:
      "Master prompt engineering, LangChain, RAG, OpenAI APIs, and build production-ready AI apps — from scratch to deployment.",
    cta: { label: "Contact", to: "/contact?course=Generative+AI+Full-Stack+Developer" },
    ctaSecondary: { label: "Enroll", to: "/contact?course=Generative+AI+Full-Stack+Developer" },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
    title: "Build In-Demand",
    highlight: "Tech Skills",
    subtitle:
      "Industry-ready courses in MERN, MEAN, Java, .NET, PHP & Generative AI — learn from real-world experts.",
    cta: { label: "Explore Courses", to: "/courses" },
    ctaSecondary: { label: "Contact Us", to: "/contact" },
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80",
    title: "Ace Your Next",
    highlight: "Tech Interview",
    subtitle:
      "Curated Q&A across React, JavaScript, Node.js, Java, .NET, SQL & GenAI — with detailed explanations.",
    cta: { label: "Interview Prep", to: "/interview-questions" },
    ctaSecondary: { label: "Contact", to: "/contact" },
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=1920&q=80",
    title: "Learn Anywhere,",
    highlight: "Grow Everywhere",
    subtitle:
      "Track your progress across courses and pick up right where you left off — on any device.",
    cta: { label: "Contact", to: "/contact" },
    ctaSecondary: { label: "Enroll", to: "/contact" },
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroBanner() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setActive((i) => (i + 1) % slides.length),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[active];

  return (
    <section
      className="ci-banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images — all preloaded, only active one visible */}
      {slides.map((s, i) => (
        <img
          key={s.id}
          src={s.image}
          alt=""
          aria-hidden="true"
          className={`ci-banner__bg ${i === active ? "ci-banner__bg--active" : ""}`}
        />
      ))}

      {/* Dark overlay for readability */}
      <div className="ci-banner__overlay" />

      {/* Content card (Udemy-style left-aligned card) */}
      <div className="ci-banner__container">
        <div className="ci-banner__card" key={slide.id}>
          <h1 className="ci-banner__title">
            {slide.title}{" "}
            <span className="ci-banner__highlight">{slide.highlight}</span>
          </h1>
          <p className="ci-banner__subtitle">{slide.subtitle}</p>
          <div className="ci-banner__actions">
            <Link to={slide.cta.to} className="ci-banner__btn ci-banner__btn--primary">
              {slide.cta.label}
            </Link>
            {slide.ctaSecondary && (
              <Link
                to={slide.ctaSecondary.to}
                className="ci-banner__btn ci-banner__btn--ghost"
              >
                {slide.ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button className="ci-banner__arrow ci-banner__arrow--left" onClick={prev} aria-label="Previous slide">
        ‹
      </button>
      <button className="ci-banner__arrow ci-banner__arrow--right" onClick={next} aria-label="Next slide">
        ›
      </button>

      {/* Dot indicators */}
      <div className="ci-banner__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`ci-banner__dot ${i === active ? "ci-banner__dot--active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
