"use client"

import type React from "react"

import { useState, useRef } from "react"
import { HiXMark, HiMusicalNote } from "react-icons/hi2"

interface AddSongModalProps {
  isOpen: boolean
  onClose: () => void
  onAddSong: (song: { title: string; team: string; midiFile: File | null }) => void
}

export default function AddSongModal({ isOpen, onClose, onAddSong }: AddSongModalProps) {
  const [title, setTitle] = useState("")
  const [team, setTeam] = useState("")
  const [midiFile, setMidiFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 日本のプロ野球12球団
  const teams = [
    { id: "giants", name: "読売ジャイアンツ" },
    { id: "tigers", name: "阪神タイガース" },
    { id: "carp", name: "広島東洋カープ" },
    { id: "dragons", name: "中日ドラゴンズ" },
    { id: "baystars", name: "横浜DeNAベイスターズ" },
    { id: "swallows", name: "東京ヤクルトスワローズ" },
    { id: "hawks", name: "福岡ソフトバンクホークス" },
    { id: "buffaloes", name: "オリックス・バファローズ" },
    { id: "marines", name: "千葉ロッテマリーンズ" },
    { id: "fighters", name: "北海道日本ハムファイターズ" },
    { id: "eagles", name: "東北楽天ゴールデンイーグルス" },
    { id: "lions", name: "埼玉西武ライオンズ" },
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setMidiFile(file)
      setFileName(file.name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title && team) {
      onAddSong({ title, team, midiFile })
      resetForm()
      onClose()
    }
  }

  const resetForm = () => {
    setTitle("")
    setTeam("")
    setMidiFile(null)
    setFileName("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">応援歌を追加</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <HiXMark className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
              曲のタイトル
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-indigo-500 focus:outline-none"
              placeholder="例: 六甲おろし"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="team" className="block text-sm font-medium text-gray-300 mb-1">
              チーム
            </label>
            <select
              id="team"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-indigo-500 focus:outline-none"
              required
            >
              <option value="">チームを選択してください</option>
              {teams.map((team) => (
                <option key={team.id} value={team.name}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="midiFile" className="block text-sm font-medium text-gray-300 mb-1">
              MIDIファイル
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id="midiFile"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".mid,.midi"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-gray-700 text-white rounded-l-md border border-gray-600 hover:bg-gray-600"
              >
                ファイルを選択
              </button>
              <div className="flex-1 p-2 bg-gray-700 text-white rounded-r-md border border-gray-600 border-l-0 truncate">
                {fileName || "ファイルが選択されていません"}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                resetForm()
                onClose()
              }}
              className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
            >
              <HiMusicalNote className="mr-2" />
              追加する
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
