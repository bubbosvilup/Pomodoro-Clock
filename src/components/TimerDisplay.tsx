import { useAtom } from "jotai";
import {
  remainingTimeAtom,
  sessionTypeAtom,
  completedSessionsAtom,
} from "../atoms/timerAtoms";

const TimerDisplay = () => {
  const [remainingTime] = useAtom(remainingTimeAtom);
  const [sessionType] = useAtom(sessionTypeAtom);
  const [completedSessions] = useAtom(completedSessionsAtom);

  // Formattazione del tempo
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold">
        {sessionType === "work" ? "Sessione di lavoro" : "Pausa"}
      </h2>
      <div className="text-6xl font-mono mt-4">{formatTime(remainingTime)}</div>
      <div className="mt-2 text-lg text-gray-500">
        Sessioni completate: {completedSessions}
      </div>
    </div>
  );
};

export default TimerDisplay;
