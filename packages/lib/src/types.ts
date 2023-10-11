export {};

declare global {
  namespace JSX {
    type Primitive = string | number | boolean | null | undefined;

    interface IntrinsicElements {
      box: {
        width?: number | string;
        height?: number | string;
      };
    }
  }
}
