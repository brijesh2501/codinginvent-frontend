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
  // ── 8. Flatten Array — Recursive, Iterative & Built-in ────
  {
    id: "8",
    slug: "flatten-array-javascript",
    title: "Flatten a Nested Array in JavaScript — Recursive, Iterative & Built-in Methods",
    description:
      "A complete guide to flattening deeply nested arrays in JavaScript using three approaches: recursion, iteration with a stack, and built-in Array.flat(). Includes visual diagrams, code for every method, and a side-by-side comparison.",
    thumbnail: "📦",
    category: "JavaScript",
    tags: ["JavaScript", "Arrays", "Recursion", "Interview", "DSA"],
    author: "CodingInvent",
    publishedAt: "2026-04-01",
    readTime: "7 min",
    sections: [
      {
        heading: "The Problem",
        content:
          "Given a nested array like [1, [2, [3, [4]], 5]] you need to return a flat single-level array [1, 2, 3, 4, 5]. This is one of the most frequently asked JavaScript interview questions. There are three common approaches — let's visualise the input and output first.",
        diagram: `graph LR
  A["Input: [1, [2, [3, [4]], 5]]"] --> B["Flatten"]
  B --> C["Output: [1, 2, 3, 4, 5]"]
  style A fill:#f59e0b,color:#000
  style B fill:#7c3aed,color:#fff
  style C fill:#22c55e,color:#000`,
      },
      {
        heading: "Approach Overview",
        content:
          "There are three main ways to flatten a nested array in JavaScript:\n1) Recursive — the function calls itself for every nested array.\n2) Iterative — uses a stack (or queue) to avoid recursion.\n3) Built-in — uses Array.prototype.flat() or Array.prototype.toString() + split.\n\nLet's look at how each approach processes the input step by step.",
        diagram: `graph TD
  Start["Nested Array"] --> R["Method 1: Recursive"]
  Start --> I["Method 2: Iterative Stack"]
  Start --> B["Method 3: Built-in flat()"]
  R --> Out["Flat Array"]
  I --> Out
  B --> Out
  style R fill:#38bdf8,color:#000
  style I fill:#a78bfa,color:#000
  style B fill:#22c55e,color:#000`,
      },
      {
        heading: "Method 1 — Recursive Approach",
        content:
          "The recursive approach checks each item: if it's an array, call flatten() on it and concatenate the result; otherwise push it directly. This naturally handles any depth of nesting because each recursive call peels off one level.",
        codeSnippet: {
          language: "javascript",
          code: `function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// Usage
console.log(flatten([1, [2, [3, [4]], 5]]));
// Output: [1, 2, 3, 4, 5]`,
        },
        diagram: `graph TD
  A["flatten([1, [2, [3, [4]], 5]])"] --> B["1 is not array, push 1"]
  A --> C["[2, [3, [4]], 5] is array, recurse"]
  C --> D["flatten([2, [3, [4]], 5])"]
  D --> E["2 is not array, push 2"]
  D --> F["[3, [4]] is array, recurse"]
  F --> G["flatten([3, [4]])"]
  G --> H["3 is not array, push 3"]
  G --> I["[4] is array, recurse"]
  I --> J["flatten([4])"]
  J --> K["4 is not array, push 4"]
  D --> L["5 is not array, push 5"]
  style K fill:#22c55e,color:#000
  style H fill:#22c55e,color:#000
  style E fill:#22c55e,color:#000
  style B fill:#22c55e,color:#000
  style L fill:#22c55e,color:#000`,
      },
      {
        heading: "Method 2 — Iterative Approach (Stack)",
        content:
          "The iterative approach avoids recursion by using a stack. We push items onto the stack and pop them off one by one. If a popped item is an array, we push its elements back onto the stack; otherwise we add it to the result. We reverse at the end because the stack processes in LIFO order.",
        codeSnippet: {
          language: "javascript",
          code: `function flattenIterative(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }

  return result.reverse();
}

// Usage
console.log(flattenIterative([1, [2, [3, [4]], 5]]));
// Output: [1, 2, 3, 4, 5]`,
        },
        diagram: `sequenceDiagram
  participant Stack
  participant Result

  Note over Stack: [1, [2, [3, [4]], 5]]
  Stack->>Result: pop 5 -> push to result
  Stack->>Stack: pop [2,[3,[4]]] -> push 2,[3,[4]]
  Stack->>Stack: pop [3,[4]] -> push 3,[4]
  Stack->>Stack: pop [4] -> push 4
  Stack->>Result: pop 4 -> push to result
  Stack->>Result: pop 3 -> push to result
  Stack->>Result: pop 2 -> push to result
  Stack->>Result: pop 1 -> push to result
  Note over Result: reverse -> [1,2,3,4,5]`,
      },
      {
        heading: "Method 3 — Built-in Methods",
        content:
          "JavaScript provides built-in ways to flatten arrays. Array.flat(depth) is the cleanest — pass Infinity to flatten any depth. You can also use toString() + split() as a quick trick, or reduce() + concat for a functional style. Here are all three built-in variations:",
        codeSnippet: {
          language: "javascript",
          code: `// ✅ Method 3a: Array.flat(Infinity) — recommended
const arr = [1, [2, [3, [4]], 5]];
console.log(arr.flat(Infinity));
// Output: [1, 2, 3, 4, 5]

// ✅ Method 3b: flat(1) — flattens only ONE level
console.log(arr.flat(1));
// Output: [1, 2, [3, [4]], 5]

// ✅ Method 3c: toString() + split() — works for numbers
console.log(arr.toString().split(",").map(Number));
// Output: [1, 2, 3, 4, 5]

// ✅ Method 3d: reduce + concat (one level)
function flatOne(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatOne(val)) : acc.concat(val)
  , []);
}
console.log(flatOne([1, [2, [3, [4]], 5]]));
// Output: [1, 2, 3, 4, 5]`,
        },
      },
      {
        heading: "Comparison of All Methods",
        content:
          "Each approach has trade-offs in readability, performance, and browser support. Here is a side-by-side comparison to help you choose the right one for your use case.",
        comparison: {
          title: "Recursive vs Iterative vs Built-in",
          headers: ["Aspect", "Recursive / Iterative / Built-in"],
          rows: [
            ["Code Complexity", "Medium", "Medium / Very Simple"],
            ["Readability", "High", "Medium / Very High"],
            ["Max Depth", "Limited by call stack", "Unlimited / Unlimited"],
            ["Performance", "Good for small arrays", "Better for large / Best"],
            ["Browser Support", "All browsers", "All / ES2019+ for flat()"],
            ["Stack Overflow Risk", "Yes, for very deep nesting", "No / No"],
            ["Interview Value", "Most commonly expected", "Shows extra knowledge"],
          ],
        },
      },
      {
        heading: "How flat(depth) Works Internally",
        content:
          "Array.flat(depth) works by iterating over each element. If the element is an array and depth > 0, it recursively flattens with depth - 1. Otherwise it keeps the element as-is. Passing Infinity means it keeps going until no nested arrays remain.",
        diagram: `flowchart TD
  A["arr.flat(Infinity)"] --> B{"For each element"}
  B --> C{"Is it an array?"}
  C -- Yes --> D["Recurse: element.flat(depth - 1)"]
  D --> B
  C -- No --> E["Keep element as-is"]
  E --> F["Add to result"]
  B --> G["Return flat result"]
  style A fill:#22c55e,color:#000
  style D fill:#38bdf8,color:#000
  style G fill:#a78bfa,color:#fff`,
      },
      {
        heading: "Edge Cases to Remember",
        content:
          "When implementing or discussing array flattening in an interview, mention these edge cases:\n1) Empty arrays — flatten([]) should return [].\n2) Already flat arrays — flatten([1, 2, 3]) should return [1, 2, 3] unchanged.\n3) Mixed types — arrays can contain strings, objects, null, undefined — only arrays should be unpacked.\n4) Sparse arrays — Array.flat() removes empty slots (holes), but custom implementations may not.\n5) Very deep nesting — recursive approach may hit stack overflow; iterative or flat(Infinity) is safer.",
      },
      {
        heading: "Interview Tips",
        content:
          "When answering this question in an interview:\n1) Start with the recursive solution — it's the most commonly expected answer.\n2) Explain the base case: if the item is not an array, push it directly.\n3) Then offer the iterative stack-based version to show you understand stack overflow risks.\n4) Mention Array.flat(Infinity) as the production-ready approach.\n5) Discuss trade-offs: recursion depth limits vs readability vs browser support.\n6) Handle follow-ups like 'flatten only N levels deep' by adding a depth parameter.\n\nThis shows strong fundamentals in recursion, iteration, and awareness of built-in APIs.",
      },
    ],
  },
  // ── 9. React Context Provider — Complete Guide ────────────
  {
    id: "9",
    slug: "react-context-provider",
    title: "React Context API & Provider — Complete Guide with Real-World Examples",
    description:
      "Master React Context: understand the problem it solves, how createContext + Provider + useContext work, when to use it vs props vs state management libraries, and build a real Theme + Auth context from scratch.",
    thumbnail: "🌐",
    category: "React",
    tags: ["React", "Context API", "useContext", "State Management", "Interview"],
    author: "CodingInvent",
    publishedAt: "2026-04-01",
    readTime: "10 min",
    sections: [
      {
        heading: "The Problem — Prop Drilling",
        content:
          "In React, data flows top-down via props. When deeply nested components need the same data, you end up passing props through many intermediate components that don't even use them. This is called prop drilling — it makes code hard to maintain, read, and refactor. Context solves this by providing a way to share values across the component tree without explicitly passing props at every level.",
        diagram: `graph TD
  A["App"] -->|"theme prop"| B["Layout"]
  B -->|"theme prop"| C["Sidebar"]
  C -->|"theme prop"| D["SidebarItem"]
  D -->|"theme prop"| E["Icon"]

  A2["App with Context"] --> B2["Layout"]
  B2 --> C2["Sidebar"]
  C2 --> D2["SidebarItem"]
  D2 --> E2["Icon"]
  A2 -.->|"Context Provider"| E2

  style A fill:#ef4444,color:#fff
  style B fill:#ef4444,color:#fff
  style C fill:#ef4444,color:#fff
  style D fill:#ef4444,color:#fff
  style E fill:#ef4444,color:#fff
  style A2 fill:#22c55e,color:#000
  style E2 fill:#22c55e,color:#000
  style B2 fill:#1e293b,color:#f1f5f9
  style C2 fill:#1e293b,color:#f1f5f9
  style D2 fill:#1e293b,color:#f1f5f9`,
      },
      {
        heading: "How Context Works — The 3-Step Pattern",
        content:
          "Every Context implementation follows three steps:\n1) Create — call React.createContext(defaultValue) to create a Context object.\n2) Provide — wrap a part of your component tree with <Context.Provider value={...}>.\n3) Consume — any descendant calls useContext(Context) to read the value.\n\nThe Provider acts like a broadcast tower — any component inside it can tune in without props.",
        diagram: `graph TD
  Step1["Step 1: Create Context<br/>const ThemeCtx = createContext('light')"] --> Step2["Step 2: Provide Value<br/>ThemeCtx.Provider value='dark'"]
  Step2 --> Step3["Step 3: Consume<br/>const theme = useContext(ThemeCtx)"]

  Step2 --> C1["Child A<br/>useContext = 'dark'"]
  Step2 --> C2["Child B<br/>useContext = 'dark'"]
  Step2 --> C3["Nested Child C<br/>useContext = 'dark'"]

  style Step1 fill:#f59e0b,color:#000
  style Step2 fill:#7c3aed,color:#fff
  style Step3 fill:#38bdf8,color:#000
  style C1 fill:#22c55e,color:#000
  style C2 fill:#22c55e,color:#000
  style C3 fill:#22c55e,color:#000`,
      },
      {
        heading: "Project Structure",
        content:
          "A clean way to organise Context in a real project. Each context gets its own file with the provider, hook, and types co-located.",
        diagram: `graph TD
  Root["src/"] --> Ctx["context/"]
  Ctx --> TC["ThemeContext.tsx"]
  Ctx --> AC["AuthContext.tsx"]
  Root --> Comp["components/"]
  Comp --> Header["Header.tsx — uses useTheme"]
  Comp --> Profile["Profile.tsx — uses useAuth"]
  Root --> AppFile["App.tsx — wraps providers"]
  style TC fill:#38bdf8,color:#000
  style AC fill:#a78bfa,color:#000
  style AppFile fill:#f59e0b,color:#000`,
      },
      {
        heading: "File 1 — src/context/ThemeContext.tsx",
        content:
          "This file creates a Theme context with a toggle function. It exports both the provider component and a custom useTheme hook. The provider manages state internally and exposes the theme value + toggleTheme function to all descendants.",
        codeSnippet: {
          language: "tsx",
          code: `import { createContext, useContext, useState, ReactNode } from "react";

// 1. Define types
type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 2. Create Context with undefined default
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Provider component — manages state
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Custom hook — safe consumption with error boundary
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}`,
        },
      },
      {
        heading: "File 2 — src/context/AuthContext.tsx",
        content:
          "A real-world Auth context that stores user data and provides login/logout functions. This pattern is used in production apps to share authentication state across the entire app — navigation, protected routes, profile pages, etc.",
        codeSnippet: {
          language: "tsx",
          code: `import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn: !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}`,
        },
      },
      {
        heading: "File 3 — src/App.tsx (Wrapping Providers)",
        content:
          "The App component wraps the entire tree with providers. Order matters when providers depend on each other — here ThemeProvider is outermost and AuthProvider is inside it. Any component anywhere in the tree can now call useTheme() or useAuth().",
        codeSnippet: {
          language: "tsx",
          code: `import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Profile from "./components/Profile";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Header />
        <Profile />
      </AuthProvider>
    </ThemeProvider>
  );
}`,
        },
      },
      {
        heading: "File 4 — Consuming Context in Components",
        content:
          "Components consume context via the custom hooks. No props needed — they just call useTheme() or useAuth() and get the values directly. Here is a Header that shows the theme toggle and a Profile that shows user info.",
        codeSnippet: {
          language: "tsx",
          code: `// src/components/Header.tsx
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <header style={{ background: theme === "dark" ? "#1e293b" : "#fff" }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      {isLoggedIn ? (
        <>
          <span>Hello, {user?.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Please log in</span>
      )}
    </header>
  );
}

// src/components/Profile.tsx
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, isLoggedIn, login } = useAuth();

  if (!isLoggedIn) {
    return (
      <button onClick={() => login({ id: "1", name: "John", email: "john@example.com" })}>
        Login as John
      </button>
    );
  }

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
}`,
        },
      },
      {
        heading: "Data Flow Visualisation",
        content:
          "Here is exactly how data flows through the Context system at runtime. The Provider stores the value in React's internal fiber tree — when the value changes, React finds all consumers subscribed to that context and re-renders only them.",
        diagram: `sequenceDiagram
  participant App
  participant ThemeProvider
  participant ReactFiber as React Fiber Tree
  participant Header
  participant Profile

  App->>ThemeProvider: Render with children
  ThemeProvider->>ReactFiber: Store value: theme + toggleTheme
  Header->>ReactFiber: useContext(ThemeContext)
  ReactFiber-->>Header: Return theme = "light"

  Note over Header: User clicks toggle
  Header->>ThemeProvider: toggleTheme()
  ThemeProvider->>ThemeProvider: setState: "dark"
  ThemeProvider->>ReactFiber: Update value: theme = "dark"
  ReactFiber-->>Header: Re-render with "dark"
  Note over Profile: NOT re-rendered (not subscribed to ThemeContext)`,
      },
      {
        heading: "Context vs Props vs Redux vs Zustand",
        content:
          "Context is not a replacement for all state management. It is best for low-frequency global data like themes, auth, locale. For high-frequency updates like form inputs or animations, use local state or specialised libraries. Here is how they compare:",
        comparison: {
          title: "Context vs Props vs Redux vs Zustand",
          headers: ["Aspect", "Context / Props / Redux / Zustand"],
          rows: [
            ["Setup", "Minimal (built-in)", "None / Heavy boilerplate / Lightweight"],
            ["Best For", "Theme, auth, locale", "Direct parent-child / Complex global / Medium global"],
            ["Re-render Scope", "All consumers re-render", "Only receiving component / Selective / Selective"],
            ["Middleware", "None", "None / Thunk, Saga / Built-in"],
            ["DevTools", "React DevTools", "Props tab / Redux DevTools / Zustand DevTools"],
            ["Bundle Size", "0 KB (built-in)", "0 KB / ~7 KB / ~1 KB"],
            ["Learning Curve", "Easy", "None / Steep / Easy"],
            ["Performance", "Good for low-frequency", "Best / Good with selectors / Great"],
          ],
        },
      },
      {
        heading: "Common Mistakes to Avoid",
        content:
          "These are the most common pitfalls when using Context:\n1) Not wrapping with Provider — calling useContext without a Provider ancestor returns the default value (often undefined), leading to runtime errors.\n2) Putting too much in one context — combining unrelated state causes unnecessary re-renders. Split into separate contexts (ThemeContext, AuthContext, etc.).\n3) Using context for high-frequency updates — context re-renders ALL consumers on every change. For rapidly changing values (mouse position, timers), use local state or refs.\n4) Missing the custom hook pattern — always create a useTheme() / useAuth() wrapper that throws if used outside the provider. This catches bugs early.\n5) Forgetting memoisation — if the provider value is a new object on every render, all consumers re-render. Use useMemo for the value object.",
      },
      {
        heading: "Performance Optimisation — useMemo",
        content:
          "A very common mistake is creating a new value object on every render, which forces all consumers to re-render even if nothing changed. The fix is to wrap the value in useMemo so React reuses the same object reference when dependencies haven't changed.",
        codeSnippet: {
          language: "tsx",
          code: `import { createContext, useState, useMemo, ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => setTheme((p) => (p === "light" ? "dark" : "light"));

  // ✅ Memoize the value — consumers only re-render when theme changes
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// ❌ BAD — new object every render, all consumers re-render
// <ThemeContext.Provider value={{ theme, toggleTheme }}>`,
        },
      },
      {
        heading: "Interview Tips",
        content:
          "When asked about Context in an interview:\n1) Start by explaining the problem — prop drilling makes deeply nested data passing painful.\n2) Walk through the 3 steps: createContext, Provider, useContext.\n3) Show the custom hook pattern with the error throw guard.\n4) Explain when NOT to use context — high-frequency updates, or when a simple prop will do.\n5) Mention useMemo for the provider value to avoid unnecessary re-renders.\n6) Compare with Redux/Zustand — context for simple global state, Redux for complex state with middleware.\n7) Mention you can nest multiple providers and they can override each other.\n\nThis demonstrates deep understanding of React's component model, state management trade-offs, and performance awareness.",
      },
    ],
  },
  // ── 10. Test Cases Deep Dive ──────────────────────────────
  {
    id: "10",
    slug: "javascript-testing-deep-dive",
    title: "JavaScript Testing Deep Dive — Every Function You Need to Know (Jest & React Testing Library)",
    description:
      "A comprehensive guide to writing test cases in JavaScript & React. Covers every Jest matcher, mock function, RTL query, async testing pattern, and the most common interview mistakes — with real code examples and visual diagrams.",
    thumbnail: "🧪",
    category: "Testing",
    tags: ["Jest", "React Testing Library", "Unit Testing", "TDD", "Interview"],
    author: "CodingInvent",
    publishedAt: "2026-04-01",
    readTime: "15 min",
    sections: [
      {
        heading: "Why Testing Matters",
        content:
          "Testing gives you confidence that your code works correctly today and continues to work after future changes. It catches bugs early, serves as living documentation, and is a core skill asked in every senior-level frontend interview. There are three main levels of testing:",
        diagram: `graph TD
  A["Testing Pyramid"] --> B["Unit Tests<br/>Fast, isolated, many"]
  A --> C["Integration Tests<br/>Components together"]
  A --> D["E2E Tests<br/>Full user flows, few"]
  B --> B1["Jest matchers<br/>Mock functions"]
  C --> C1["React Testing Library<br/>render + queries"]
  D --> D1["Cypress / Playwright"]
  style B fill:#22c55e,color:#000
  style C fill:#38bdf8,color:#000
  style D fill:#a78bfa,color:#fff`,
      },
      {
        heading: "Jest Setup & Test Structure",
        content:
          "Every test file follows the same structure: describe() groups related tests, it() or test() defines individual test cases, and expect() makes assertions. beforeEach/afterEach run setup/teardown before each test. Here is the anatomy of a test file:",
        codeSnippet: {
          language: "javascript",
          code: `// sum.test.js
const { sum, multiply } = require("./math");

describe("Math utilities", () => {
  // Runs before EACH test in this describe block
  beforeEach(() => {
    console.log("Setting up...");
  });

  // Runs after EACH test
  afterEach(() => {
    console.log("Cleaning up...");
  });

  // Runs ONCE before all tests in this block
  beforeAll(() => {
    console.log("One-time setup");
  });

  // Runs ONCE after all tests
  afterAll(() => {
    console.log("One-time teardown");
  });

  it("should add two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("should multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});`,
        },
        diagram: `graph TD
  describe["describe('Math utilities')"] --> beforeAll["beforeAll()"]
  beforeAll --> loop["For each test:"]
  loop --> beforeEach["beforeEach()"]
  beforeEach --> test1["it('should add')"]
  test1 --> afterEach["afterEach()"]
  afterEach --> loop
  loop --> afterAll["afterAll()"]
  style describe fill:#7c3aed,color:#fff
  style test1 fill:#22c55e,color:#000
  style beforeEach fill:#f59e0b,color:#000
  style afterEach fill:#f59e0b,color:#000`,
      },
      {
        heading: "All Jest Matchers — Cheat Sheet",
        content:
          "Matchers are the functions you chain after expect(). They check if the received value matches your expectation. Here are all the essential matchers grouped by category:",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ EQUALITY ═══
expect(2 + 2).toBe(4);                    // Strict equality (===)
expect({ a: 1 }).toEqual({ a: 1 });       // Deep equality (objects/arrays)
expect(obj).toStrictEqual(expected);       // Deep + checks undefined properties

// ═══ TRUTHINESS ═══
expect(null).toBeNull();
expect(undefined).toBeUndefined();
expect(value).toBeDefined();
expect(true).toBeTruthy();
expect(0).toBeFalsy();

// ═══ NUMBERS ═══
expect(10).toBeGreaterThan(5);
expect(10).toBeGreaterThanOrEqual(10);
expect(5).toBeLessThan(10);
expect(5).toBeLessThanOrEqual(5);
expect(0.1 + 0.2).toBeCloseTo(0.3);       // Floating point safe!

// ═══ STRINGS ═══
expect("Hello World").toMatch(/World/);
expect("Hello").toContain("ell");

// ═══ ARRAYS ═══
expect([1, 2, 3]).toContain(2);
expect([{ a: 1 }, { b: 2 }]).toContainEqual({ a: 1 });
expect([1, 2, 3]).toHaveLength(3);

// ═══ OBJECTS ═══
expect({ a: 1, b: 2 }).toHaveProperty("a");
expect({ a: 1, b: 2 }).toHaveProperty("a", 1);
expect({ a: 1 }).toMatchObject({ a: 1 });  // Partial match

// ═══ EXCEPTIONS ═══
expect(() => { throw new Error("fail"); }).toThrow();
expect(() => { throw new Error("fail"); }).toThrow("fail");
expect(() => { throw new Error("fail"); }).toThrow(/fail/);

// ═══ NEGATION ═══
expect(5).not.toBe(3);
expect([1, 2]).not.toContain(5);`,
        },
      },
      {
        heading: "toBe vs toEqual vs toStrictEqual",
        content:
          "This is the most commonly confused trio in interviews. toBe uses Object.is (reference equality), toEqual does deep value equality (ignoring undefined properties), and toStrictEqual does deep equality but also checks for undefined properties and array holes.",
        codeSnippet: {
          language: "javascript",
          code: `const obj1 = { a: 1, b: undefined };
const obj2 = { a: 1 };

// toBe — checks REFERENCE (same object in memory)
expect(obj1).not.toBe(obj2);           // Different references!
expect(obj1).toBe(obj1);               // Same reference ✅

// toEqual — checks VALUE (ignores undefined props)
expect(obj1).toEqual(obj2);            // ✅ Passes! b: undefined ignored

// toStrictEqual — checks VALUE + undefined props
expect(obj1).not.toStrictEqual(obj2);  // ❌ Fails! b: undefined matters`,
        },
        comparison: {
          title: "toBe vs toEqual vs toStrictEqual",
          headers: ["Aspect", "toBe / toEqual / toStrictEqual"],
          rows: [
            ["Check Type", "Reference (===)", "Deep value / Deep value + strict"],
            ["Primitives", "Works perfectly", "Same result / Same result"],
            ["Objects", "Must be same ref", "Deep compare / Deep + undefined check"],
            ["undefined props", "N/A", "Ignored / Checked"],
            ["Array holes", "N/A", "Ignored / Checked"],
            ["Use When", "Primitives, same ref", "Object values / Exact shape match"],
          ],
        },
      },
      {
        heading: "Mock Functions — jest.fn() & jest.mock()",
        content:
          "Mocking lets you replace real implementations with controlled fakes. jest.fn() creates a mock function that records calls, arguments, and return values. jest.mock() replaces an entire module. jest.spyOn() wraps an existing method to track calls while keeping the original behavior (unless overridden).",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ jest.fn() — create a mock function ═══
const mockCallback = jest.fn();
mockCallback("hello");
mockCallback("world");

expect(mockCallback).toHaveBeenCalled();
expect(mockCallback).toHaveBeenCalledTimes(2);
expect(mockCallback).toHaveBeenCalledWith("hello");
expect(mockCallback).toHaveBeenLastCalledWith("world");

// Mock return values
const mockFn = jest.fn()
  .mockReturnValue(10)               // Always returns 10
  .mockReturnValueOnce(42)           // First call returns 42
  .mockImplementation((x) => x * 2); // Custom implementation

// ═══ jest.mock() — mock entire module ═══
jest.mock("./api", () => ({
  fetchUser: jest.fn().mockResolvedValue({ name: "John" }),
}));

// ═══ jest.spyOn() — spy on existing method ═══
const spy = jest.spyOn(console, "log");
console.log("test");
expect(spy).toHaveBeenCalledWith("test");
spy.mockRestore(); // Restore original`,
        },
        diagram: `graph TD
  A["Mocking in Jest"] --> B["jest.fn()"]
  A --> C["jest.mock()"]
  A --> D["jest.spyOn()"]
  B --> B1["Create empty mock<br/>Track calls & args"]
  B --> B2["mockReturnValue<br/>mockImplementation"]
  C --> C1["Replace entire module<br/>Auto-mock or manual"]
  D --> D1["Wrap real method<br/>Track + keep original"]
  D --> D2["mockRestore() to undo"]
  style B fill:#38bdf8,color:#000
  style C fill:#a78bfa,color:#000
  style D fill:#22c55e,color:#000`,
      },
      {
        heading: "React Testing Library — Queries",
        content:
          "React Testing Library (RTL) tests components the way users interact with them — by visible text, labels, and roles, NOT by class names or IDs. There are three priority levels for queries:\n1) Accessible queries (BEST): getByRole, getByLabelText, getByPlaceholderText, getByText, getByDisplayValue.\n2) Semantic queries: getByAltText, getByTitle.\n3) Test IDs (LAST RESORT): getByTestId.\n\nEach query comes in three variants: getBy (throws if missing), queryBy (returns null if missing), findBy (async, waits for element).",
        codeSnippet: {
          language: "jsx",
          code: `import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter component", () => {
  it("renders initial count", () => {
    render(<Counter />);

    // ✅ BEST — query by role
    expect(screen.getByRole("button", { name: /increment/i })).toBeInTheDocument();

    // ✅ GOOD — query by text
    expect(screen.getByText("Count: 0")).toBeInTheDocument();

    // ✅ query by label (for form inputs)
    // screen.getByLabelText("Email");

    // ❌ AVOID — query by test id (last resort)
    // screen.getByTestId("counter-value");
  });

  it("increments on click", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const button = screen.getByRole("button", { name: /increment/i });
    await user.click(button);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});`,
        },
        comparison: {
          title: "getBy vs queryBy vs findBy",
          headers: ["Variant", "getBy / queryBy / findBy"],
          rows: [
            ["Returns", "Element", "Element or null / Promise<Element>"],
            ["Throws if missing", "Yes", "No / Yes (after timeout)"],
            ["Async", "No", "No / Yes (uses waitFor)"],
            ["Use When", "Element must exist", "Checking absence / Waiting for appearance"],
            ["Example", "getByText('Hello')", "queryByText('Hello') / findByText('Hello')"],
          ],
        },
      },
      {
        heading: "Async Testing — waitFor, findBy, act()",
        content:
          "Testing async behavior (API calls, timers, state updates) is where most people struggle. Use findBy queries to wait for elements, waitFor to poll for assertions, and act() to flush pending state updates.",
        codeSnippet: {
          language: "jsx",
          code: `import { render, screen, waitFor, act } from "@testing-library/react";
import UserProfile from "./UserProfile";

// Mock the API
jest.mock("./api", () => ({
  fetchUser: jest.fn().mockResolvedValue({ name: "John Doe" }),
}));

describe("UserProfile (async)", () => {
  // ✅ findBy — waits for element to appear
  it("shows user name after loading", async () => {
    render(<UserProfile userId="1" />);
    const name = await screen.findByText("John Doe");
    expect(name).toBeInTheDocument();
  });

  // ✅ waitFor — polls until assertion passes
  it("hides loading spinner", async () => {
    render(<UserProfile userId="1" />);
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
  });

  // ✅ Testing rejected promises
  it("shows error on API failure", async () => {
    const { fetchUser } = require("./api");
    fetchUser.mockRejectedValueOnce(new Error("Network error"));

    render(<UserProfile userId="1" />);
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });

  // ✅ Fake timers
  it("auto-refreshes after 5 seconds", async () => {
    jest.useFakeTimers();
    render(<UserProfile userId="1" />);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await waitFor(() => {
      expect(fetchUser).toHaveBeenCalledTimes(2);
    });

    jest.useRealTimers();
  });
});`,
        },
      },
      {
        heading: "Testing Flow — What Happens Under the Hood",
        content:
          "Understanding the internal flow helps you debug failing tests. When you call render(), RTL creates a DOM, mounts your component, and returns query helpers bound to that DOM. State updates are batched inside act(). Async queries use polling with a timeout.",
        diagram: `sequenceDiagram
  participant Test as Test File
  participant RTL as React Testing Library
  participant DOM as jsdom
  participant React

  Test->>RTL: render(<Component />)
  RTL->>DOM: Create container div
  RTL->>React: ReactDOM.render() inside act()
  React->>DOM: Mount component, run effects
  RTL-->>Test: Return screen queries

  Test->>RTL: screen.getByText("Hello")
  RTL->>DOM: querySelector + text matching
  DOM-->>RTL: Return element
  RTL-->>Test: Element or throw

  Test->>RTL: await findByText("Loaded")
  RTL->>DOM: Poll every 50ms
  Note over DOM: Component fetches data...
  React->>DOM: Re-render with data
  RTL->>DOM: Found "Loaded"!
  RTL-->>Test: Return element`,
      },
      {
        heading: "Common Mistakes in Interviews",
        content:
          "These are the mistakes interviewers catch most often:\n1) Using getByTestId as first choice — always prefer getByRole, getByText, getByLabelText. TestIDs are a last resort.\n2) Not wrapping state updates in act() — if a test triggers a state update outside of RTL helpers, you need act(). But RTL's render, fireEvent, and userEvent already wrap in act.\n3) Using fireEvent instead of userEvent — fireEvent dispatches raw DOM events. userEvent simulates real user behavior (focus, keydown, input, blur). Always prefer userEvent.\n4) Testing implementation details — don't test state variables, internal methods, or class names. Test what the USER sees and does.\n5) Forgetting to await async operations — findBy, waitFor, and user.click all return Promises. Missing await causes tests to pass falsely.\n6) Not cleaning up mocks — always call jest.restoreAllMocks() in afterEach, or mocks leak between tests.\n7) Testing too much in one test — each it() should test ONE behavior. Split assertions into separate tests for clarity.",
      },
      {
        heading: "Pros & Cons of Different Testing Approaches",
        content:
          "Each testing tool and strategy has trade-offs. Understanding these helps you choose the right approach for your project.",
        comparison: {
          title: "Unit vs Integration vs E2E Testing",
          headers: ["Aspect", "Unit / Integration / E2E"],
          rows: [
            ["Speed", "Very fast (ms)", "Fast (100ms) / Slow (seconds)"],
            ["Confidence", "Low — tests in isolation", "Medium / High — real browser"],
            ["Maintenance", "Easy", "Medium / Hard (brittle selectors)"],
            ["Cost to Write", "Low", "Medium / High"],
            ["Catches Bugs", "Logic bugs", "Wiring bugs / Full-flow bugs"],
            ["Tools", "Jest", "Jest + RTL / Cypress, Playwright"],
            ["How Many", "Many (70%)", "Some (20%) / Few (10%)"],
          ],
        },
      },
      {
        heading: "Interview Tips",
        content:
          "When asked about testing in an interview:\n1) Explain the testing pyramid — many unit tests, fewer integration, fewest E2E.\n2) Show you know the difference between toBe, toEqual, and toStrictEqual.\n3) Demonstrate mock functions: jest.fn(), jest.mock(), jest.spyOn() with mockResolvedValue for async.\n4) Use RTL's query priority: getByRole > getByText > getByLabelText > getByTestId.\n5) Show async testing with findBy and waitFor — this separates juniors from seniors.\n6) Mention the common mistake of testing implementation details vs user behavior.\n7) Talk about code coverage but explain it's not the only metric — meaningful tests matter more than 100% coverage.\n\nThis demonstrates professional testing practices and real-world experience.",
      },
    ],
  },
  // ── 11. TypeScript Knowledge Check ────────────────────────
  {
    id: "11",
    slug: "typescript-knowledge-check",
    title: "TypeScript Knowledge Check — Types, Generics, Utility Types & Interview Traps",
    description:
      "A deep-dive into TypeScript covering type vs interface, generics, utility types, type narrowing, discriminated unions, and the most common interview mistakes — with code examples, visual diagrams, and comparison tables.",
    thumbnail: "🔷",
    category: "TypeScript",
    tags: ["TypeScript", "Generics", "Utility Types", "Type Guard", "Interview"],
    author: "CodingInvent",
    publishedAt: "2026-04-01",
    readTime: "12 min",
    sections: [
      {
        heading: "Why TypeScript?",
        content:
          "TypeScript adds static types to JavaScript. It catches bugs at compile time, provides IntelliSense in editors, makes refactoring safe, and serves as self-documenting code. In interviews, TypeScript questions test your depth beyond just adding ': string' to variables.",
        diagram: `graph LR
  JS["JavaScript"] -->|"Add types"| TS["TypeScript"]
  TS --> A["Catch bugs at compile time"]
  TS --> B["IntelliSense & autocomplete"]
  TS --> C["Safe refactoring"]
  TS --> D["Self-documenting code"]
  TS --> E["Better team collaboration"]
  style JS fill:#f59e0b,color:#000
  style TS fill:#3178c6,color:#fff`,
      },
      {
        heading: "type vs interface — The REAL Difference",
        content:
          "Both can describe object shapes, but they have key differences. The rule of thumb: use interface for object shapes (it supports declaration merging and extends), use type for unions, intersections, mapped types, and primitives.",
        codeSnippet: {
          language: "typescript",
          code: `// ═══ INTERFACE — for object shapes ═══
interface User {
  name: string;
  age: number;
}

// ✅ Declaration merging (interface only!)
interface User {
  email: string;  // merged with above — User now has name, age, email
}

// ✅ Extends
interface Admin extends User {
  role: "admin";
}

// ═══ TYPE — for everything else ═══
type ID = string | number;                    // Union
type Response = User & { token: string };     // Intersection
type Status = "active" | "inactive";          // Literal union
type Callback = (data: User) => void;         // Function signature

// ❌ Type CANNOT do declaration merging
// type User = { phone: string };  // Error: Duplicate identifier

// ✅ Type can do mapped types, conditional types
type Readonly<T> = { readonly [K in keyof T]: T[K] };`,
        },
        comparison: {
          title: "type vs interface",
          headers: ["Feature", "interface / type"],
          rows: [
            ["Object Shape", "Yes", "Yes"],
            ["Declaration Merging", "Yes", "No"],
            ["Extends/Implements", "Yes (extends)", "Yes (intersections &)"],
            ["Union Types", "No", "Yes"],
            ["Mapped Types", "No", "Yes"],
            ["Primitive Aliases", "No", "Yes (type ID = string)"],
            ["Computed Properties", "No", "Yes"],
            ["Best For", "Objects, classes", "Unions, complex types"],
          ],
        },
      },
      {
        heading: "Generics — Write Once, Use for Any Type",
        content:
          "Generics let you write reusable code that works with any type while keeping type safety. Think of them as type parameters — just like function parameters accept values, generics accept types. This is one of the most important TypeScript interview topics.",
        codeSnippet: {
          language: "typescript",
          code: `// ═══ Generic Function ═══
function identity<T>(value: T): T {
  return value;
}
identity<string>("hello");  // T = string
identity(42);               // T inferred as number

// ═══ Generic Interface ═══
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const userRes: ApiResponse<User> = {
  data: { name: "John", age: 30, email: "john@test.com" },
  status: 200,
  message: "OK",
};

// ═══ Generic Constraints ═══
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
getLength("hello");    // ✅ string has length
getLength([1, 2, 3]);  // ✅ array has length
// getLength(123);     // ❌ number has no length

// ═══ keyof Constraint ═══
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
getProperty({ name: "John", age: 30 }, "name");  // returns string
// getProperty({ name: "John" }, "foo");          // ❌ "foo" not in keyof`,
        },
        diagram: `graph TD
  G["Generics T"] --> F["Functions<br/>identity T, arg: T"]
  G --> I["Interfaces<br/>ApiResponse T"]
  G --> C["Classes<br/>Stack T"]
  G --> Con["Constraints<br/>T extends HasLength"]
  Con --> K["keyof<br/>K extends keyof T"]
  style G fill:#3178c6,color:#fff
  style F fill:#22c55e,color:#000
  style I fill:#38bdf8,color:#000
  style C fill:#a78bfa,color:#fff
  style Con fill:#f59e0b,color:#000`,
      },
      {
        heading: "Utility Types — Built-in Type Transformers",
        content:
          "TypeScript provides built-in utility types that transform existing types. These are heavily tested in interviews. Master these and you'll handle any type manipulation question.",
        codeSnippet: {
          language: "typescript",
          code: `interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial<T> — all properties optional
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; age?: number }

// Required<T> — all properties required
type RequiredUser = Required<PartialUser>;

// Pick<T, K> — select specific properties
type UserPreview = Pick<User, "id" | "name">;
// { id: number; name: string }

// Omit<T, K> — remove specific properties
type UserWithoutEmail = Omit<User, "email">;
// { id: number; name: string; age: number }

// Readonly<T> — all properties readonly
type FrozenUser = Readonly<User>;
// const user: FrozenUser = { ... };
// user.name = "x"; // ❌ Error!

// Record<K, V> — create object type from keys and values
type Roles = "admin" | "user" | "guest";
type RolePermissions = Record<Roles, string[]>;
// { admin: string[]; user: string[]; guest: string[] }

// ReturnType<T> — extract return type of a function
function getUser() { return { name: "John", age: 30 }; }
type UserReturn = ReturnType<typeof getUser>;
// { name: string; age: number }

// Parameters<T> — extract parameter types as tuple
type GetUserParams = Parameters<typeof getUser>;
// []

// Extract & Exclude — filter union types
type Status = "active" | "inactive" | "banned";
type Active = Extract<Status, "active" | "inactive">;  // "active" | "inactive"
type NotActive = Exclude<Status, "active">;             // "inactive" | "banned"

// NonNullable<T> — remove null and undefined
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;         // string`,
        },
      },
      {
        heading: "Utility Types — Visual Map",
        content:
          "Here is a visual overview of how utility types transform the original type. Think of them as functions that take a type and return a new type.",
        diagram: `graph TD
  U["User type<br/>{id, name, email, age}"] --> P["Partial<br/>All optional"]
  U --> R["Required<br/>All required"]
  U --> Pick["Pick<br/>Select: id, name"]
  U --> Omit["Omit<br/>Remove: email"]
  U --> RO["Readonly<br/>All readonly"]
  U --> Rec["Record<br/>Map keys to values"]
  U --> RT["ReturnType<br/>Function return type"]

  style U fill:#3178c6,color:#fff
  style P fill:#22c55e,color:#000
  style R fill:#ef4444,color:#fff
  style Pick fill:#38bdf8,color:#000
  style Omit fill:#f59e0b,color:#000
  style RO fill:#a78bfa,color:#fff
  style Rec fill:#ec4899,color:#fff
  style RT fill:#6366f1,color:#fff`,
      },
      {
        heading: "Type Narrowing & Type Guards",
        content:
          "Type narrowing is how TypeScript figures out a more specific type within a code block. This is essential for handling unions safely. There are several ways to narrow types:",
        codeSnippet: {
          language: "typescript",
          code: `// ═══ typeof guard ═══
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();   // TS knows it's string here
  }
  return value.toFixed(2);        // TS knows it's number here
}

// ═══ instanceof guard ═══
function logError(error: Error | string) {
  if (error instanceof Error) {
    console.log(error.message);   // TS knows Error
  } else {
    console.log(error);           // TS knows string
  }
}

// ═══ in operator guard ═══
interface Dog { bark: () => void; }
interface Cat { meow: () => void; }

function speak(pet: Dog | Cat) {
  if ("bark" in pet) {
    pet.bark();                   // TS knows Dog
  } else {
    pet.meow();                   // TS knows Cat
  }
}

// ═══ Discriminated Union (BEST for complex unions) ═══
interface Circle { kind: "circle"; radius: number; }
interface Square { kind: "square"; side: number; }
type Shape = Circle | Square;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
  }
}

// ═══ Custom Type Guard ═══
function isString(val: unknown): val is string {
  return typeof val === "string";
}`,
        },
      },
      {
        heading: "never, unknown, any — The Tricky Trio",
        content:
          "These three types confuse most developers and are favourite interview questions. Understanding them deeply will set you apart.",
        comparison: {
          title: "any vs unknown vs never",
          headers: ["Aspect", "any / unknown / never"],
          rows: [
            ["Assignability", "Accepts anything, assigns to anything", "Accepts anything, must narrow to use / Accepts nothing"],
            ["Type Safety", "None (opt-out of TS)", "Safe (must check before use) / Maximum safety"],
            ["Use Case", "Migration from JS, escape hatch", "Safe catch-all / Exhaustive checks, unreachable code"],
            ["Function Return", "Can return any value", "Can return any value / Function never returns"],
            ["Example", "let x: any = 5; x.foo()", "let x: unknown = 5; if (typeof x === 'number') {} / function fail(): never { throw new Error() }"],
            ["Interview Rule", "Avoid in production", "Prefer over any / Use for exhaustive switches"],
          ],
        },
        codeSnippet: {
          language: "typescript",
          code: `// any — disables type checking ❌
let a: any = "hello";
a.nonExistent();      // No error! Runtime crash 💥

// unknown — safe version of any ✅
let u: unknown = "hello";
// u.toUpperCase();   // ❌ Error! Must narrow first
if (typeof u === "string") {
  u.toUpperCase();    // ✅ Now safe
}

// never — for impossible states
function throwError(msg: string): never {
  throw new Error(msg);  // Never returns
}

// Exhaustive check with never
type Color = "red" | "blue" | "green";
function getHex(color: Color): string {
  switch (color) {
    case "red": return "#ff0000";
    case "blue": return "#0000ff";
    case "green": return "#00ff00";
    default:
      const _exhaustive: never = color;  // Error if a case is missed!
      return _exhaustive;
  }
}`,
        },
      },
      {
        heading: "Common Interview Mistakes",
        content:
          "These are the TypeScript mistakes interviewers catch most often:\n1) Using 'any' everywhere — it defeats the purpose of TypeScript. Use 'unknown' and narrow, or use proper generics.\n2) Not understanding the difference between type and interface — saying 'they are the same' is wrong. Know declaration merging and when to use each.\n3) Confusing Partial with optional properties — Partial<T> makes ALL properties optional, not just some. Use Pick + Partial for selective optionality.\n4) Forgetting that readonly is shallow — Readonly<User> prevents reassignment of top-level properties, but nested objects are still mutable.\n5) Using type assertions (as) instead of type narrowing — 'value as string' tells TS to trust you. typeof/instanceof type guards prove it at runtime.\n6) Not using discriminated unions — using if/else chains with typeof for complex unions is messy. Add a 'kind' or 'type' property for clean switches.\n7) Ignoring strict mode — tsconfig.json should have 'strict: true'. Without it, you miss null checks, implicit any, and other safety nets.",
      },
      {
        heading: "Advanced — Conditional & Mapped Types",
        content:
          "These are senior-level topics that come up in advanced interviews. Conditional types let you create types that depend on conditions (like if/else for types). Mapped types let you transform all properties of a type.",
        codeSnippet: {
          language: "typescript",
          code: `// ═══ Conditional Type ═══
type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>;    // "yes"
type B = IsString<number>;    // "no"

// Built-in Extract uses this pattern:
// type Extract<T, U> = T extends U ? T : never;

// ═══ Mapped Type ═══
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Same as Partial<T>!

// ═══ Template Literal Type ═══
type EventName = "click" | "scroll" | "keypress";
type Handler = \`on\${Capitalize<EventName>}\`;
// "onClick" | "onScroll" | "onKeypress"

// ═══ infer keyword ═══
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Result = UnwrapPromise<Promise<string>>;  // string
type Plain = UnwrapPromise<number>;            // number`,
        },
      },
      {
        heading: "Interview Tips",
        content:
          "When answering TypeScript questions in interviews:\n1) Always explain WHY — don't just show syntax. Explain why Generics exist (reusability + type safety), why utility types matter (DRY types), why 'unknown' is better than 'any'.\n2) Write the type FIRST, then the implementation — this shows you think in types.\n3) Know the top 5 utility types cold: Partial, Pick, Omit, Record, ReturnType.\n4) Demonstrate discriminated unions for complex state — it's the most elegant pattern.\n5) Show you understand 'never' — use it for exhaustive switches and impossible states.\n6) If asked to 'make this function generic', start with the return type and work backwards.\n7) Mention strict mode — say your projects always use strict: true in tsconfig.\n\nThis shows production-level TypeScript skill, not just tutorial-level knowledge.",
      },
    ],
  },
  // ── 12. useEffect vs useLayoutEffect ──────────────────────
  {
    id: "12",
    slug: "useeffect-vs-uselayouteffect",
    title: "useEffect vs useLayoutEffect — When to Use Which (with Real Examples & Visual Timeline)",
    description:
      "Understand the exact difference between useEffect and useLayoutEffect, when each fires in the React lifecycle, real-world use cases for each, common interview mistakes, and a visual timeline of the render + commit + paint cycle.",
    thumbnail: "⚡",
    category: "React",
    tags: ["React", "Hooks", "useEffect", "useLayoutEffect", "Interview", "Performance"],
    author: "CodingInvent",
    publishedAt: "2026-04-01",
    readTime: "10 min",
    sections: [
      {
        heading: "The Core Difference in One Sentence",
        content:
          "useEffect runs AFTER the browser paints the screen. useLayoutEffect runs BEFORE the browser paints the screen (but after DOM mutations). This single timing difference determines when you should use each one.",
        diagram: `graph LR
  A["React renders<br/>(virtual DOM)"] --> B["DOM updated<br/>(real DOM mutated)"]
  B --> C["useLayoutEffect<br/>fires HERE"]
  C --> D["Browser paints<br/>(user sees pixels)"]
  D --> E["useEffect<br/>fires HERE"]
  style C fill:#ef4444,color:#fff
  style E fill:#22c55e,color:#000
  style D fill:#f59e0b,color:#000`,
      },
      {
        heading: "React Render Lifecycle — Full Timeline",
        content:
          "Understanding when each hook fires requires knowing the full React render cycle. Here is the exact sequence of events from state change to pixels on screen:",
        diagram: `sequenceDiagram
  participant State as State Change
  participant React as React (Virtual DOM)
  participant DOM as Real DOM
  participant Layout as useLayoutEffect
  participant Browser as Browser Paint
  participant Effect as useEffect

  State->>React: setState triggers re-render
  React->>React: Reconcile virtual DOM (diffing)
  React->>DOM: Apply DOM mutations (commit phase)
  DOM->>Layout: useLayoutEffect fires (synchronous!)
  Layout->>Layout: Read/write DOM safely
  Layout->>Browser: Unblocks browser paint
  Browser->>Browser: Paint pixels to screen
  Browser->>Effect: useEffect fires (asynchronous)
  Effect->>Effect: API calls, subscriptions, logging

  Note over Layout: User does NOT see screen yet
  Note over Effect: User already sees the screen`,
      },
      {
        heading: "useEffect — The Default Choice",
        content:
          "useEffect is the hook you should use 95% of the time. It runs asynchronously AFTER paint, so it doesn't block the browser from showing the UI. It's perfect for side effects that don't need to measure or manipulate the DOM before the user sees it.",
        codeSnippet: {
          language: "tsx",
          code: `import { useState, useEffect } from "react";

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ useEffect — runs AFTER paint, does not block UI
  useEffect(() => {
    let cancelled = false;

    async function fetchUser() {
      setLoading(true);
      const res = await fetch(\`/api/users/\${userId}\`);
      const data = await res.json();
      if (!cancelled) {
        setUser(data);
        setLoading(false);
      }
    }

    fetchUser();

    // Cleanup — runs when userId changes or component unmounts
    return () => {
      cancelled = true;
    };
  }, [userId]); // Dependency array — re-run when userId changes

  if (loading) return <p>Loading...</p>;
  return <h1>{user?.name}</h1>;
}`,
        },
      },
      {
        heading: "useEffect — All Dependency Patterns",
        content:
          "The dependency array controls WHEN the effect re-runs. This is the most common source of bugs. Here are all the patterns:",
        codeSnippet: {
          language: "tsx",
          code: `// 1️⃣ No dependency array — runs after EVERY render
useEffect(() => {
  console.log("Runs every render");
});

// 2️⃣ Empty array — runs ONCE on mount, cleanup on unmount
useEffect(() => {
  console.log("Mount");
  return () => console.log("Unmount");
}, []);

// 3️⃣ With dependencies — runs when dependencies change
useEffect(() => {
  console.log("userId changed:", userId);
  return () => console.log("Cleanup for previous userId");
}, [userId]);

// 4️⃣ Multiple dependencies
useEffect(() => {
  console.log("Either changed");
}, [userId, searchTerm]);`,
        },
        diagram: `graph TD
  A["useEffect dependency array"] --> B["No array<br/>Every render"]
  A --> C["Empty []<br/>Mount only"]
  A --> D["[dep1, dep2]<br/>When deps change"]
  B --> B1["Use case: Logging,<br/>debugging"]
  C --> C1["Use case: Init once,<br/>event listeners"]
  D --> D1["Use case: Fetch data<br/>when ID changes"]
  style B fill:#ef4444,color:#fff
  style C fill:#22c55e,color:#000
  style D fill:#38bdf8,color:#000`,
      },
      {
        heading: "useLayoutEffect — When You MUST Use It",
        content:
          "useLayoutEffect runs synchronously BEFORE the browser paints. Use it ONLY when you need to read or write the DOM and the user would see a visual flicker with useEffect. The three real-world use cases:\n1) Measuring DOM elements (getBoundingClientRect, offsetWidth) and updating state based on measurements.\n2) Preventing visual flicker — when you need to set position/size before the user sees the element.\n3) Synchronising DOM mutations — setting scroll position, focus, or animation start values.",
        codeSnippet: {
          language: "tsx",
          code: `import { useState, useLayoutEffect, useRef } from "react";

// ✅ USE CASE 1: Measure DOM before paint
function Tooltip({ text, targetRef }) {
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // useLayoutEffect because we need to measure + position BEFORE paint
  // Using useEffect here would cause a visible jump/flicker!
  useLayoutEffect(() => {
    if (targetRef.current && tooltipRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
  }, [targetRef]);

  return (
    <div
      ref={tooltipRef}
      style={{ position: "fixed", top: position.top, left: position.left }}
    >
      {text}
    </div>
  );
}

// ✅ USE CASE 2: Prevent flicker on theme change
function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useLayoutEffect(() => {
    // Set CSS variable BEFORE paint so user never sees the old theme
    document.documentElement.style.setProperty(
      "--bg-color",
      theme === "dark" ? "#0b1120" : "#ffffff"
    );
  }, [theme]);

  return <button onClick={() => setTheme(t => t === "light" ? "dark" : "light")}>Toggle</button>;
}

// ✅ USE CASE 3: Scroll restoration
function ChatMessages({ messages }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // Scroll to bottom BEFORE paint — user never sees old scroll position
    const el = containerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  return (
    <div ref={containerRef} style={{ overflow: "auto", height: 400 }}>
      {messages.map((m) => <p key={m.id}>{m.text}</p>)}
    </div>
  );
}`,
        },
      },
      {
        heading: "Visual Flicker Problem — useEffect vs useLayoutEffect",
        content:
          "This diagram shows why useEffect causes flicker for DOM measurements. With useEffect, the browser paints the initial position first, THEN the effect runs and moves the element — the user sees a jump. With useLayoutEffect, the position is calculated BEFORE paint, so the user only sees the final position.",
        diagram: `graph TD
  subgraph useEffect_path["useEffect Path (FLICKER)"]
    E1["Render: position = 0,0"] --> E2["DOM updated"]
    E2 --> E3["Browser paints at 0,0"]
    E3 --> E4["useEffect: measure + set 100,50"]
    E4 --> E5["Browser paints AGAIN at 100,50"]
    E5 --> E6["User sees JUMP from 0,0 to 100,50"]
  end

  subgraph useLayoutEffect_path["useLayoutEffect Path (SMOOTH)"]
    L1["Render: position = 0,0"] --> L2["DOM updated"]
    L2 --> L3["useLayoutEffect: measure + set 100,50"]
    L3 --> L4["Browser paints at 100,50"]
    L4 --> L5["User only sees final position"]
  end

  style E6 fill:#ef4444,color:#fff
  style L5 fill:#22c55e,color:#000`,
      },
      {
        heading: "Side-by-Side Comparison",
        content:
          "Here is a complete comparison between the two hooks covering timing, use cases, performance impact, and when to choose each.",
        comparison: {
          title: "useEffect vs useLayoutEffect",
          headers: ["Aspect", "useEffect / useLayoutEffect"],
          rows: [
            ["Timing", "After browser paint (async)", "Before browser paint (sync)"],
            ["Blocks Paint?", "No — UI appears immediately", "Yes — delays paint until done"],
            ["Performance", "Better — non-blocking", "Can cause jank if slow"],
            ["Use Frequency", "95% of the time", "5% — only when needed"],
            ["API Calls", "Yes — perfect fit", "No — would block paint"],
            ["DOM Measurement", "Possible but may flicker", "Yes — no flicker"],
            ["Event Listeners", "Yes", "Yes (but overkill)"],
            ["Scroll Position", "May cause jump", "Smooth — set before paint"],
            ["SSR Behavior", "Works fine", "Warning in SSR (no DOM)"],
            ["Cleanup Timing", "Async before next effect", "Sync before next layout effect"],
          ],
        },
      },
      {
        heading: "The Cleanup Function — How It Really Works",
        content:
          "Both hooks support a cleanup function returned from the callback. The cleanup runs BEFORE the next effect execution and on unmount. This prevents memory leaks from subscriptions, timers, and event listeners.",
        codeSnippet: {
          language: "tsx",
          code: `useEffect(() => {
  // ═══ Setup (runs on mount + when deps change) ═══
  const handler = (e: MouseEvent) => {
    console.log(e.clientX, e.clientY);
  };
  window.addEventListener("mousemove", handler);

  // ═══ Cleanup (runs before next effect + on unmount) ═══
  return () => {
    window.removeEventListener("mousemove", handler);
  };
}, []); // Empty deps: setup once, cleanup on unmount

// Timeline of cleanup:
// Mount:       Setup runs
// Deps change: Cleanup runs (old) → Setup runs (new)
// Unmount:     Cleanup runs`,
        },
        diagram: `sequenceDiagram
  participant Mount
  participant Effect as Effect Callback
  participant Cleanup

  Mount->>Effect: Component mounts — run setup
  Note over Effect: addEventListener

  Note over Mount: userId changes (re-render)
  Effect->>Cleanup: Run cleanup for OLD effect
  Note over Cleanup: removeEventListener (old)
  Mount->>Effect: Run setup for NEW effect
  Note over Effect: addEventListener (new)

  Note over Mount: Component unmounts
  Effect->>Cleanup: Run cleanup
  Note over Cleanup: removeEventListener`,
      },
      {
        heading: "Common Mistakes in Interviews",
        content:
          "These mistakes come up in almost every React interview:\n1) Using useLayoutEffect for API calls — this blocks painting! API calls should ALWAYS use useEffect. useLayoutEffect is only for DOM measurement.\n2) Missing dependencies in the array — forgetting to include a variable used inside the effect causes stale closures. Use the eslint-plugin-react-hooks exhaustive-deps rule.\n3) Not providing a cleanup function — forgetting cleanup causes memory leaks. Every addEventListener needs removeEventListener. Every setInterval needs clearInterval.\n4) Using an empty dependency array when deps exist — this causes the effect to use stale values from the first render forever.\n5) Creating infinite loops — setting state inside useEffect without proper dependencies causes render → effect → setState → render → effect... forever.\n6) Not understanding that useEffect runs AFTER paint — saying 'useEffect runs after render' is imprecise. It runs after PAINT, not after the render phase.\n7) Using useLayoutEffect on the server (SSR) — there is no DOM on the server. useLayoutEffect logs a warning in SSR. Use useEffect or conditionally check typeof window.",
      },
      {
        heading: "Decision Flowchart — Which Hook to Use",
        content:
          "Use this flowchart when deciding between useEffect and useLayoutEffect. The answer is almost always useEffect — only switch to useLayoutEffect when you can demonstrate a visual flicker problem.",
        diagram: `flowchart TD
  A["Need a side effect?"] --> B{"Does it read/write DOM<br/>and user would see flicker?"}
  B -- Yes --> C{"Is it measuring<br/>DOM layout?"}
  C -- Yes --> D["useLayoutEffect"]
  C -- No --> E{"Setting scroll position<br/>or preventing flash?"}
  E -- Yes --> D
  E -- No --> F["useEffect"]
  B -- No --> G{"API call, subscription,<br/>logging, timer?"}
  G -- Yes --> F
  G -- No --> F

  style D fill:#ef4444,color:#fff
  style F fill:#22c55e,color:#000
  style A fill:#38bdf8,color:#000`,
      },
      {
        heading: "Bonus — useInsertionEffect (React 18+)",
        content:
          "React 18 introduced a third effect hook: useInsertionEffect. It runs BEFORE useLayoutEffect and is designed exclusively for CSS-in-JS libraries to inject styles before DOM reads. You should almost never use it directly — it exists for library authors (Styled Components, Emotion, etc.).",
        codeSnippet: {
          language: "tsx",
          code: `// Timing order:
// 1. useInsertionEffect  — inject <style> tags (CSS-in-JS libraries)
// 2. useLayoutEffect     — read/write DOM, measure layout
// 3. useEffect           — API calls, subscriptions, logging

import { useInsertionEffect } from "react";

function useCSS(rule: string) {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = rule;
    document.head.appendChild(style);
    return () => style.remove();
  }, [rule]);
}

// ⚠️ Don't use this directly — it's for library authors only!`,
        },
        diagram: `graph LR
  A["DOM Mutated"] --> B["useInsertionEffect<br/>Inject styles"]
  B --> C["useLayoutEffect<br/>Measure DOM"]
  C --> D["Browser Paint"]
  D --> E["useEffect<br/>Side effects"]
  style B fill:#ec4899,color:#fff
  style C fill:#ef4444,color:#fff
  style D fill:#f59e0b,color:#000
  style E fill:#22c55e,color:#000`,
      },
      {
        heading: "Interview Tips",
        content:
          "When asked about useEffect vs useLayoutEffect:\n1) Start with the timing — useEffect is async AFTER paint, useLayoutEffect is sync BEFORE paint.\n2) Give a concrete flicker example — tooltip positioning or scroll restoration.\n3) Emphasize that useEffect is the default — useLayoutEffect is the exception for DOM measurement.\n4) Explain cleanup functions and why they prevent memory leaks.\n5) Mention the dependency array patterns: no array, empty array, with deps.\n6) Show you know about stale closures — the #1 useEffect bug.\n7) Bonus: mention useInsertionEffect for CSS-in-JS to show advanced knowledge.\n\nThis demonstrates you understand React's commit and paint phases at a deep level, not just surface-level hook usage.",
      },
    ],
  },
  // ── 13. Hoisting in JavaScript ────────────────────────────
  {
    id: "13",
    slug: "javascript-hoisting",
    title: "JavaScript Hoisting — var, let, const, Functions & Classes Explained with Visual Diagrams",
    description:
      "Understand exactly what JavaScript hoists and what it doesn't. Visual execution diagrams, the Temporal Dead Zone, real interview traps, and the difference between var/let/const hoisting — all with code examples.",
    thumbnail: "🏗️",
    category: "JavaScript",
    tags: ["JavaScript", "Hoisting", "var", "let", "const", "Interview", "ES6"],
    author: "CodingInvent",
    publishedAt: "2026-04-01",
    readTime: "9 min",
    sections: [
      {
        heading: "What is Hoisting?",
        content:
          "Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the compilation phase — BEFORE any code executes. But here's the key: only the DECLARATION is hoisted, NOT the assignment. And different declaration types are hoisted differently.",
        diagram: `graph TD
  A["Your Code"] --> B["Compilation Phase"]
  B --> C["Execution Phase"]
  B --> D["Declarations moved to<br/>top of scope"]
  D --> D1["var: hoisted +<br/>initialized as undefined"]
  D --> D2["let/const: hoisted but<br/>NOT initialized (TDZ)"]
  D --> D3["function declaration:<br/>hoisted entirely"]
  D --> D4["function expression:<br/>variable hoisted only"]
  C --> E["Code runs line by line"]
  style D1 fill:#f59e0b,color:#000
  style D2 fill:#ef4444,color:#fff
  style D3 fill:#22c55e,color:#000
  style D4 fill:#38bdf8,color:#000`,
      },
      {
        heading: "var Hoisting — Initialized as undefined",
        content:
          "Variables declared with var are hoisted to the top of their function scope and initialized with undefined. This means you can access them before the declaration line — but the value will be undefined, not the assigned value.",
        codeSnippet: {
          language: "javascript",
          code: `console.log(name);  // undefined (NOT ReferenceError!)
var name = "John";
console.log(name);  // "John"

// What JavaScript actually does under the hood:
// var name = undefined;    ← hoisted declaration + initialization
// console.log(name);       → undefined
// name = "John";           ← assignment stays in place
// console.log(name);       → "John"

// Another example:
console.log(x);     // undefined
var x = 10;
console.log(x);     // 10

// var is FUNCTION-scoped, not block-scoped!
if (true) {
  var leaked = "I escaped the block!";
}
console.log(leaked); // "I escaped the block!" — var ignores blocks`,
        },
        diagram: `sequenceDiagram
  participant Compiler
  participant Memory
  participant Execution

  Compiler->>Memory: var name = undefined (hoist)
  Note over Memory: name: undefined
  Execution->>Memory: console.log(name)
  Memory-->>Execution: undefined
  Execution->>Memory: name = "John" (assign)
  Note over Memory: name: "John"
  Execution->>Memory: console.log(name)
  Memory-->>Execution: "John"`,
      },
      {
        heading: "let & const Hoisting — The Temporal Dead Zone",
        content:
          "let and const ARE hoisted — but they are NOT initialized. They exist in a 'Temporal Dead Zone' (TDZ) from the start of the block until the declaration line. Accessing them in the TDZ throws a ReferenceError. This is a critical interview question.",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ let — hoisted but NOT initialized ═══
console.log(age);    // ❌ ReferenceError: Cannot access 'age' before initialization
let age = 25;

// ═══ const — same as let, plus must be initialized ═══
console.log(PI);     // ❌ ReferenceError: Cannot access 'PI' before initialization
const PI = 3.14;

// const must be initialized at declaration
// const x;           // ❌ SyntaxError: Missing initializer

// ═══ Temporal Dead Zone visualized ═══
{
  // ──── TDZ for 'name' starts here ────
  // name exists but CANNOT be accessed
  console.log(name);  // ❌ ReferenceError
  // ──── TDZ for 'name' ends here ──────
  let name = "John";  // Now it's safe to use
  console.log(name);  // ✅ "John"
}

// ═══ TDZ with typeof (tricky!) ═══
console.log(typeof undeclared);  // "undefined" (no error!)
console.log(typeof myLet);      // ❌ ReferenceError (TDZ!)
let myLet = 10;`,
        },
        diagram: `graph TD
  subgraph Block_Scope["Block Scope { }"]
    TDZ_Start["Block starts<br/>let x is hoisted but NOT initialized"] --> TDZ["TEMPORAL DEAD ZONE<br/>Accessing x = ReferenceError"]
    TDZ --> Declaration["let x = 10;<br/>TDZ ends, x is initialized"]
    Declaration --> Safe["x is accessible<br/>console.log(x) = 10"]
  end
  style TDZ fill:#ef4444,color:#fff
  style Declaration fill:#22c55e,color:#000
  style Safe fill:#22c55e,color:#000
  style TDZ_Start fill:#f59e0b,color:#000`,
      },
      {
        heading: "Function Hoisting — Fully Hoisted",
        content:
          "Function declarations are hoisted ENTIRELY — both the name and the body. You can call them before they appear in the code. But function expressions (assigned to variables) follow the hoisting rules of their variable keyword (var/let/const).",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ Function Declaration — FULLY hoisted ═══
greet();  // ✅ "Hello!" — works before declaration!

function greet() {
  console.log("Hello!");
}

// ═══ Function Expression with var — PARTIALLY hoisted ═══
sayHi();  // ❌ TypeError: sayHi is not a function
          // (sayHi is undefined at this point, not a function)

var sayHi = function() {
  console.log("Hi!");
};

// ═══ Function Expression with let/const — NOT accessible ═══
sayBye();  // ❌ ReferenceError: Cannot access 'sayBye' before initialization

const sayBye = function() {
  console.log("Bye!");
};

// ═══ Arrow Function — same as function expression ═══
add(2, 3);  // ❌ ReferenceError (or TypeError if var)

const add = (a, b) => a + b;

// ═══ Named vs Anonymous Expression ═══
var myFunc = function namedFunc() {
  console.log(typeof namedFunc);  // "function" — accessible inside
};
// console.log(namedFunc);        // ❌ ReferenceError — NOT accessible outside`,
        },
        comparison: {
          title: "Function Declaration vs Expression Hoisting",
          headers: ["Aspect", "Declaration / Expression"],
          rows: [
            ["Syntax", "function greet() {}", "const greet = function() {} or () => {}"],
            ["What's Hoisted", "Entire function (name + body)", "Only the variable (var=undefined, let/const=TDZ)"],
            ["Call Before Declaration", "Yes", "No — TypeError or ReferenceError"],
            ["Scope", "Function or global", "Depends on var/let/const"],
            ["Interview Importance", "High — classic trick question", "High — tests deep understanding"],
          ],
        },
      },
      {
        heading: "Class Hoisting — Like let (TDZ)",
        content:
          "Class declarations are hoisted but NOT initialized — they behave like let/const and live in the Temporal Dead Zone. You cannot instantiate a class before its declaration.",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ Class Declaration — hoisted but in TDZ ═══
const p = new Person();  // ❌ ReferenceError: Cannot access 'Person' before initialization

class Person {
  constructor() {
    this.name = "John";
  }
}

// ═══ Class Expression — same as function expression ═══
const q = new Animal();  // ❌ ReferenceError

const Animal = class {
  constructor() {
    this.species = "Dog";
  }
};

// ✅ After declaration — works fine
const r = new Person();  // { name: "John" }`,
        },
      },
      {
        heading: "Hoisting Summary — Complete Cheat Sheet",
        content:
          "Here is the definitive summary of how every JavaScript declaration type is hoisted. Memorize this table for interviews.",
        comparison: {
          title: "Hoisting Behavior by Declaration Type",
          headers: ["Declaration", "Hoisted? / Initialized? / Accessible Before?"],
          rows: [
            ["var x = 10", "Yes", "Yes (undefined) / Yes (as undefined)"],
            ["let x = 10", "Yes", "No (TDZ) / No — ReferenceError"],
            ["const x = 10", "Yes", "No (TDZ) / No — ReferenceError"],
            ["function foo() {}", "Yes (entirely)", "Yes (full function) / Yes — callable"],
            ["var foo = function() {}", "Yes (var only)", "Yes (undefined) / No — TypeError"],
            ["const foo = () => {}", "Yes (TDZ)", "No (TDZ) / No — ReferenceError"],
            ["class Foo {}", "Yes", "No (TDZ) / No — ReferenceError"],
            ["import x from 'y'", "Yes (entirely)", "Yes / Yes — always available"],
          ],
        },
        diagram: `graph TD
  H["Hoisting Summary"] --> V["var<br/>Hoisted + undefined"]
  H --> L["let/const<br/>Hoisted + TDZ"]
  H --> FD["function declaration<br/>Fully hoisted"]
  H --> FE["function expression<br/>Follows var/let/const rules"]
  H --> CL["class<br/>Hoisted + TDZ"]
  H --> IM["import<br/>Fully hoisted"]

  style V fill:#f59e0b,color:#000
  style L fill:#ef4444,color:#fff
  style FD fill:#22c55e,color:#000
  style FE fill:#38bdf8,color:#000
  style CL fill:#ef4444,color:#fff
  style IM fill:#22c55e,color:#000`,
      },
      {
        heading: "Tricky Interview Questions",
        content:
          "These are the exact hoisting traps that appear in interviews. Try to predict the output before reading the answer:",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ Trap 1: var vs function with same name ═══
var foo = 10;
function foo() { return 20; }
console.log(typeof foo);  // ❓
// Answer: "number"
// Function hoisted first, then var assignment overwrites

// ═══ Trap 2: Multiple var declarations ═══
var x = 1;
var x = 2;
console.log(x);  // ❓
// Answer: 2 (var allows re-declaration)

// ═══ Trap 3: Hoisting inside functions ═══
var a = 1;
function test() {
  console.log(a);  // ❓
  var a = 2;
}
test();
// Answer: undefined (local 'a' is hoisted inside test())

// ═══ Trap 4: let in for loop ═══
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Answer: 0, 1, 2 (let creates new binding per iteration)

for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Answer: 3, 3, 3 (var shares one binding)

// ═══ Trap 5: Function in block (non-strict) ═══
console.log(bar);      // undefined (hoisted as var)
if (true) {
  function bar() { return 1; }
}
console.log(bar());    // 1`,
        },
      },
      {
        heading: "Execution Context — How Hoisting Really Works",
        content:
          "Hoisting isn't actually 'moving' code. What really happens is: JavaScript creates an Execution Context in two phases — the Creation Phase (allocates memory for declarations) and the Execution Phase (runs code line by line). Understanding this model gives you the deepest interview answer.",
        diagram: `sequenceDiagram
  participant Code as Source Code
  participant Create as Creation Phase
  participant Exec as Execution Phase

  Code->>Create: JavaScript engine reads entire code
  Create->>Create: Global Execution Context created
  Create->>Create: var declarations -> memory (undefined)
  Create->>Create: let/const declarations -> memory (uninitialized - TDZ)
  Create->>Create: function declarations -> memory (full function)
  Create->>Create: this = window/global

  Create->>Exec: Execution Phase starts
  Exec->>Exec: Execute line 1
  Exec->>Exec: Execute line 2
  Exec->>Exec: Assignments happen now
  Exec->>Exec: let/const TDZ ends at declaration line
  Note over Exec: Each function call creates<br/>a NEW execution context`,
      },
      {
        heading: "Common Interview Mistakes",
        content:
          "These are the hoisting mistakes that cost candidates the offer:\n1) Saying 'let and const are not hoisted' — WRONG. They ARE hoisted but live in the TDZ. The proof: typeof on an undeclared variable returns 'undefined', but typeof on a let variable in TDZ throws ReferenceError.\n2) Confusing 'not initialized' with 'not hoisted' — var is hoisted AND initialized (as undefined). let/const are hoisted but NOT initialized.\n3) Saying 'hoisting moves code to the top' — it doesn't move anything. The engine creates memory for declarations during the creation phase.\n4) Not knowing function expressions follow variable rules — const greet = function() {} is NOT fully hoisted. Only the const variable is hoisted.\n5) Forgetting var is function-scoped — var inside a for loop or if block leaks out to the enclosing function.\n6) Not mentioning the Temporal Dead Zone by name — interviewers specifically want to hear 'TDZ' when discussing let/const.",
      },
      {
        heading: "Interview Tips",
        content:
          "When asked about hoisting in an interview:\n1) Define it precisely: 'During the creation phase, JavaScript allocates memory for declarations before executing any code.'\n2) Immediately distinguish var (hoisted + undefined) from let/const (hoisted + TDZ).\n3) Explain function declarations are fully hoisted but function expressions are not.\n4) Use the term 'Temporal Dead Zone' — it shows depth.\n5) Give the classic trap: var a = 1; function test() { console.log(a); var a = 2; } — output is undefined.\n6) Mention that classes are hoisted like let/const (TDZ).\n7) End with the execution context model: creation phase vs execution phase.\n\nThis shows you understand the JavaScript engine at the specification level, not just surface behavior.",
      },
    ],
  },
  // ── 14. Object Creation in JavaScript ─────────────────────
  {
    id: "14",
    slug: "javascript-object-creation",
    title: "JavaScript Object Creation — Every Method Explained (Literal, Constructor, Class, Prototype & More)",
    description:
      "Master all the ways to create objects in JavaScript: object literals, constructor functions, Object.create(), ES6 classes, factory functions, and the prototype chain. With visual inheritance diagrams, comparison tables, and interview tips.",
    thumbnail: "🧱",
    category: "JavaScript",
    tags: ["JavaScript", "Objects", "Prototype", "Classes", "OOP", "Interview"],
    author: "CodingInvent",
    publishedAt: "2026-04-01",
    readTime: "11 min",
    sections: [
      {
        heading: "Why So Many Ways?",
        content:
          "JavaScript is a prototype-based language, not a classical OOP language. Over the years (ES3 → ES5 → ES6), different patterns emerged for creating objects. Understanding all of them — and knowing when to use each — is a core interview skill.",
        diagram: `graph TD
  A["Object Creation Methods"] --> B["1. Object Literal {}"]
  A --> C["2. new Object()"]
  A --> D["3. Constructor Function"]
  A --> E["4. Object.create()"]
  A --> F["5. ES6 Class"]
  A --> G["6. Factory Function"]
  A --> H["7. Object.assign()"]
  A --> I["8. Spread Operator"]
  style B fill:#22c55e,color:#000
  style D fill:#38bdf8,color:#000
  style E fill:#a78bfa,color:#fff
  style F fill:#f59e0b,color:#000
  style G fill:#ec4899,color:#fff`,
      },
      {
        heading: "Method 1 — Object Literal (Most Common)",
        content:
          "The simplest and most common way. Just use curly braces. This creates a plain object that inherits from Object.prototype. Use this for one-off objects, configuration, and data structures.",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ Basic Object Literal ═══
const user = {
  name: "John",
  age: 30,
  greet() {
    return \`Hello, I'm \${this.name}\`;
  },
};

console.log(user.name);      // "John"
console.log(user.greet());   // "Hello, I'm John"

// ═══ Shorthand Properties (ES6) ═══
const name = "Jane";
const age = 25;
const user2 = { name, age };  // Same as { name: name, age: age }

// ═══ Computed Property Names (ES6) ═══
const key = "email";
const user3 = {
  name: "John",
  [key]: "john@test.com",     // email: "john@test.com"
  [\`get\${key.charAt(0).toUpperCase() + key.slice(1)}\`]() {
    return this.email;
  },
};
console.log(user3.getEmail()); // "john@test.com"

// ═══ Nested Objects ═══
const company = {
  name: "CodingInvent",
  address: {
    city: "Mumbai",
    country: "India",
  },
};`,
        },
      },
      {
        heading: "Method 2 — Constructor Function (Pre-ES6)",
        content:
          "Before ES6 classes, constructor functions were the standard way to create reusable object blueprints. A constructor is a regular function called with 'new'. The 'new' keyword creates a new object, sets 'this' to that object, links the prototype, and returns it.",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ Constructor Function ═══
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Methods on the prototype (shared by all instances)
Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

const john = new Person("John", 30);
const jane = new Person("Jane", 25);

console.log(john.greet());  // "Hello, I'm John"
console.log(jane.greet());  // "Hello, I'm Jane"

// Both share the SAME greet function
console.log(john.greet === jane.greet);  // true ✅ (memory efficient)

// ═══ What 'new' does under the hood ═══
// 1. Creates empty object: {}
// 2. Sets __proto__ to Person.prototype
// 3. Calls Person() with 'this' = new object
// 4. Returns the object (unless constructor returns an object)

// Without 'new' — BUG!
const broken = Person("Bob", 20);  // ❌ 'this' = window/undefined
console.log(broken);               // undefined
console.log(window.name);          // "Bob" — polluted global!`,
        },
        diagram: `sequenceDiagram
  participant Code
  participant new as new Keyword
  participant Obj as New Object
  participant Proto as Person.prototype

  Code->>new: new Person("John", 30)
  new->>Obj: 1. Create empty object {}
  new->>Obj: 2. Set __proto__ = Person.prototype
  new->>Obj: 3. Call Person() with this = obj
  Note over Obj: this.name = "John"
  Note over Obj: this.age = 30
  new-->>Code: 4. Return object

  Obj->>Proto: john.greet()
  Note over Proto: Found on prototype!
  Proto-->>Obj: "Hello, I'm John"`,
      },
      {
        heading: "Method 3 — ES6 Class (Modern Standard)",
        content:
          "ES6 classes are syntactic sugar over constructor functions + prototypes. They look like classical OOP but work the same way under the hood. Classes support constructors, methods, static methods, getters/setters, and inheritance via extends.",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ ES6 Class ═══
class Person {
  // Constructor — called when you use 'new'
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method (on prototype)
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }

  // Getter
  get info() {
    return \`\${this.name}, age \${this.age}\`;
  }

  // Setter
  set fullName(val) {
    this.name = val;
  }

  // Static method (on class itself, not instances)
  static create(name, age) {
    return new Person(name, age);
  }
}

const john = new Person("John", 30);
console.log(john.greet());       // "Hello, I'm John"
console.log(john.info);          // "John, age 30"
john.fullName = "John Doe";
console.log(john.name);          // "John Doe"

const jane = Person.create("Jane", 25);  // Static factory method

// ═══ Inheritance with extends ═══
class Developer extends Person {
  constructor(name, age, language) {
    super(name, age);            // MUST call super() first
    this.language = language;
  }

  greet() {
    return \`\${super.greet()}, I code in \${this.language}\`;
  }
}

const dev = new Developer("Alice", 28, "JavaScript");
console.log(dev.greet());  // "Hello, I'm Alice, I code in JavaScript"
console.log(dev instanceof Developer);  // true
console.log(dev instanceof Person);     // true`,
        },
      },
      {
        heading: "Method 4 — Object.create() (Prototype Control)",
        content:
          "Object.create() lets you create an object with a specific prototype. This is the purest form of prototypal inheritance — no constructors, no classes. It's how JavaScript inheritance really works at the lowest level.",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ Object.create(proto) ═══
const personProto = {
  greet() {
    return \`Hello, I'm \${this.name}\`;
  },
  init(name, age) {
    this.name = name;
    this.age = age;
    return this;
  },
};

// Create object with personProto as its prototype
const john = Object.create(personProto);
john.name = "John";
john.age = 30;
console.log(john.greet());  // "Hello, I'm John"

// Or with chaining:
const jane = Object.create(personProto).init("Jane", 25);

// ═══ Object.create(null) — no prototype at all! ═══
const pure = Object.create(null);
pure.key = "value";
console.log(pure.toString);      // undefined — no Object.prototype methods!
console.log("key" in pure);      // true

// ═══ With property descriptors ═══
const config = Object.create(null, {
  host: { value: "localhost", writable: false, enumerable: true },
  port: { value: 3000, writable: true, enumerable: true },
});`,
        },
        diagram: `graph TD
  A["Object.create(personProto)"] --> B["New Object: john"]
  B -->|"__proto__"| C["personProto"]
  C -->|"__proto__"| D["Object.prototype"]
  D -->|"__proto__"| E["null"]

  F["Object.create(null)"] --> G["New Object: pure"]
  G -->|"__proto__"| H["null (no prototype!)"]

  style B fill:#38bdf8,color:#000
  style C fill:#a78bfa,color:#fff
  style D fill:#64748b,color:#fff
  style G fill:#f59e0b,color:#000
  style H fill:#ef4444,color:#fff`,
      },
      {
        heading: "Method 5 — Factory Function (No 'new' Needed)",
        content:
          "A factory function is a regular function that returns a new object. No 'new' keyword, no 'this' confusion, no prototype chain. It's the simplest pattern for creating multiple similar objects. Preferred in functional programming.",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ Basic Factory Function ═══
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return \`Hello, I'm \${name}\`;  // Closure — no 'this' needed!
    },
  };
}

const john = createPerson("John", 30);
console.log(john.greet());  // "Hello, I'm John"

// ═══ Factory with Private Variables (Closure) ═══
function createCounter(initial = 0) {
  let count = initial;  // Private — cannot be accessed outside

  return {
    increment() { count++; },
    decrement() { count--; },
    getCount() { return count; },
  };
}

const counter = createCounter(10);
counter.increment();
counter.increment();
console.log(counter.getCount());  // 12
console.log(counter.count);       // undefined — truly private!

// ═══ Factory with Composition (vs Inheritance) ═══
const canWalk = (state) => ({
  walk() { return \`\${state.name} is walking\`; },
});

const canSwim = (state) => ({
  swim() { return \`\${state.name} is swimming\`; },
});

function createDuck(name) {
  const state = { name };
  return { ...state, ...canWalk(state), ...canSwim(state) };
}

const duck = createDuck("Donald");
console.log(duck.walk());  // "Donald is walking"
console.log(duck.swim());  // "Donald is swimming"`,
        },
      },
      {
        heading: "Method 6 — Object.assign() & Spread (Cloning/Merging)",
        content:
          "Object.assign() copies properties from source objects into a target. The spread operator (...) does the same in a more modern syntax. Both create SHALLOW copies — nested objects are still shared by reference.",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ Object.assign(target, ...sources) ═══
const defaults = { theme: "light", lang: "en", debug: false };
const userPrefs = { theme: "dark", lang: "hi" };
const config = Object.assign({}, defaults, userPrefs);
console.log(config);
// { theme: "dark", lang: "hi", debug: false }

// ═══ Spread Operator (ES2018) ═══
const config2 = { ...defaults, ...userPrefs };  // Same result

// ═══ Shallow Copy Warning! ═══
const original = {
  name: "John",
  address: { city: "Mumbai", country: "India" },
};

const clone = { ...original };
clone.name = "Jane";              // ✅ Independent
clone.address.city = "Delhi";     // ❌ Changes BOTH — shared reference!

console.log(original.address.city);  // "Delhi" — mutated!

// ═══ Deep Clone Solutions ═══
// Method 1: structuredClone (modern browsers)
const deepClone = structuredClone(original);

// Method 2: JSON (loses functions, dates, undefined)
const jsonClone = JSON.parse(JSON.stringify(original));`,
        },
        comparison: {
          title: "Shallow Copy vs Deep Copy",
          headers: ["Aspect", "Shallow ({...obj}) / Deep (structuredClone)"],
          rows: [
            ["Primitive Props", "Copied by value", "Copied by value"],
            ["Nested Objects", "Shared reference!", "Independent copy"],
            ["Performance", "Fast", "Slower"],
            ["Functions", "Copied", "Lost (not cloneable)"],
            ["Circular Refs", "Copied", "Handled"],
            ["Use When", "Flat objects", "Nested objects matter"],
          ],
        },
      },
      {
        heading: "The Prototype Chain — How Inheritance Works",
        content:
          "Every JavaScript object has a hidden [[Prototype]] link (accessible via __proto__ or Object.getPrototypeOf()). When you access a property, JavaScript first checks the object itself, then walks up the prototype chain until it finds it or reaches null. This is the core of JavaScript inheritance.",
        diagram: `graph TD
  dev["dev instance<br/>{name, age, language}"] -->|"__proto__"| DP["Developer.prototype<br/>{greet()}"]
  DP -->|"__proto__"| PP["Person.prototype<br/>{greet(), toString()}"]
  PP -->|"__proto__"| OP["Object.prototype<br/>{hasOwnProperty, valueOf, ...}"]
  OP -->|"__proto__"| NULL["null<br/>(end of chain)"]

  dev2["dev.hasOwnProperty('name')"] --> Check1{"Own property?"}
  Check1 -- Yes --> Found1["Return value"]
  Check1 -- No --> Check2{"Developer.prototype?"}
  Check2 -- No --> Check3{"Person.prototype?"}
  Check3 -- No --> Check4{"Object.prototype?"}
  Check4 -- Yes --> Found4["Found! Return value"]
  Check4 -- No --> Undef["undefined"]

  style dev fill:#38bdf8,color:#000
  style DP fill:#a78bfa,color:#fff
  style PP fill:#7c3aed,color:#fff
  style OP fill:#64748b,color:#fff
  style NULL fill:#ef4444,color:#fff`,
      },
      {
        heading: "Comparison of All Methods",
        content:
          "Here is a complete comparison to help you choose the right object creation pattern for each situation.",
        comparison: {
          title: "Object Creation Methods Compared",
          headers: ["Method", "Use Case / Pros / Cons"],
          rows: [
            ["Object Literal {}", "One-off objects, config", "Simplest, readable / No reuse, no prototype control"],
            ["Constructor Function", "Reusable blueprints (pre-ES6)", "Shared prototype methods / 'this' confusion, needs 'new'"],
            ["ES6 Class", "Modern OOP, inheritance", "Clean syntax, extends / Still prototype under hood"],
            ["Object.create()", "Direct prototype control", "True prototypal inheritance / Verbose, no constructor"],
            ["Factory Function", "Functional style, privacy", "No 'this', closures for privacy / No instanceof, memory per instance"],
            ["Object.assign/Spread", "Merging, cloning", "Easy composition / Shallow copy only"],
          ],
        },
      },
      {
        heading: "Property Descriptors & Object Methods",
        content:
          "JavaScript objects have hidden property attributes: writable, enumerable, configurable. Knowing these is an advanced interview topic. There are also powerful Object static methods to freeze, seal, and inspect objects.",
        codeSnippet: {
          language: "javascript",
          code: `// ═══ Property Descriptors ═══
const obj = {};
Object.defineProperty(obj, "id", {
  value: 1,
  writable: false,       // Cannot reassign
  enumerable: true,      // Shows in for...in
  configurable: false,   // Cannot delete or redefine
});
obj.id = 999;            // Silently fails (or throws in strict mode)
console.log(obj.id);     // 1

// ═══ Object.freeze() — nothing can change ═══
const frozen = Object.freeze({ name: "John", age: 30 });
frozen.name = "Jane";    // ❌ Fails silently
frozen.email = "x";      // ❌ Cannot add properties
delete frozen.age;       // ❌ Cannot delete

// ═══ Object.seal() — can modify, cannot add/delete ═══
const sealed = Object.seal({ name: "John", age: 30 });
sealed.name = "Jane";    // ✅ Can modify existing
sealed.email = "x";      // ❌ Cannot add new
delete sealed.age;       // ❌ Cannot delete

// ═══ Useful Object Methods ═══
const user = { name: "John", age: 30, email: "john@test.com" };

Object.keys(user);       // ["name", "age", "email"]
Object.values(user);     // ["John", 30, "john@test.com"]
Object.entries(user);    // [["name","John"], ["age",30], ["email","john@test.com"]]
Object.fromEntries([["a",1],["b",2]]);  // { a: 1, b: 2 }

user.hasOwnProperty("name");            // true
Object.getPrototypeOf(user);            // Object.prototype
Object.is(NaN, NaN);                    // true (unlike ===)`,
        },
      },
      {
        heading: "Common Interview Mistakes",
        content:
          "These object-related mistakes are red flags for interviewers:\n1) Not knowing the difference between __proto__ and prototype — __proto__ is on instances (the link), .prototype is on constructor functions (the template).\n2) Saying 'class replaces prototypes' — classes ARE prototypes with nicer syntax. typeof class is 'function'.\n3) Not understanding shallow vs deep copy — modifying nested objects in a spread copy mutates the original.\n4) Forgetting 'new' with constructor functions — without 'new', 'this' is window/undefined and properties leak to global scope.\n5) Putting methods inside the constructor — this creates a new function per instance instead of sharing via prototype.\n6) Not knowing Object.create(null) — creates objects with NO prototype, useful for pure dictionaries without toString/hasOwnProperty collisions.",
      },
      {
        heading: "Interview Tips",
        content:
          "When asked about object creation in interviews:\n1) Start with object literals for simple cases — show you know when NOT to over-engineer.\n2) Explain constructor functions + prototype for reusable blueprints — this shows you understand the engine.\n3) Show ES6 classes as syntactic sugar — prove you know what's underneath.\n4) Demonstrate Object.create() for direct prototype control — this separates seniors from juniors.\n5) Use factory functions when you need privacy via closures — no 'this' confusion.\n6) Draw the prototype chain — interviewers love visual explanations.\n7) Mention Object.freeze, Object.seal, and property descriptors for bonus points.\n\nThis shows you understand JavaScript's object model from the bottom up, not just the surface API.",
      },
    ],
  },
];

export const blogCategories: string[] = [
  ...new Set(blogs.map((b) => b.category)),
];
