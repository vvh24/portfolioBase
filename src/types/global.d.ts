// Temporary ambient declarations to reduce TypeScript noise until dependencies are installed.
// These are intentionally broad — remove when real type packages are installed.

declare module '*';

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
