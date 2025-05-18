"use client";

import { apiClient } from "@/lib/apiClient";
import { MidiFile, midiFileSchema } from "@/schema/midiFile";
import type React from "react";
import { useForm } from "react-hook-form";
import { HiXMark } from "react-icons/hi2";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

interface AddSongModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddSongModal({ isOpen, onClose }: AddSongModalProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(midiFileSchema),
  });

  const midiFile = watch("midiFile");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const onSubmit = async (data: MidiFile) => {
    console.log("送信データ:", data);

    try {
      // FrourioNextのクライアントを使用
      // format: 'formData'が指定されているため、自動的にFormDataに変換される
      await apiClient["song"].$post({
        body: data,
      });

      setMessage("曲の追加に成功しました。");
    } catch (e) {
      console.error(e);
      setMessage("曲の追加に失敗しました。");
    }
    setSelectedFileName("");
    reset();
    onClose();
  };

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
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 rounded-lg w-full max-w-md shadow-xl mx-4">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">応援歌を追加</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <HiXMark className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              曲のタイトル
            </label>
            <input
              type="text"
              placeholder="例: 六甲おろし"
              {...register("title", { required: true })}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              チーム
            </label>
            <select
              {...register("team", { required: true })}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:outline-none"
            >
              <option value="">チームを選択してください</option>
              {teams.map((team) => (
                <option key={team.id} value={team.name}>
                  {team.name}
                </option>
              ))}
            </select>
            {errors.team && (
              <p className="mt-1 text-sm text-red-600">{errors.team.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              MIDIファイル
            </label>
            <div className="flex items-center">
              <input
                type="file"
                accept=".mid,.midi"
                {...register("midiFile", {
                  onChange: handleFileChange,
                })}
                className="hidden"
                id="midiFile"
              />
              <label
                htmlFor="midiFile"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md border border-gray-700 hover:bg-gray-700 cursor-pointer"
              >
                ファイルを選択
              </label>
              <div className="flex-1 p-2 bg-gray-800 text-gray-400 rounded-r-md border border-gray-700 border-l-0 truncate">
                {selectedFileName || "ファイルが選択されていません"}
              </div>
            </div>
            {errors.midiFile && (
              <p className="mt-1 text-sm text-red-500">
                {errors.midiFile.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              歌詞
            </label>
            <textarea
              {...register("lyrics", { required: true })}
              rows={4}
              placeholder="歌詞を入力してください"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:outline-none resize-none"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              追加する
            </button>
          </div>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
}
