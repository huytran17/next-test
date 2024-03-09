import { useEffect, useState } from "react";

export default function Timer() {
  const [second, setSecond] = useState(0);
  const [intervalId, setIntervalId] = useState<any>(null);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    stop();

    const interval = setInterval(() => setSecond((v) => v + 1), 1000);

    setIntervalId(interval);

    return () => stop();
  }, [isStopped]);

  const stop = () => {
    if (!intervalId) {
      return;
    }

    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resume = () => !intervalId && setIsStopped((v) => !v);

  return (
    <>
      <div>Second: {second}</div>
      <button onClick={stop}>Stop</button>
      <button onClick={resume}>Resume</button>
    </>
  );
}
