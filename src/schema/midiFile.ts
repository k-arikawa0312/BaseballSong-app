import { z } from "zod";

const MIDIFILE_TYPE = ['midi']

const midiFileSchema = z.object({
  title: z.string(),
  team: z.string(),
  midiFile: z.instanceof(File),
  lyrics: z.string(),
});

export type MidiFile = z.infer<typeof midiFileSchema>;
