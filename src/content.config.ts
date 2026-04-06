import { defineCollection } from 'astro:content';
import type { SchemaContext } from "astro:content";
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const DIFFICULTY_ENUM = ["Facil", "Intermedi", "Dificil"] as const;

const recipeSchema = ({ image }: SchemaContext) => z.object({
  title: z.string(),
  tags: z.array(z.string()).optional(),
  duration: z.iso.duration(),
  difficulty: z.enum(DIFFICULTY_ENUM),
  link: z.url().optional(),
  category: z.enum(["Beguda", "Ramen", "Pasta", "Carn", "Llegums", "Postre"]),
  wantToDo: z.boolean().optional().default(false),
  thumbnail: image(),
  heroImage: image(),
  ingredients: z.array(z.string()),
  steps: z.array(z.string())
});

const recipes = defineCollection({
  loader: glob({ base: "./src/data/recipes", pattern: "**/*.md" }),
  schema: recipeSchema
})

export const collections = { recipes };