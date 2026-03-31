// ============================================================
// BlogsPage — blog listing with category filter
// ============================================================
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { blogs, blogCategories } from "../data/blogs";
import "./BlogsPage.css";

const allCategories = ["All", ...blogCategories];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? blogs
        : blogs.filter((b) => b.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="ci-blogs">
      <div className="ci-blogs__header">
        <span className="ci-blogs__badge">📝 Tech Blogs</span>
        <h1 className="ci-blogs__title">Technical Deep Dives &amp; Comparisons</h1>
        <p className="ci-blogs__subtitle">
          Visual explanations of concepts that matter — diagrams, comparison
          tables, and real-world examples.
        </p>
      </div>

      <div className="ci-blogs__filters">
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`ci-blogs__filter ${
              activeCategory === cat ? "ci-blogs__filter--active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="ci-blogs__grid">
        {filtered.map((blog) => (
          <Link
            to={`/blogs/${blog.slug}`}
            key={blog.id}
            className="ci-blog-card"
          >
            <div className="ci-blog-card__thumb">{blog.thumbnail}</div>
            <div className="ci-blog-card__body">
              <span className="ci-blog-card__category">{blog.category}</span>
              <h3 className="ci-blog-card__title">{blog.title}</h3>
              <p className="ci-blog-card__desc">{blog.description}</p>
              <div className="ci-blog-card__tags">
                {blog.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="ci-blog-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="ci-blog-card__meta">
                <span>📅 {blog.publishedAt}</span>
                <span>⏱ {blog.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="ci-blogs__empty">No blogs found in this category.</p>
      )}
    </section>
  );
}
