import { teamColor } from "@/constants/teamColor";
import MidiPlayer from "./components/MidiPlayer";
import { dummyMidiData } from "./dummyMidiData";

export default function Home() {
  return (
    <>
      <p className={`text-[${teamColor.Dragons}]`}>ttest</p>
      <p style={{ color: teamColor.Carp }}>ttestaaaaaaaaaaa</p>
      <MidiPlayer midiData={dummyMidiData} />
    </>
  );
}
