// Type declarations for react-syntax-highlighter ESM sub-module imports
// that the @types package does not cover with deep paths.

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export { default as oneDark } from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";
  const styles: Record<string, Record<string, React.CSSProperties>>;
  export default styles;
}

declare module "react-syntax-highlighter/dist/esm/languages/prism/javascript" {
  const lang: unknown;
  export default lang;
}
declare module "react-syntax-highlighter/dist/esm/languages/prism/typescript" {
  const lang: unknown;
  export default lang;
}
declare module "react-syntax-highlighter/dist/esm/languages/prism/jsx" {
  const lang: unknown;
  export default lang;
}
declare module "react-syntax-highlighter/dist/esm/languages/prism/python" {
  const lang: unknown;
  export default lang;
}
declare module "react-syntax-highlighter/dist/esm/languages/prism/sql" {
  const lang: unknown;
  export default lang;
}
declare module "react-syntax-highlighter/dist/esm/languages/prism/java" {
  const lang: unknown;
  export default lang;
}
declare module "react-syntax-highlighter/dist/esm/languages/prism/csharp" {
  const lang: unknown;
  export default lang;
}
declare module "react-syntax-highlighter/dist/esm/languages/prism/docker" {
  const lang: unknown;
  export default lang;
}
declare module "react-syntax-highlighter/dist/esm/languages/prism/bash" {
  const lang: unknown;
  export default lang;
}
declare module "react-syntax-highlighter/dist/esm/languages/prism/json" {
  const lang: unknown;
  export default lang;
}
