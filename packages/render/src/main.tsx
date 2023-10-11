import { renderToDoc } from "@ibgrav/ui";
import { createServer } from "http";
import { Main } from "./content.js";

const server = createServer(async (_req, res) => {
  const result = await renderToDoc(<Main />);

  res.statusCode = 200;
  res.setHeader("content-type", "text/html");
  res.end(result);
});

const port = 4123;

server.listen(port, "0.0.0.0", () => console.log(`http://127.0.0.1:${port}/`));
