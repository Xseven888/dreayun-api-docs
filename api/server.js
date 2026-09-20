import { fileURLToPath } from "node:url";

const here = new URL("../", import.meta.url);

process.argv.push(
  "--side", "rebuild",
  "--root", fileURLToPath(new URL("./site", here)),
  "--fallback-root", fileURLToPath(new URL("./mirror", here)),
  "--origin-host", "doc.openlux.ai",
  "--ext-hosts", "cdn.jsdelivr.net",
  "--host", "0.0.0.0",
  "--port", String(process.env.PORT || 3000),
);

const { default: handler } = await import("../scripts/serve.mjs");

export default handler;
