import { g, config } from "@grafbase/sdk";

g.model("Post", {
  title: g.string(),
  slug: g.string().unique(),
  content: g.string().optional(),
});

export default config({
  schema: g,
});
