import { render } from "../render";

export type StyleProps = JSX.Props<{}>;

export const style: JSX.TemplateFn<StyleProps> = async (props, ctx) => {
  const styles = await render(props.children, ctx);
  ctx.styles.add(styles);
};
