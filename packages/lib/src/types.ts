import { BoxProps } from "./templates/box";
import { MetaProps } from "./templates/meta";
import { TitleProps } from "./templates/title";

export {};

declare global {
  namespace JSX {
    type Context = {
      styles: Set<string>;
      head: {
        lang?: string;
        title?: string;
        charset?: string;
      };
    };

    type TemplateFn<P extends JSX.Props> = (
      props: P,
      ctx: JSX.Context
    ) => void | null | string | undefined | Promise<void | null | string | undefined>;

    type Primitive = string | number | boolean | null | undefined;

    type ElementType = keyof IntrinsicElements | ElementFn;
    type Props<P extends Record<string, unknown> = Record<string, unknown>> = P & { children?: Children };
    type Children = Primitive | Element | Array<Children> | Promise<Primitive | Element | Array<Children>>;

    type ElementFn<P extends Props = Props> = (p: P) => Children;

    interface Element {
      s: symbol;
      t: ElementType;
      p: Props;
    }

    interface IntrinsicElements {
      title: TitleProps;
      meta: MetaProps;

      style: {
        css: string;
      };

      box: BoxProps;
    }
  }
}
