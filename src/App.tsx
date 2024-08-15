import { useEffect } from "react";

function App() {
  useEffect(() => {
    const key = btoa(import.meta.env.VITE_FRC_API_KEY);

    fetch("/api/v2.0/2024/events", {
      method: "GET",
      headers: {
        Authorization: `Basic ${key}`,
      },
    }).then((r) => console.log(r));
  }, []);

  return <div>hello world</div>;
}

export default App;
