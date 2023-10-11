import { render } from "../render";

export type BoxProps = JSX.Props<{
  css?: string;
  width?: number | string;
  height?: number | string;
}>;

export const box: JSX.TemplateFn<BoxProps> = async (props: BoxProps, context: JSX.Context) => {
  const children = await render(props.children, context);

  return `<div>${children}</div>`;
};
