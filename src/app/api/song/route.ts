import { prisma } from "@/lib/prisma";
import { createRoute } from "./frourio.server";
import { MidiFile } from "@/schema/midiFile";

export const { POST, GET } = createRoute({
  post: async (req: { body: MidiFile }) => {
    try {
      const { title, team, midiFile, lyrics } = req.body;

      const arrayBuffer = await midiFile.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);

      await prisma.song.create({
        data: {
          title,
          team,
          midiFile: uint8Array,
          lyrics,
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
