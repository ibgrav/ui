import { render } from "../render";

export type TitleProps = JSX.Props<{}>;

export const title: JSX.TemplateFn<TitleProps> = async (props, ctx) => {
  ctx.head.title = await render(props.children, ctx);
};
