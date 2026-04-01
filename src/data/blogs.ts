// ============================================================
// Mock Data: Blogs — technical deep-dives with visual diagrams
// ============================================================
import type { Blog } from "../types";

export const blogs: Blog[] = [
  {
    id: "1",
    slug: "react-vs-angular-vs-vue",
    title: "React vs Angular vs Vue — Which One to Pick in 2026?",
    description:
      "A deep-dive comparison of the three most popular frontend frameworks with visual diagrams and side-by-side feature tables.",
    thumbnail: "⚛️",
    category: "Frontend",
    tags: ["React", "Angular", "Vue", "JavaScript"],
    author: "CodingInvent",
    publishedAt: "2026-03-28",
    readTime: "8 min",
    sections: [
      {
        heading: "Overview",
        content:
          "Choosing a frontend framework is one of the most important architectural decisions. Each framework has its philosophy, ecosystem, and trade-offs. Let's break them down visually.",
        diagram: `graph TD
  A["Frontend Frameworks"] --> B["React"]
  A --> C["Angular"]
  A --> D["Vue"]
  B --> B1["Library - UI only"]
  B --> B2["Virtual DOM"]
  B --> B3["JSX"]
  C --> C1["Full Framework"]
  C --> C2["Real DOM + Change Detection"]
  C --> C3["TypeScript First"]
  D --> D1["Progressive Framework"]
  D --> D2["Virtual DOM"]
  D --> D3["SFC - Single File Components"]`,
      },
      {
        heading: "Feature Comparison",
        content:
          "Here is a side-by-side comparison of core features across all three frameworks.",
        comparison: {
          title: "React vs Angular vs Vue",
          headers: ["Feature", "React / Angular / Vue"],
          rows: [
            ["Type", "Library", "Full Framework / Progressive"],
            ["Language", "JSX + JS/TS", "TypeScript / JS + Template"],
            ["DOM", "Virtual DOM", "Real DOM + Zones / Virtual DOM"],
            ["Learning Curve", "Medium", "Steep / Easy"],
            ["State Mgmt", "Redux / Zustand", "NgRx / Pinia"],
            ["Mobile", "React Native", "Ionic / Capacitor"],
            ["Bundle Size", "~42KB", "~143KB / ~33KB"],
            ["Backed By", "Meta", "Google / Community"],
          ],
        },
      },
      {
        heading: "Architecture Patterns",
        content:
          "Each framework follows a different pattern for component communication and data flow.",
        diagram: `graph LR
  subgraph React
    R1["Parent"] -->|props| R2["Child"]
    R2 -->|callback| R1
    R3["Context/Redux"] -.->|global| R1
  end
  subgraph Angular
    A1["Parent"] -->|Input| A2["Child"]
    A2 -->|Output + EventEmitter| A1
    A3["Service + RxJS"] -.->|DI| A1
  end
  subgraph Vue
    V1["Parent"] -->|props| V2["Child"]
    V2 -->|emit| V1
    V3["Pinia Store"] -.->|reactive| V1
  end`,
      },
      {
        heading: "When to Use What?",
        content:
          "There is no single best framework. The choice depends on your project needs, team expertise, and long-term goals.",
        diagram: `graph TD
  START{"Project Need?"} -->|Large Enterprise App| ANG["Angular"]
  START -->|Flexible UI Library| REA["React"]
  START -->|Quick Prototype| VUE["Vue"]
  START -->|Mobile App Needed| REA
  START -->|Strong TypeScript| ANG
  START -->|Easy Learning Curve| VUE`,
      },
    ],
  },
  {
    id: "2",
    slug: "sql-vs-nosql",
    title: "SQL vs NoSQL — Choosing the Right Database",
    description:
      "Understand when to use relational vs non-relational databases with visual comparison tables and architecture diagrams.",
    thumbnail: "🗄️",
    category: "Database",
    tags: ["SQL", "NoSQL", "MongoDB", "PostgreSQL"],
    author: "CodingInvent",
    publishedAt: "2026-03-25",
    readTime: "6 min",
    sections: [
      {
        heading: "Overview",
        content:
          "Databases are the backbone of any application. The choice between SQL and NoSQL affects scalability, performance, and development speed.",
        diagram: `graph TD
  DB["Database Types"] --> SQL["SQL / Relational"]
  DB --> NOSQL["NoSQL / Non-Relational"]
  SQL --> S1["PostgreSQL"]
  SQL --> S2["MySQL"]
  SQL --> S3["SQL Server"]
  NOSQL --> N1["MongoDB - Document"]
  NOSQL --> N2["Redis - Key Value"]
  NOSQL --> N3["Cassandra - Column"]
  NOSQL --> N4["Neo4j - Graph"]`,
      },
      {
        heading: "Feature Comparison",
        content: "A detailed comparison of SQL and NoSQL databases.",
        comparison: {
          title: "SQL vs NoSQL",
          headers: ["SQL (Relational)", "NoSQL (Non-Relational)"],
          rows: [
            ["Structure", "Fixed schema, tables, rows", "Flexible schema, documents, key-value"],
            ["Query Language", "SQL", "Varies: MQL, CQL, etc."],
            ["Scaling", "Vertical - scale up", "Horizontal - scale out"],
            ["ACID", "Full ACID compliance", "Eventual consistency - BASE"],
            ["Joins", "Native JOIN support", "No native joins, denormalized"],
            ["Best For", "Complex queries, transactions", "High throughput, flexible data"],
            ["Examples", "PostgreSQL, MySQL", "MongoDB, Redis, Cassandra"],
          ],
        },
      },
      {
        heading: "When to Use What?",
        content:
          "The decision depends on data structure, scale requirements, and consistency needs.",
        diagram: `graph TD
  START{"Your Data?"} -->|Structured + Relationships| SQL_DB["Use SQL"]
  START -->|Unstructured / Semi-structured| NOSQL_DB["Use NoSQL"]
  START -->|Need Transactions| SQL_DB
  START -->|Need Horizontal Scale| NOSQL_DB
  START -->|Complex Joins| SQL_DB
  START -->|Rapid Prototyping| NOSQL_DB`,
      },
    ],
  },
  {
    id: "3",
    slug: "rest-vs-graphql-vs-grpc",
    title: "REST vs GraphQL vs gRPC — API Showdown",
    description:
      "Compare three popular API paradigms with architecture diagrams and practical use-case analysis.",
    thumbnail: "🔌",
    category: "Backend",
    tags: ["REST", "GraphQL", "gRPC", "API"],
    author: "CodingInvent",
    publishedAt: "2026-03-20",
    readTime: "7 min",
    sections: [
      {
        heading: "Overview",
        content:
          "APIs are the glue between services. REST, GraphQL, and gRPC each solve communication differently.",
        diagram: `graph LR
  CLIENT["Client App"] -->|HTTP + JSON| REST["REST API"]
  CLIENT -->|HTTP + JSON| GQL["GraphQL API"]
  CLIENT -->|HTTP/2 + Protobuf| GRPC["gRPC API"]
  REST --> SERVER1["Server"]
  GQL --> SERVER2["Server"]
  GRPC --> SERVER3["Server"]`,
      },
      {
        heading: "Comparison",
        content: "Side-by-side comparison of REST, GraphQL, and gRPC.",
        comparison: {
          title: "REST vs GraphQL vs gRPC",
          headers: ["Feature", "REST / GraphQL / gRPC"],
          rows: [
            ["Protocol", "HTTP/1.1", "HTTP/1.1 / HTTP/2"],
            ["Data Format", "JSON", "JSON / Protobuf binary"],
            ["Typing", "OpenAPI optional", "Schema SDL / Proto files strict"],
            ["Over-fetching", "Common problem", "Client picks fields / No, strict contract"],
            ["Real-time", "Polling / WebSocket", "Subscriptions / Bidirectional streaming"],
            ["Browser Support", "Full", "Full / Limited, needs proxy"],
            ["Best For", "CRUD, Public APIs", "Flexible frontends / Internal microservices"],
          ],
        },
      },
      {
        heading: "Request Flow",
        content: "How each API paradigm handles a typical request.",
        diagram: `sequenceDiagram
  participant C as Client
  participant R as REST Server
  participant G as GraphQL Server
  participant P as gRPC Server

  Note over C,R: REST - Multiple endpoints
  C->>R: GET /users/1
  R-->>C: full user object + unwanted fields
  C->>R: GET /users/1/posts
  R-->>C: all posts

  Note over C,G: GraphQL - Single endpoint
  C->>G: POST /graphql query user + posts
  G-->>C: only requested fields

  Note over C,P: gRPC - RPC call
  C->>P: GetUser via protobuf
  P-->>C: binary response, very fast`,
      },
    ],
  },
  {
    id: "4",
    slug: "monolith-vs-microservices",
    title: "Monolith vs Microservices — Architecture Decision Guide",
    description:
      "Learn the trade-offs between monolithic and microservice architectures with visual diagrams.",
    thumbnail: "🏗️",
    category: "System Design",
    tags: ["Microservices", "Monolith", "Architecture", "Docker"],
    author: "CodingInvent",
    publishedAt: "2026-03-15",
    readTime: "9 min",
    sections: [
      {
        heading: "Architecture Overview",
        content:
          "Monoliths bundle everything into one deployable unit. Microservices split functionality into independent services.",
        diagram: `graph TB
  subgraph Monolith
    M["Single App"] --> M1["Auth"]
    M --> M2["Orders"]
    M --> M3["Payments"]
    M --> M4["Single DB"]
  end
  subgraph Microservices
    GW["API Gateway"] --> S1["Auth Service"]
    GW --> S2["Orders Service"]
    GW --> S3["Payments Service"]
    S1 --> D1[("Auth DB")]
    S2 --> D2[("Orders DB")]
    S3 --> D3[("Payments DB")]
  end`,
      },
      {
        heading: "Comparison",
        content: "Key differences between the two approaches.",
        comparison: {
          title: "Monolith vs Microservices",
          headers: ["Monolith", "Microservices"],
          rows: [
            ["Deployment", "Single unit", "Independent per service"],
            ["Scaling", "Scale entire app", "Scale individual services"],
            ["Complexity", "Low initially", "High - distributed systems"],
            ["Data", "Shared database", "Database per service"],
            ["Team", "Single team", "Multiple autonomous teams"],
            ["Fault Isolation", "One bug crashes all", "Failure is isolated"],
            ["Tech Stack", "Single stack", "Polyglot, mix languages"],
            ["DevOps", "Simple CI/CD", "Complex: K8s, Docker, etc."],
          ],
        },
      },
      {
        heading: "Evolution Path",
        content:
          "Most successful companies start monolith and migrate to microservices as they scale.",
        diagram: `graph LR
  A["Start: Monolith"] -->|Growing team| B["Modular Monolith"]
  B -->|Need independent deploys| C["Microservices"]
  C -->|Optimize| D["Event-Driven Microservices"]
  D -->|Scale further| E["Serverless + Microservices"]`,
      },
    ],
  },
  {
    id: "5",
    slug: "docker-vs-kubernetes",
    title: "Docker vs Kubernetes — Container Orchestration Explained",
    description:
      "Understand containers and orchestration with clear diagrams showing how Docker and Kubernetes work together.",
    thumbnail: "🐳",
    category: "DevOps",
    tags: ["Docker", "Kubernetes", "DevOps", "Containers"],
    author: "CodingInvent",
    publishedAt: "2026-03-10",
    readTime: "7 min",
    sections: [
      {
        heading: "What is Docker?",
        content:
          "Docker packages your application and its dependencies into a lightweight container that runs consistently anywhere.",
        diagram: `graph TD
  CODE["Your Code"] --> DF["Dockerfile"]
  DF --> BUILD["docker build"]
  BUILD --> IMAGE["Docker Image"]
  IMAGE --> RUN["docker run"]
  RUN --> CONTAINER["Running Container"]
  IMAGE --> REG["Docker Registry"]
  REG --> PULL["docker pull"]
  PULL --> RUN`,
      },
      {
        heading: "What is Kubernetes?",
        content:
          "Kubernetes orchestrates containers at scale, handling deployment, scaling, networking, and self-healing.",
        diagram: `graph TB
  subgraph K8s_Cluster
    MASTER["Control Plane"] --> N1["Node 1"]
    MASTER --> N2["Node 2"]
    MASTER --> N3["Node 3"]
    N1 --> P1["Pod: Auth x3"]
    N2 --> P2["Pod: API x5"]
    N3 --> P3["Pod: Worker x2"]
  end
  USER["User"] --> LB["Load Balancer"]
  LB --> MASTER`,
      },
      {
        heading: "Docker vs Kubernetes",
        content: "They are not competitors. They are complementary tools.",
        comparison: {
          title: "Docker vs Kubernetes",
          headers: ["Docker", "Kubernetes"],
          rows: [
            ["Purpose", "Build and run containers", "Orchestrate containers at scale"],
            ["Scope", "Single host", "Multi-host cluster"],
            ["Scaling", "Manual", "Auto-scaling"],
            ["Networking", "Bridge / Host", "Service discovery + DNS"],
            ["Health", "Manual restart", "Self-healing, auto restart"],
            ["Load Balancing", "Not built-in", "Built-in"],
            ["Use Alone?", "Yes, dev or small apps", "Needs container runtime"],
          ],
        },
      },
    ],
  },
  {
    id: "6",
    slug: "jwt-vs-session-authentication",
    title: "JWT vs Session-Based Authentication",
    description:
      "Compare token-based and session-based auth with sequence diagrams showing the complete authentication flow.",
    thumbnail: "🔐",
    category: "Security",
    tags: ["JWT", "Session", "Authentication", "Security"],
    author: "CodingInvent",
    publishedAt: "2026-03-05",
    readTime: "6 min",
    sections: [
      {
        heading: "Session-Based Auth Flow",
        content:
          "Traditional session auth stores user state on the server. The client only holds a session ID cookie.",
        diagram: `sequenceDiagram
  participant B as Browser
  participant S as Server
  participant DB as Session Store

  B->>S: POST /login with credentials
  S->>DB: Create session record
  DB-->>S: sessionId abc123
  S-->>B: Set-Cookie sessionId=abc123
  Note over B: Cookie stored automatically
  B->>S: GET /profile with Cookie
  S->>DB: Lookup session abc123
  DB-->>S: userId 42
  S-->>B: 200 user profile data`,
      },
      {
        heading: "JWT Auth Flow",
        content:
          "JWT stores user claims inside the token itself. The server is stateless, no session store needed.",
        diagram: `sequenceDiagram
  participant B as Browser
  participant S as Server

  B->>S: POST /login with credentials
  S->>S: Generate JWT, sign with secret
  S-->>B: token eyJhbG...
  Note over B: Store in localStorage or cookie
  B->>S: GET /profile with Bearer token
  S->>S: Verify JWT signature + expiry
  S-->>B: 200 user profile data
  Note over S: No DB lookup needed`,
      },
      {
        heading: "Comparison",
        content: "Detailed feature comparison of both approaches.",
        comparison: {
          title: "JWT vs Session Auth",
          headers: ["Session-Based", "JWT Token-Based"],
          rows: [
            ["State", "Stateful, server stores session", "Stateless, token has all data"],
            ["Storage", "Server-side Redis/DB", "Client-side cookie/localStorage"],
            ["Scalability", "Needs shared session store", "Scales easily, no shared state"],
            ["Revocation", "Easy: delete from store", "Hard: need blacklist or short expiry"],
            ["Size", "Small cookie ~20 bytes", "Larger token ~800+ bytes"],
            ["CSRF Risk", "Vulnerable, cookie-based", "Safe if using Authorization header"],
            ["XSS Risk", "Lower with httpOnly cookie", "Higher if in localStorage"],
            ["Best For", "Server-rendered apps", "SPAs, mobile, microservices"],
          ],
        },
      },
    ],
  },
  // ── 7. Generic Accordion Component ────────────────────────
  {
    id: "7",
    slug: "generic-accordion-react",
    title: "Build a Generic Accordion in React — Interview Question Explained",
    description:
      "Learn how to build a reusable accordion component where each item works independently. A common frontend interview question with full code walkthrough and visual diagrams.",
    thumbnail: "🪗",
    category: "Frontend",
    tags: ["React", "JavaScript", "Interview", "Components", "useState"],
    author: "CodingInvent",
    publishedAt: "2026-04-01",
    readTime: "6 min",
    sections: [
      {
        heading: "The Interview Question",
        content:
          "A very popular React interview question asks: 'Write a generic accordion component that supports multiple accordion items. Each accordion should toggle independently — collapsing one should NOT affect any other.' This tests your understanding of component composition, isolated state management, and the children prop pattern.",
        diagram: `graph TD
  A["Interview Question"] --> B["Generic Accordion"]
  B --> C["Multiple Items"]
  B --> D["Independent Toggle"]
  B --> E["Reusable Pattern"]
  C --> F["Each item has<br/>its own state"]
  D --> G["Opening one does NOT<br/>close others"]
  E --> H["Works with any<br/>content via children"]`,
      },
      {
        heading: "Component Architecture",
        content:
          "The key insight is to create an AccordionItem component that manages its own open/closed state internally via useState. Because each instance of AccordionItem has its own state, toggling one item has zero effect on siblings. The parent simply renders multiple AccordionItem components — no shared state, no lifting state up, no context needed.",
        diagram: `graph TD
  App["App Component"] --> A1["AccordionItem 1<br/>useState: isOpen"]
  App --> A2["AccordionItem 2<br/>useState: isOpen"]
  App --> A3["AccordionItem 3<br/>useState: isOpen"]
  A1 --> S1["State: independent"]
  A2 --> S2["State: independent"]
  A3 --> S3["State: independent"]
  style S1 fill:#22c55e,color:#fff
  style S2 fill:#22c55e,color:#fff
  style S3 fill:#22c55e,color:#fff`,
      },
      {
        heading: "How State Isolation Works",
        content:
          "In React, every component instance has its own isolated state. When you call useState inside AccordionItem, React creates a separate state slot for each rendered instance. Clicking the button in AccordionItem 1 calls setIsOpen for that instance only — React does not re-render AccordionItem 2 or 3 because their state has not changed. This is core React behavior and is what makes this pattern so clean.",
        diagram: `sequenceDiagram
  participant User
  participant Item1 as AccordionItem 1
  participant Item2 as AccordionItem 2
  participant Item3 as AccordionItem 3
  User->>Item1: Click toggle
  Item1->>Item1: setIsOpen(!isOpen)
  Item1->>Item1: Re-render only this item
  Note over Item2: No re-render
  Note over Item3: No re-render
  User->>Item3: Click toggle
  Item3->>Item3: setIsOpen(!isOpen)
  Item3->>Item3: Re-render only this item
  Note over Item1: No re-render
  Note over Item2: No re-render`,
      },
      {
        heading: "Project Structure",
        content:
          "When you create a React app (e.g. via create-react-app or Vite), you will need these four files. Below is the folder structure so you know exactly where each file goes.",
        diagram: `graph TD
  Root["my-accordion-app/"] --> Pkg["package.json"]
  Root --> Src["src/"]
  Src --> AppFile["App.jsx"]
  Src --> IndexFile["index.jsx"]
  Src --> StylesFile["styles.css"]
  style Pkg fill:#f59e0b,color:#000
  style AppFile fill:#38bdf8,color:#000
  style IndexFile fill:#a78bfa,color:#000
  style StylesFile fill:#22c55e,color:#000`,
      },
      {
        heading: "File 1 — package.json",
        content:
          "This is your project configuration file at the root of the project. It defines the project name, dependencies (react, react-dom, react-scripts), and available scripts. Run 'npx create-react-app my-accordion-app' to generate this automatically, or create it manually and run 'npm install'.",
        codeSnippet: {
          language: "json",
          code: `{
  "name": "my-accordion-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version"]
  }
}`,
        },
      },
      {
        heading: "File 2 — src/index.jsx",
        content:
          "This is the entry point of your React application. It sits inside the src/ folder. It imports React, ReactDOM, the root App component, and renders it into the DOM element with id 'root' in your public/index.html file.",
        codeSnippet: {
          language: "jsx",
          code: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
        },
      },
      {
        heading: "File 3 — src/App.jsx",
        content:
          "This is the main component file inside the src/ folder. It contains the reusable AccordionItem component and the App component that renders multiple accordion instances. Each AccordionItem manages its own isOpen state via useState, so toggling one does not affect others. The children prop makes it generic — you can pass any JSX as accordion content.",
        codeSnippet: {
          language: "jsx",
          code: `import React, { useState } from 'react';
import './styles.css';

// Reusable AccordionItem — each instance has its own state
function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button
        className="accordion-title"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <span className="accordion-icon">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}

// App — renders multiple independent accordions
export default function App() {
  return (
    <div className="main">
      <h1 className="title">Multiple Accordions</h1>
      <AccordionItem title="Section 1">
        <p>This is content for Section 1.</p>
      </AccordionItem>
      <AccordionItem title="Section 2">
        <p>This is content for Section 2.</p>
      </AccordionItem>
      <AccordionItem title="Section 3">
        <p>This is content for Section 3.</p>
      </AccordionItem>
    </div>
  );
}`,
        },
      },
      {
        heading: "File 4 — src/styles.css",
        content:
          "This is the stylesheet inside the src/ folder, imported by App.jsx. It styles the accordion with a clean, modern look — rounded corners, hover effects, smooth transitions, and proper spacing.",
        codeSnippet: {
          language: "css",
          code: `/* src/styles.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f4f8;
  color: #1e293b;
}

.main {
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #0f172a;
}

.accordion-item {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  overflow: hidden;
}

.accordion-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  color: #1e293b;
  transition: background 0.2s;
}

.accordion-title:hover {
  background: #f1f5f9;
}

.accordion-icon {
  font-size: 1.25rem;
  font-weight: 700;
  color: #64748b;
}

.accordion-content {
  padding: 0.75rem 1.25rem 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #475569;
  border-top: 1px solid #e2e8f0;
}`,
        },
      },
      {
        heading: "Final Output — What It Looks Like",
        content:
          "Here is a visual representation of the final rendered output. Section 1 is collapsed, Section 2 is open showing its content, and Section 3 is collapsed. Notice how each accordion works independently — only Section 2 is expanded while the others remain closed.",
        diagram: `block-beta
  columns 1
  block:header
    title["Multiple Accordions"]
  end
  space
  block:s1:1
    s1btn["Section 1                                                    +"]
  end
  space
  block:s2:1
    s2btn["Section 2                                                    -"]
  end
  block:s2content:1
    s2text["This is content for Section 2."]
  end
  space
  block:s3:1
    s3btn["Section 3                                                    +"]
  end

  style header fill:transparent,stroke:none,color:#f1f5f9
  style title fill:transparent,stroke:none,color:#f1f5f9
  style s1 fill:#1e293b,stroke:#334155,color:#f1f5f9
  style s1btn fill:#1e293b,stroke:none,color:#f1f5f9
  style s2 fill:#1e293b,stroke:#38bdf8,color:#f1f5f9
  style s2btn fill:#1e293b,stroke:none,color:#38bdf8
  style s2content fill:#0f172a,stroke:#334155,color:#94a3b8
  style s2text fill:#0f172a,stroke:none,color:#94a3b8
  style s3 fill:#1e293b,stroke:#334155,color:#f1f5f9
  style s3btn fill:#1e293b,stroke:none,color:#f1f5f9`,
      },
      {
        heading: "Key Concepts Explained",
        content:
          "This pattern relies on several important React concepts: (1) Component-level state — each AccordionItem instance owns its isOpen state. (2) The children prop — allows any JSX to be passed as accordion content, making it truly generic. (3) Conditional rendering — {isOpen && ...} shows/hides content without unmounting the parent. (4) Accessibility — aria-expanded communicates the toggle state to screen readers.",
        comparison: {
          title: "Independent vs Controlled Accordion",
          headers: ["Aspect", "Independent (This Pattern)"],
          rows: [
            ["State Location", "Inside each AccordionItem", "Parent component"],
            ["Toggle Behavior", "Each item independent", "Parent controls which is open"],
            ["Use Case", "FAQ, settings panels", "Single-open panels, wizard steps"],
            ["Complexity", "Very simple", "More complex, needs index tracking"],
            ["Shared State?", "No", "Yes, via array or single index"],
            ["Code", "useState per item", "useState in parent + props down"],
          ],
        },
      },
      {
        heading: "Rendering Flow",
        content:
          "Let's trace exactly what happens when the user clicks an accordion. The button's onClick fires setIsOpen(!isOpen). React schedules a re-render for only that AccordionItem. During re-render, isOpen is now true, so the accordion-content div is rendered. Other AccordionItem instances are untouched — their state hasn't changed, so React skips their re-render entirely.",
        diagram: `flowchart LR
  A["User clicks<br/>Section 2 button"] --> B["setIsOpen(!isOpen)<br/>called in Item 2"]
  B --> C["React re-renders<br/>AccordionItem 2"]
  C --> D{"isOpen === true?"}
  D -- Yes --> E["Render content div"]
  D -- No --> F["Hide content div"]
  G["AccordionItem 1"] -.- H["No state change<br/>No re-render"]
  I["AccordionItem 3"] -.- J["No state change<br/>No re-render"]
  style H fill:#64748b,color:#fff
  style J fill:#64748b,color:#fff
  style E fill:#22c55e,color:#fff`,
      },
      {
        heading: "Interview Tips",
        content:
          "When presenting this solution in an interview, emphasize these points:\n1) Explain WHY each item is independent — because useState creates isolated state per component instance.\n2) Mention the children prop as the key to making it generic — it accepts any JSX content.\n3) Point out the aria-expanded attribute for accessibility.\n4) If asked about a 'single-open' variant, explain you would lift state to the parent and track the active index.\n5) Mention you could add CSS transitions for a polished UX.\n\nThis demonstrates strong fundamentals in React composition, state management, and accessibility.",
      },
    ],
  },
];

export const blogCategories: string[] = [
  ...new Set(blogs.map((b) => b.category)),
];
