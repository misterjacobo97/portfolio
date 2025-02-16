import { defineCollection } from "astro/content/runtime";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    projectLink: z.string(),
  }),
});

export const collections = { projects };
