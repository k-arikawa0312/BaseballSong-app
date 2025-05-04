export interface MidiNote {
  midi: number; // MIDIノート番号
  name: string; // ノート名（例：D5）
  duration: number; // 秒単位の長さ
  durationTicks: number; // ティック単位の長さ
  ticks: number; // 開始ティック位置
  time: number; // 秒単位の開始時間
  velocity: number; // 音の強さ（0-1）
}

export interface MidiControlChange {
  number: number; // コントロール番号
  value: number; // コントロール値（0-1）
  ticks: number; // ティック位置
  time: number; // 秒
}

export interface MidiPitchBend {
  value: number; // ピッチベンド値
  ticks: number;
  time: number;
}

export interface MidiTrack {
  name: string;
  instrument: string;
  channel: number;
  notes: MidiNote[];
  controlChanges: { [controlNumber: number]: MidiControlChange[] };
  pitchBends: MidiPitchBend[];
  endOfTrackTicks: number;
}

export interface MidiData {
  header: {
    formatType: number;
    trackCount: number;
    ppq: number; // ティックパー quarter note
  };
  tracks: MidiTrack[];
}
