export * from "./types";

export let s = Symbol("ui");

export let jsx = (t = "", p = {}) => ({ s, t, p });

export const jsxs = jsx;
export const jsxDEV = jsx;

export let Fragment = (props?: { children?: [] }) => props?.children;
