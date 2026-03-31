// ============================================================
// QuestionAccordion — expandable interview question item
// Uses React Syntax Highlighter + Prism.js for code snippets
// ============================================================
import { useState, type ReactNode } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import csharp from "react-syntax-highlighter/dist/esm/languages/prism/csharp";
import docker from "react-syntax-highlighter/dist/esm/languages/prism/docker";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { InterviewQuestion } from "../../types";
import "./QuestionAccordion.css";

// Register only the languages we need (PrismLight is tree-shakable)
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("sql", sql);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("csharp", csharp);
SyntaxHighlighter.registerLanguage("docker", docker);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("json", json);

// ---- helpers to detect code language from content heuristics ----
const LANG_HINTS: [RegExp, string][] = [
  [/\b(SELECT|INSERT|UPDATE|DELETE|CREATE\s+TABLE|ALTER|DROP|FROM|WHERE|JOIN|GROUP\s+BY)\b/i, "sql"],
  [/\b(def |import |print\(|self\.|__init__|lambda |class\s+\w+:)/,        "python"],
  [/\b(public\s+class|System\.out|void\s+main|@Override|@Autowired)\b/,     "java"],
  [/\b(Console\.Write|namespace |using System|async Task|IActionResult)\b/,  "csharp"],
  [/\b(useState|useEffect|React\.|JSX|<\/?\w+>|className=)/,                "jsx"],
  [/\b(interface |type |: string|: number|<T>|Record<)/,                     "typescript"],
  [/\b(const |let |=>|function |require\(|module\.exports|async |await )/,   "javascript"],
  [/\b(FROM\s+node|WORKDIR|COPY|RUN |EXPOSE |CMD\s+\[)/,                    "docker"],
  [/\b(db\.\w+\.(find|insert|create|update|aggregate))/,                    "javascript"],
];

function detectLanguage(code: string): string {
  for (const [re, lang] of LANG_HINTS) {
    if (re.test(code)) return lang;
  }
  return "text";
}

// ---- Parse answer text into rich segments (text + code) --------
type Segment =
  | { type: "text"; value: string }
  | { type: "code"; value: string; lang: string }
  | { type: "list"; intro: string; items: string[]; ordered: boolean };

/**
 * Detect numbered-list patterns like:
 *   "Lead-in text: 1) item, 2) item, 3) item."
 *   "Lead-in text: 1. item, 2. item"
 * Also handles bullet-style: "- item, - item"
 */
function splitNumberedList(text: string): Segment[] {
  // Pattern: optional intro text, then a sequence of  N) ...  or  N. ...
  const numberedRe = /(?:^|(?<=\s))(\d+)[).]\s/g;
  const matches = [...text.matchAll(numberedRe)];

  // Need at least 2 numbered items to treat as a list
  if (matches.length >= 2) {
    const firstIdx = matches[0].index!;
    const intro = text.slice(0, firstIdx).replace(/[:,]\s*$/, "").trim();
    const items: string[] = [];

    for (let i = 0; i < matches.length; i++) {
      const start = matches[i].index! + matches[i][0].length;
      const end = i + 1 < matches.length ? matches[i + 1].index! : text.length;
      items.push(
        text
          .slice(start, end)
          .replace(/[,;.]\s*$/, "")
          .trim()
      );
    }

    return [{ type: "list", intro, items, ordered: true }];
  }

  // Bullet-style: "- item, - item"
  const bulletParts = text.split(/(?:^|,\s*)-\s+/);
  if (bulletParts.length >= 3) {
    const intro = bulletParts[0].replace(/[:,]\s*$/, "").trim();
    const items = bulletParts.slice(1).map((s) => s.replace(/[,;.]\s*$/, "").trim()).filter(Boolean);
    return [{ type: "list", intro, items, ordered: false }];
  }

  return [{ type: "text", value: text }];
}

function parseAnswer(raw: string): Segment[] {
  // Match backtick-delimited code: `code here`
  const parts = raw.split(/(`[^`]+`)/g);
  const segments: Segment[] = [];

  for (const part of parts) {
    if (!part) continue;
    if (part.startsWith("`") && part.endsWith("`")) {
      const code = part.slice(1, -1);
      segments.push({ type: "code", value: code, lang: detectLanguage(code) });
    } else {
      segments.push(...splitNumberedList(part));
    }
  }

  return segments;
}

// ---- Component ---------------------------------------------------
interface QuestionAccordionProps {
  question: InterviewQuestion;
}

export default function QuestionAccordion({
  question,
}: QuestionAccordionProps) {
  const [open, setOpen] = useState(false);

  const renderAnswer = (): ReactNode => {
    const segments = parseAnswer(question.answer);
    return segments.map((seg, i) => {
      if (seg.type === "code") {
        // Short inline snippets (single-line, < 60 chars) render inline
        const isInline = !seg.value.includes("\n") && seg.value.length < 60;
        if (isInline) {
          return (
            <code key={i} className="ci-qa__inline-code">
              {seg.value}
            </code>
          );
        }
        return (
            <SyntaxHighlighter
              key={i}
              language={seg.lang}
              style={oneDark}
              className="ci-qa__code-block"
              customStyle={{
                borderRadius: "8px",
                fontSize: "0.82rem",
                margin: "0.5rem 0",
                padding: "1rem",
              }}
              wrapLongLines
            >
              {seg.value}
            </SyntaxHighlighter>
        );
      }

      if (seg.type === "list") {
        const ListTag = seg.ordered ? "ol" : "ul";
        return (
          <div key={i} className="ci-qa__list-block">
            {seg.intro && <p className="ci-qa__list-intro">{seg.intro}</p>}
            <ListTag className="ci-qa__list">
              {seg.items.map((item, j) => (
                <li key={j} className="ci-qa__list-item">{item}</li>
              ))}
            </ListTag>
          </div>
        );
      }

      return <span key={i}>{seg.value}</span>;
    });
  };

  return (
    <div className={`ci-qa ${open ? "ci-qa--open" : ""}`}>
      <button
        className="ci-qa__header"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="ci-qa__question">{question.question}</span>
        <span className="ci-qa__toggle">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="ci-qa__body">
          <div className="ci-qa__answer">{renderAnswer()}</div>
          <div className="ci-qa__tags">
            <span
              className={`ci-qa__difficulty ci-qa__difficulty--${question.difficulty.toLowerCase()}`}
            >
              {question.difficulty}
            </span>
            {question.tags.map((tag) => (
              <span key={tag} className="ci-qa__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
