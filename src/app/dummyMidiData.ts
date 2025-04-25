import { CheerSongMidiData } from "../types/midi";

export const dummyMidiData: CheerSongMidiData = {
  tempo: 120,
  timeSignature: {
    numerator: 4,
    denominator: 4,
  },
  notes: [
    {
      noteNumber: 60,
      startTime: 0,
      duration: 500,
      velocity: 100,
      syllable: "あ",
    },
    {
      noteNumber: 62,
      startTime: 500,
      duration: 500,
      velocity: 100,
      syllable: "い",
    },
    {
      noteNumber: 64,
      startTime: 1000,
      duration: 500,
      velocity: 100,
      syllable: "う",
    },
    {
      noteNumber: 65,
      startTime: 1500,
      duration: 500,
      velocity: 100,
      syllable: "え",
    },
    {
      noteNumber: 67,
      startTime: 2000,
      duration: 500,
      velocity: 100,
      syllable: "お",
    },
  ],
  key: "C Major",
};
