import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge(props) {
  const { title, targetTime } = props;
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerRef = useRef(null);
  const dialogRef = useRef(null);

  let timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    dialogRef.current.open();
    clearInterval(timerRef.current);
  }

  function handleStart() {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialogRef.current.open();
    clearInterval(timerRef.current);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challange
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? "Time is Running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
