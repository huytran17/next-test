import { useEffect, useState } from "react";

export default function Timer() {
  const [second, setSecond] = useState(0);
  const [intervalId, setIntervalId] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(() => setSecond((v) => v + 1), 1000);

    setIntervalId(interval);

    return () => stop();
  }, []);

  const stop = () => clearInterval(intervalId);

  return (
    <>
      <div>Second: {second}</div>
      <button onClick={stop}>Stop</button>
    </>
  );
}
