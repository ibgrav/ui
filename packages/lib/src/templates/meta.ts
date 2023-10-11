export type MetaProps = JSX.Props<{
  name?: string;
  charset?: string;
  content?: string;
}>;

export const meta: JSX.TemplateFn<MetaProps> = (props: MetaProps, ctx: JSX.Context) => {};
