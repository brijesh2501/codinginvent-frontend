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
type Segment = { type: "text"; value: string } | { type: "code"; value: string; lang: string };

function parseAnswer(raw: string): Segment[] {
  // Match backtick-delimited code: `code here`
  const parts = raw.split(/(`[^`]+`)/g);
  return parts
    .filter(Boolean)
    .map((part): Segment => {
      if (part.startsWith("`") && part.endsWith("`")) {
        const code = part.slice(1, -1);
        return { type: "code", value: code, lang: detectLanguage(code) };
      }
      return { type: "text", value: part };
    });
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
