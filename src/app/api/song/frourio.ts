import type { FrourioSpec } from "@frourio/next";
import { z } from "zod";
import { midiFileSchema } from "@/schema/midiFile";

// データベースから取得する曲の型定義
const SongSchema = z.object({
  id: z.string(),
  title: z.string(),
  team: z.string(),
  midiFile: z.any(), //いつか修正
  lyrics: z.string(),
});

export const frourioSpec = {
  post: {
    format: "formData",
    body: midiFileSchema,
    res: {
      200: { body: z.object({ value: z.string() }) },
      500: { body: z.object({ error: z.string() }) },
    },
  },
  get: {
    res: {
      200: { body: z.object({ songs: z.array(SongSchema) }) },
      500: { body: z.object({ error: z.string() }) },
    },
  },
} satisfies FrourioSpec;
