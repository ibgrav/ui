import { box } from "./templates/box";
import { meta } from "./templates/meta";
import { style } from "./templates/style";
import { title } from "./templates/title";
import { isElement, isPromise } from "./utils";

const templates: Record<keyof JSX.IntrinsicElements, JSX.TemplateFn<JSX.Props>> = {
  box,
  title,
  meta,
  style
};

export async function render(children: JSX.Children, context: JSX.Context): Promise<string> {
  if (isPromise(children)) children = await children;

  const type = typeof children;

  if (type === "string") return children as string;
  if (type === "number") return (children as number).toString();

  if (Array.isArray(children)) {
    const result = await Promise.all(children.map((child) => render(child, context)));
    return result.join("");
  }

  if (isElement(children)) {
    if (typeof children.t === "function") {
      return render(children.t(children.p), context);
    }

    if (typeof children.t === "string") {
      const template = templates[children.t];
      const result = await template(children.p, context);
      if (result) return result;
    }
  }

  return "";
}
