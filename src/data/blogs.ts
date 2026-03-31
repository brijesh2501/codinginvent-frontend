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
];

export const blogCategories: string[] = [
  ...new Set(blogs.map((b) => b.category)),
];
