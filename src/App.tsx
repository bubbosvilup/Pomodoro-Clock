import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import { useAtom } from "jotai";
import { completedSessionsAtom } from "./atoms/timerAtoms";

function App() {
  const [completedSessions] = useAtom(completedSessionsAtom);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Pomodoro Clock</h1>
      <TimerDisplay />
      <Controls />
      <div className="mt-4 text-lg text-gray-700">
        Sessioni completate: {completedSessions}
      </div>
    </div>
  );
}

export default App;
