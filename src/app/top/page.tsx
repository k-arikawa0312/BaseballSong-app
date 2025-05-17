"use client";

import { useState } from "react";
import TopPage from "../../components/topPage";
import { apiClient } from "@/lib/apiClient";

// const dummySongs = [
//   { id: 1, title: "六甲おろし", team: "阪神タイガース" },
//   { id: 2, title: "燃えよドラゴンズ", team: "中日ドラゴンズ" },
//   { id: 3, title: "若鷹軍団", team: "福岡ソフトバンクホークス" },
//   { id: 4, title: "闘魂こめて", team: "読売ジャイアンツ" },
//   { id: 5, title: "ファンファーレ", team: "広島東洋カープ" },
//   { id: 6, title: "翔べ!ライオンズ", team: "埼玉西武ライオンズ" },
//   { id: 7, title: "熱き星たちよ", team: "横浜DeNAベイスターズ" },
//   { id: 8, title: "栄冠は君に輝く", team: "高校野球" },
// ]

const top = async () => {
  // const [songs, setSongs] = useState(dummySongs)

  try {
    const songs = await apiClient["song"].$get();
  } catch (e) {
    console.error(e);
  }

  // const handleAddSong = (newSong: { title: string; team: string; midiFile: File | null }) => {
  //   const newId = songs.length + 1
  //   setSongs([...songs, { id: newId, title: newSong.title, team: newSong.team }])
  // }

  return (
    <div>
      <TopPage songs={songs} onAddSong={handleAddSong} />
    </div>
  );
};

export default top;
