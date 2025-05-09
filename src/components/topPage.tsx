"use client"

import { useState } from "react"
import Link from "next/link"
import { HiMagnifyingGlass, HiClock, HiMusicalNote, HiUser, HiCog6Tooth, HiPlus } from "react-icons/hi2"
import { FaMicrophone } from "react-icons/fa"
import AddSongModal from "@/components/addSongModal"

interface Song {
  id: number;
  title: string;
  team: string;
}

interface TopPageProps {
  songs: Song[];
  onAddSong: (newSong: { title: string; team: string; midiFile: File | null }) => void;
}

export default function TopPage({ songs, onAddSong }: TopPageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  // 最近歌った曲（最初の4曲を表示）
  const recentSongs = songs.slice(0, 4)

  // 応援歌（最初の4曲を表示）
  const cheeringSongs = songs.slice(0, 4)

  const handleAddSong = (newSong: { title: string; team: string; midiFile: File | null }) => {
    onAddSong(newSong)

    console.log("Added new song:", {
      title: newSong.title,
      team: newSong.team,
      midiFile: newSong.midiFile ? newSong.midiFile.name : "No file",
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <header className="bg-indigo-700 p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">野球応援歌カラオケ</h1>
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <HiUser className="h-6 w-6" />
          </button>
          <button className="text-white">
            <HiMusicalNote className="h-6 w-6" />
          </button>
          <button className="text-white">
            <HiCog6Tooth className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div className="p-4 flex-1">
        {/* 検索バー */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="曲名・アーティストを検索"
            className="w-full p-3 pl-10 rounded-lg bg-white text-gray-800 border border-gray-200 focus:border-indigo-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <HiMagnifyingGlass className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <button className="absolute right-3 top-3.5">
            <FaMicrophone className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* 最近歌った曲 */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <HiClock className="h-5 w-5 text-indigo-400 mr-2" />
            <h2 className="text-xl font-bold text-white">最近歌った曲</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recentSongs.map((song) => (
              <Link
                href={`/sing/${song.id}`}
                key={`recent-${song.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="p-3">
                  <h3 className="font-bold text-gray-800">{song.title}</h3>
                  <p className="text-sm text-gray-600">{song.team}</p>
                  <div className="flex justify-end mt-1">
                    <FaMicrophone className="h-4 w-4 text-indigo-600" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* マイプレイリスト */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <HiMusicalNote className="h-5 w-5 text-indigo-400 mr-2" />
            <h2 className="text-xl font-bold text-white">マイプレイリスト</h2>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center shadow-sm border border-gray-700">
            <p className="text-gray-300">お気に入りの曲をプレイリストに追加してください</p>
          </div>
        </div>

        {/* 野球応援歌 */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <HiMusicalNote className="h-5 w-5 text-indigo-400 mr-2" />
            <h2 className="text-xl font-bold text-white">野球応援歌</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cheeringSongs.map((song) => (
              <Link
                href={`/sing/${song.id}`}
                key={`sing-${song.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="p-3">
                  <h3 className="font-bold text-gray-800">{song.title}</h3>
                  <p className="text-sm text-gray-600">{song.team}</p>
                  <div className="flex justify-end mt-1">
                    <HiMusicalNote className="h-4 w-4 text-indigo-600" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 追加ボタン */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg"
        >
          <HiPlus className="h-6 w-6" />
        </button>
      </div>

      {/* 曲追加モーダル */}
      <AddSongModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAddSong={handleAddSong} />
    </div>
  )
}
