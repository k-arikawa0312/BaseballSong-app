/*
  Warnings:

  - You are about to drop the column `filepath` on the `Song` table. All the data in the column will be lost.
  - Added the required column `audioFilePath` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `midiFilePath` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Song" DROP COLUMN "filepath",
ADD COLUMN     "audioFilePath" TEXT NOT NULL,
ADD COLUMN     "midiFilePath" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "SongLyrics" (
    "id" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "midinotes" JSONB NOT NULL,
    "tempo" INTEGER NOT NULL,

    CONSTRAINT "SongLyrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SongMidi" (
    "id" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "midinotes" JSONB NOT NULL,
    "tempo" INTEGER NOT NULL,

    CONSTRAINT "SongMidi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SongLyrics_songId_key" ON "SongLyrics"("songId");

-- CreateIndex
CREATE UNIQUE INDEX "SongMidi_songId_key" ON "SongMidi"("songId");

-- AddForeignKey
ALTER TABLE "SongLyrics" ADD CONSTRAINT "SongLyrics_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongMidi" ADD CONSTRAINT "SongMidi_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;
