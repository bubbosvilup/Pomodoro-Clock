import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  isTimerRunningAtom,
  remainingTimeAtom,
  sessionTypeAtom,
  workDurationAtom,
} from "../atoms/timerAtoms";
import { Play, Pause, RotateCcw } from "lucide-react";

const Controls = () => {
  const [isRunning, setIsRunning] = useAtom(isTimerRunningAtom);
  const [remainingTime, setRemainingTime] = useAtom(remainingTimeAtom);
  const [sessionType] = useAtom(sessionTypeAtom);
  const [workDuration] = useAtom(workDurationAtom);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, remainingTime, setRemainingTime]);

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    if (sessionType === "work") {
      setRemainingTime(workDuration);
    }
  };

  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={handlePlayPause}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        {isRunning ? <Pause /> : <Play />}
      </button>
      <button
        onClick={handleReset}
        className="bg-red-500 text-white p-3 rounded-full shadow-lg"
      >
        <RotateCcw />
      </button>
    </div>
  );
};

export default Controls;
