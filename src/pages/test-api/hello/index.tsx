import { useEffect, useState } from "react";

export default function TestApiHello() {
  const [name, setName] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/hello");

      const data = await res.json();

      setName(data.name);
    })();
  }, []);

  return <>The name is: {name}</>;
}
