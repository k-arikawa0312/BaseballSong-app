"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-indigo-700 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/song-selection" className="mr-4">
            {/* <ArrowLeft className="h-6 w-6 text-white" /> */}
          </Link>
          <h1 className="text-xl font-bold text-white">カラオケ</h1>
        </div>
        <button className="text-white">
          {/* <VolumeX className="h-6 w-6" /> */}
        </button>
      </header>

      <div className="flex-1 p-4 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 左側: 曲情報 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="aspect-square bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-xs">歌</span>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              {songData.title}
            </h2>
            <p className="text-gray-600">{songData.team}</p>
          </div>

          {/* 右側: 歌詞表示 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="mb-8">
              <p className="text-gray-600 mb-2">現在の歌詞:</p>
              <p className="text-2xl font-bold text-center my-4">
                {currentLyric}
              </p>

              <p className="text-gray-600 mb-2">次の歌詞:</p>
              <p className="text-lg text-gray-800 text-center">{nextLyric}</p>
            </div>

            {/* プログレスバー */}
            <div className="mt-8">
              <div className="relative w-full h-2 bg-gray-200 rounded-full mb-2">
                <div
                  className="absolute h-2 bg-indigo-600 rounded-full"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* 再生ボタン */}
            <div className="flex justify-center mt-4">
              <button
                onClick={togglePlayback}
                className="px-8 py-2 bg-indigo-700 text-white rounded-full font-medium"
              >
                {isPlaying ? "一時停止" : "再生"}
              </button>
            </div>
          </div>
        </div>

        {/* 歌唱のヒント */}
        <div className="bg-white rounded-lg p-4 shadow-sm mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-3">歌唱のヒント</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>マイクボタンをタップして、マイクをオンにしてください</li>
            <li>画面に表示される歌詞に合わせて歌ってください</li>
            <li>曲が終わると自動的に採点結果が表示されます</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
