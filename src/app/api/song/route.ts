import { prisma } from "@/lib/prisma";
import { createRoute } from "./frourio.server";

// FormDataを処理するルート
export const { POST, GET } = createRoute({
  // POST: 曲を追加
  post: async ({ body }) => {
    try {
      console.log("受信したデータ:", {
        title: body.title,
        team: body.team,
        midiFile: body.midiFile ? `ファイル名: ${body.midiFile.name}` : null,
        lyrics: body.lyrics,
      });

      // FileオブジェクトをUint8Arrayに変換
      const arrayBuffer = await body.midiFile.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);

      // データベースに保存
      await prisma.song.create({
        data: {
          title: body.title,
          team: body.team,
          midiFile: uint8Array,
          lyrics: body.lyrics,
        },
      });

      return {
        status: 200,
        body: {
          value: "ok",
        },
      };
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        body: {
          error: "Failed to create song",
        },
      };
    }
  },

  // GET: 曲の一覧を取得
  get: async () => {
    try {
      const songs = await prisma.song.findMany();
      return {
        status: 200,
        body: { songs },
      };
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        body: { error: "Failed to get songs" },
      };
    }
  },
});
