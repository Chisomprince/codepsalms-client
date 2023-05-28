import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas/schema";

const config = defineConfig({
  projectId: "b1egm4qj",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-03-09",
  basePath: "/studio/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
