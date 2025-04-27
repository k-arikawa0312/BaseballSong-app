"use client";

import React, { useEffect, useState, useRef } from "react";
import { CheerSongMidiData, MidiNote } from "../../types/midi";
import { Synth, Transport, Part, start as startTone } from "tone";
import * as Tone from "tone";

interface MidiPlayerProps {
  midiData: CheerSongMidiData;
  lyrics?: {
    syllables: {
      text: string;
      startTime: number;
      endTime: number;
    }[];
  };
  onProgress?: (time: number) => void;
  onComplete?: () => void;
  autoStart?: boolean;
}

const MidiPlayer: React.FC<MidiPlayerProps> = ({
  midiData,
  lyrics,
  onProgress,
  onComplete,
  autoStart = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSyllable, setCurrentSyllable] = useState("");
  const [isReady, setIsReady] = useState(false);

  const synthRef = useRef<Synth | null>(null);
  const partRef = useRef<Part | null>(null);
  const progressIntervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Tone.jsの初期化
  useEffect(() => {
    const setupTone = async () => {
      try {
        await startTone();
        synthRef.current = new Synth().toDestination();
        setIsReady(true);

        // MIDIデータに基づいてパートを作成
        createMidiPart();

        // 自動開始
        if (autoStart) {
          setTimeout(() => {
            play();
          }, 500);
        }
      } catch (error) {
        console.error("Tone.jsの初期化に失敗しました:", error);
      }
    };

    setupTone();

    return () => {
      // クリーンアップ
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }

      if (partRef.current) {
        partRef.current.dispose();
      }

      if (synthRef.current) {
        synthRef.current.dispose();
      }

      Transport.stop();
      Transport.cancel();
    };
  }, [midiData, autoStart]);

  // MIDIデータからTone.jsのパートを作成
  const createMidiPart = () => {
    if (!synthRef.current) return;

    // 既存のパートをクリーンアップ
    if (partRef.current) {
      partRef.current.dispose();
    }

    // テンポを設定
    Transport.bpm.value = midiData.tempo;

    // ノートイベントを作成
    const events = midiData.notes.map((note) => {
      return {
        time: note.startTime / 1000, // ミリ秒を秒に変換
        note: midiNoteNumberToNote(note.noteNumber),
        velocity: note.velocity / 127, // 0-1の範囲に正規化
        duration: note.duration / 1000, // ミリ秒を秒に変換
      };
    });

    // Partを作成
    partRef.current = new Part((time, value) => {
      synthRef.current?.triggerAttackRelease(
        value.note,
        value.duration,
        time,
        value.velocity
      );
    }, events);

    // パートをTransportに接続
    partRef.current.start(0);

    // 最後のノートの後に完了イベントを発火
    const lastNote = midiData.notes[midiData.notes.length - 1];
    const endTime = (lastNote.startTime + lastNote.duration) / 1000 + 0.5; // 少し余裕を持たせる

    Transport.schedule((time) => {
      if (onComplete) {
        onComplete();
      }
      setIsPlaying(false);
    }, endTime);
  };

  // 再生開始
  const play = () => {
    if (!isReady) return;

    // 初期化
    Tone.Transport.stop();
    Transport.cancel(0);
    startTimeRef.current = Date.now();

    // プログレス更新用のインターバル
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    progressIntervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      setCurrentTime(elapsed);

      if (onProgress) {
        onProgress(elapsed);
      }

      // 現在の歌詞を更新
      if (lyrics) {
        const currentSyl = lyrics.syllables.find(
          (syl) => elapsed >= syl.startTime && elapsed <= syl.endTime
        );

        if (currentSyl) {
          setCurrentSyllable(currentSyl.text);
        } else {
          setCurrentSyllable("");
        }
      }
    }, 50) as unknown as number;

    // 再生開始
    Transport.start();
    setIsPlaying(true);
  };

  // 停止
  const stop = () => {
    Transport.stop();
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setCurrentSyllable("");
  };

  // 一時停止
  const pause = () => {
    Transport.pause();
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    setIsPlaying(false);
  };

  // MIDIノート番号を音名に変換（例: 60 -> "C4"）
  const midiNoteNumberToNote = (noteNumber: number): string => {
    const notes = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];
    const octave = Math.floor(noteNumber / 12) - 1;
    const noteName = notes[noteNumber % 12];
    return `${noteName}${octave}`;
  };

  // 時間を表示用にフォーマット（mm:ss）
  const formatTime = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="midi-player p-4 bg-gray-100 rounded-lg shadow">
      <div className="controls flex space-x-4 mb-4">
        {!isPlaying ? (
          <button
            onClick={play}
            disabled={!isReady}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
          >
            再生
          </button>
        ) : (
          <button
            onClick={pause}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md"
          >
            一時停止
          </button>
        )}

        <button
          onClick={stop}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          停止
        </button>
      </div>

      <div className="progress-bar w-full h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500"
          style={{
            width: `${Math.min(
              100,
              (currentTime /
                (midiData.notes[midiData.notes.length - 1].startTime +
                  midiData.notes[midiData.notes.length - 1].duration)) *
                100
            )}%`,
          }}
        />
      </div>

      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <div>{formatTime(currentTime)}</div>
        <div>
          {formatTime(
            midiData.notes[midiData.notes.length - 1].startTime +
              midiData.notes[midiData.notes.length - 1].duration
          )}
        </div>
      </div>

      {currentSyllable && (
        <div className="current-lyrics mt-6 text-center">
          <span className="text-2xl font-bold text-blue-600">
            {currentSyllable}
          </span>
        </div>
      )}
    </div>
  );
};

export default MidiPlayer;
