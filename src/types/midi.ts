// src/types/midi.ts

// MIDIノートの構造
export interface MidiNote {
    noteNumber: number;   // MIDIノート番号 (0-127)
    startTime: number;    // 開始時間（ミリ秒）
    duration: number;     // 持続時間（ミリ秒）
    velocity: number;     // 音の強さ (0-127)
    syllable?: string;    // この音符に対応する歌詞の音節
}

// 応援歌のMIDIデータ構造
export interface CheerSongMidiData {
    notes: MidiNote[];    // ノートの配列
    tempo: number;        // テンポ（BPM）
    timeSignature: {
        numerator: number;   // 分子（例: 4/4の4）
        denominator: number; // 分母（例: 4/4の4）
    };
    // メタデータ
    key?: string;         // 調（例: "C Major"）
    tracks?: {            // 複数のトラックがある場合
        name: string;
        notes: MidiNote[];
    }[];
}

// 音節ベースの歌詞データ
export interface LyricsData {
    syllables: {
        text: string;        // 音節テキスト
        startTime: number;   // 開始時間（ミリ秒）
        endTime: number;     // 終了時間（ミリ秒）
        noteRef: number;     // 対応するMIDIノートのインデックス
        isHold?: boolean;    // 伸ばす音かどうか
    }[];
    sections?: {          // 歌詞のセクション分け（例: Aメロ、サビ）
        name: string;
        startTime: number;
        endTime: number;
    }[];
}

// データベースに保存する際のJSON構造例
export interface CheerSongMidiDataForDB {
    midiNotes: MidiNote[];
    tempo: number;
    timeSignature: string; // "4/4"のような文字列形式
    key?: string;
}