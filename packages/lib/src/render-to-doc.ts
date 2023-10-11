import { render } from "./render";

export async function renderToDoc(children: JSX.Children, ctx?: JSX.Context): Promise<string> {
  if (!ctx) ctx = { head: {}, styles: new Set() };

  const body = await render(children, ctx);

  const head = `<meta charset="${ctx.head.charset || "UTF-8"}">` + `<title>${ctx.head.title || ""}</title>`;

  return (
    "<!DOCTYPE html>" + `<html lang="${ctx.head.lang || "en"}">` + `<head>${head}</head>` + `<body>${body}</body>` + "</html>"
  );
}
