// ============================================================
// BlogDetailPage — individual blog with diagrams + comparisons
// ============================================================
import { lazy, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import ComparisonTable from "../components/shared/ComparisonTable";
import "./BlogDetailPage.css";

const MermaidDiagram = lazy(
  () => import("../components/shared/MermaidDiagram"),
);

/** Splits section content into paragraphs and detects numbered lists (e.g. "1) …") */
function renderSectionContent(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ol key={`ol-${elements.length}`} className="ci-blog-detail__list">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>,
      );
      listItems = [];
    }
  };

  for (const line of lines) {
    const match = line.match(/^\d+\)\s*(.*)/);
    if (match) {
      listItems.push(match[1]);
    } else {
      flushList();
      const trimmed = line.trim();
      if (trimmed) {
        elements.push(<p key={`p-${elements.length}`}>{trimmed}</p>);
      }
    }
  }
  flushList();

  return elements;
}

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <section className="ci-blog-detail ci-blog-detail--empty">
        <h2>Blog not found</h2>
        <Link to="/blogs" className="ci-blog-detail__back">
          ← Back to Blogs
        </Link>
      </section>
    );
  }

  return (
    <section className="ci-blog-detail">
      <div className="ci-blog-detail__container">
        {/* Breadcrumb */}
        <Link to="/blogs" className="ci-blog-detail__back">
          ← All Blogs
        </Link>

        {/* Hero */}
        <header className="ci-blog-detail__hero">
          <span className="ci-blog-detail__category">{blog.category}</span>
          <h1 className="ci-blog-detail__title">{blog.title}</h1>
          <p className="ci-blog-detail__desc">{blog.description}</p>
          <div className="ci-blog-detail__meta">
            <span>✍️ {blog.author}</span>
            <span>📅 {blog.publishedAt}</span>
            <span>⏱ {blog.readTime}</span>
          </div>
          <div className="ci-blog-detail__tags">
            {blog.tags.map((tag) => (
              <span key={tag} className="ci-blog-detail__tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Sections */}
        <div className="ci-blog-detail__content">
          {blog.sections.map((section, idx) => (
            <article key={idx} className="ci-blog-detail__section">
              <h2 className="ci-blog-detail__section-heading">
                <span className="ci-blog-detail__section-num">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>

              <div className="ci-blog-detail__section-text">
                {renderSectionContent(section.content)}
              </div>

              {/* Diagram */}
              {section.diagram && (
                <div className="ci-blog-detail__diagram">
                  <div className="ci-blog-detail__diagram-label">
                    📊 Visual Representation
                  </div>
                  <Suspense
                    fallback={
                      <div className="ci-blog-detail__diagram-loading">
                        Loading diagram…
                      </div>
                    }
                  >
                    <MermaidDiagram chart={section.diagram} />
                  </Suspense>
                </div>
              )}

              {/* Comparison Table */}
              {section.comparison && (
                <ComparisonTable comparison={section.comparison} />
              )}

              {/* Code Snippet */}
              {section.codeSnippet && (
                <div className="ci-blog-detail__code">
                  <div className="ci-blog-detail__code-lang">
                    {section.codeSnippet.language}
                  </div>
                  <pre>
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* More Blogs */}
        <div className="ci-blog-detail__more">
          <h3>Read More</h3>
          <div className="ci-blog-detail__more-grid">
            {blogs
              .filter((b) => b.id !== blog.id)
              .slice(0, 3)
              .map((b) => (
                <Link
                  to={`/blogs/${b.slug}`}
                  key={b.id}
                  className="ci-blog-detail__more-card"
                >
                  <span className="ci-blog-detail__more-thumb">
                    {b.thumbnail}
                  </span>
                  <span className="ci-blog-detail__more-title">{b.title}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
