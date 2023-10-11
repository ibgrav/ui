export * from "./types";

export let s = Symbol("ui");

export let jsx = (t: JSX.ElementType, p: JSX.Props): JSX.Element => ({ s, t, p });

export const jsxs = jsx;
export const jsxDEV = jsx;

export let Fragment = (props?: { children?: JSX.Children }) => props?.children;
