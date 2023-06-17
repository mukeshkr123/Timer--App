import React, { useRef, useState } from "react";
import "./main.css";
import { Btn } from "./btn";
import Timer from "./timer";

const padTime = (time) => {
  return time.toString().padStart(2, "0");
};

const Main = () => {
  const [title, setTitle] = useState("Let the countdown begin!!!");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    setTitle(`You're doing great!`);
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;
        resetTimer();
        return 0;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Keep it up!");
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Ready to go another round?");
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className="main">
      <h2>{title}</h2>
      <Timer minutes={minutes} seconds={seconds} />

      <Btn
        isRunning={isRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default Main;
