import React from "react";

export const Btn = (props) => {
  const { isRunning, startTimer, stopTimer, resetTimer } = props;

  return (
    <div className="buttons">
      {!isRunning && <button onClick={startTimer}>Start</button>}
      {isRunning && <button onClick={stopTimer}>Stop</button>}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};
