import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, team, audioFilePath, midiFilePath, lyrics } = body;

    const newSong = await prisma.song.create({
      data: {
        title,
        team,
        audioFilePath,
        midiFilePath,
        lyrics,
      },
    });

    return NextResponse.json(newSong, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create song" },
      { status: 500 }
    );
  }
}
