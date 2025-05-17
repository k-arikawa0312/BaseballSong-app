import { apiClient } from "@/lib/apiClient";
import { MidiFile } from "@/schema/midiFile";
import { useState } from "react";

export const useTopPage = () => {
  const [songs, setSongs] = useState<MidiFile[]>([]);

  const fetchSongs = async () => {
    const response = await apiClient["song"].$get();
    if (response && response.songs) {
      setSongs(response.songs);
    }
  };

  return { songs, fetchSongs };
};
