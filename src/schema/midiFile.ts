import { z } from "zod";

const MIDIFILE_TYPE = ["midi"];

// サーバサイドでFileListが利用できるかチェック
const isFileList = (value: any): boolean => {
  try {
    // ブラウザ環境の場合
    if (typeof FileList !== "undefined") {
      return value instanceof FileList;
    }
    // サーバー環境の場合は、オブジェクトの構造で判断
    return (
      value &&
      typeof value === "object" &&
      typeof value.length === "number" &&
      typeof value[0] === "object" &&
      typeof value[0].arrayBuffer === "function"
    );
  } catch (e) {
    return false;
  }
};

export const midiFileSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  team: z.string(),
  midiFile: z
    .any()
    .refine(
      (value) =>
        (typeof File !== "undefined" && value instanceof File) ||
        (isFileList(value) && value.length > 0),
      {
        message: "MIDIファイルを選択してください",
      }
    )
    .transform((value) => {
      if (isFileList(value) && value.length > 0) {
        console.log("FileListからFileに変換");
        return value[0];
      }
      return value;
    }),
  lyrics: z.string(),
});

export type MidiFile = z.infer<typeof midiFileSchema>;
