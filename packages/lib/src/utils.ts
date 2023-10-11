import { s } from "./jsx-runtime";

export function isElement(data: unknown): data is JSX.Element {
  return data !== null && typeof data === "object" && "s" in data && data.s === s;
}

export function isPromise<T>(data: unknown): data is Promise<T> {
  return data !== null && typeof data === "object" && "then" in data && typeof data.then === "function";
}
