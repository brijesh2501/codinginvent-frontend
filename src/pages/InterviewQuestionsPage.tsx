// ============================================================
// InterviewQuestionsPage — browse questions by category
// ============================================================
import { useState, useMemo } from "react";
import {
  QuestionAccordion,
  Loader,
  ErrorMessage,
  SearchBar,
} from "../components/shared";
import { getQuestions } from "../services";
import { questionCategories } from "../data";
import { useAsync } from "../hooks";
import "./InterviewQuestionsPage.css";

export default function InterviewQuestionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const {
    data: questions,
    loading,
    error,
    refetch,
  } = useAsync(
    () =>
      getQuestions(selectedCategory === "All" ? undefined : selectedCategory),
    [selectedCategory]
  );

  const filtered = useMemo(() => {
    if (!questions) return [];
    if (!search) return questions;
    const term = search.toLowerCase();
    return questions.filter(
      (q) =>
        q.question.toLowerCase().includes(term) ||
        q.tags.some((t) => t.includes(term))
    );
  }, [questions, search]);

  return (
    <div className="ci-iq-page">
      <div className="ci-iq-page__header">
        <h1>Interview Preparation</h1>
        <p>
          Category-based questions with detailed answers to help you ace your
          next tech interview.
        </p>
      </div>

      <div className="ci-iq-page__toolbar">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search questions…"
        />
        <div className="ci-iq-page__categories">
          <button
            className={`ci-filter-btn ${
              selectedCategory === "All" ? "ci-filter-btn--active" : ""
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          {questionCategories.map((cat) => (
            <button
              key={cat}
              className={`ci-filter-btn ${
                selectedCategory === cat ? "ci-filter-btn--active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} onRetry={refetch} />}

      {!loading && !error && filtered.length === 0 && (
        <p className="ci-iq-page__empty">
          No questions found for this category.
        </p>
      )}

      <div className="ci-iq-page__list">
        {filtered.map((q) => (
          <QuestionAccordion key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}
