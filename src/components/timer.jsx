import React from "react";

export default function Timer(props) {
  const { minutes, seconds } = props;
  return (
    <div className="timer">
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
}
