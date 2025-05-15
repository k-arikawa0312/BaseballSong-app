import { z } from "zod";

const MIDIFILE_TYPE = ["midi"];

export const midiFileSchema = z.object({
  title: z.string(),
  team: z.string(),
  midiFile: z
    .any()
    .refine(
      (value) =>
        value instanceof File ||
        (value instanceof FileList && value.length > 0),
      {
        message: "MIDIファイルを選択してください",
      }
    )
    .transform((value) => {
      if (value instanceof FileList && value.length > 0) {
        console.log("FileListからFileに変換", value[0]);
        return value[0];
      }
      return value;
    }),
  lyrics: z.string(),
});

export type MidiFile = z.infer<typeof midiFileSchema>;
