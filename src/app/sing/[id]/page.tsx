"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import MidiPlayer from "@/app/components/MidiPlayer";
import { dummyMidiData } from "@/app/dummyMidiData";

export default function SingingPage({ params }: { params: { id: string } }) {
  const [currentTime, setCurrentTime] = useState(1); // Start at 1 second
  const [duration, setDuration] = useState(40); // 40 seconds duration
  const [isPlaying, setIsPlaying] = useState(true);
  const [songData, setSongData] = useState({
    title: "六甲おろし",
    team: "阪神タイガース",
    lyrics: [
      { time: 0, text: "六甲嵐に　颯爽と" },
      { time: 10, text: "蒼天翔ける　日輪の" },
      { time: 20, text: "如く輝く　我が名は" },
      { time: 30, text: "阪神タイガース　阪神タイガース" },
    ],
  });

  // 現在の歌詞と次の歌詞を取得
  const getCurrentAndNextLyrics = (time: number) => {
    const currentIndex = songData.lyrics.findIndex((lyric, index) => {
      const nextLyric = songData.lyrics[index + 1];
      return lyric.time <= time && (!nextLyric || nextLyric.time > time);
    });
    const currentLyric = songData.lyrics[currentIndex]?.text || "";
    const nextLyric = songData.lyrics[currentIndex + 1]?.text || "";
    return { currentLyric, nextLyric };
  };

  const { currentLyric, nextLyric } = getCurrentAndNextLyrics(currentTime);

  // 曲の進行をシミュレート
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= duration) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [duration, isPlaying]);

  // 再生/一時停止の切り替え
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  // 時間を「分:秒」形式でフォーマット
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <header className="bg-indigo-700 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white">カラオケ</h1>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-4 bg-gray-900">
        <div className="w-full max-w-4xl">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <div className="mb-6 text-center">
              <h2 className="text-xl font-bold text-white">{songData.title}</h2>
              <p className="text-gray-300">{songData.team}</p>
            </div>

            <div className="mb-8 py-6">
              <p className="text-gray-300 mb-2 text-center">現在の歌詞:</p>
              <div className="min-h-16 flex items-center justify-center">
                <p className="text-3xl font-bold text-white text-center my-6">
                  {currentLyric}
                </p>
              </div>

              <p className="text-gray-300 mb-2 text-center mt-8">次の歌詞:</p>
              <div className="min-h-12 flex items-center justify-center">
                <p className="text-xl text-gray-300 text-center">{nextLyric}</p>
              </div>
            </div>

            <div className="mt-8">
              <div className="relative w-full h-2 bg-gray-700 rounded-full mb-2">
                <div
                  className="absolute h-2 bg-indigo-600 rounded-full"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-300">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={togglePlayback}
                className="px-8 py-3 bg-indigo-700 hover:bg-indigo-600 text-white rounded-full font-medium transition"
              >
                {isPlaying ? "一時停止" : "再生"}
              </button>
            </div>
            <MidiPlayer midiData={dummyMidiData} />
          </div>
        </div>
      </div>
    </div>
  );
}
