import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        onClick={() => setCount((prev) => prev + 1)}
        className="text-red-200"
      >
        {count}
      </Button>
    </>
  );
}

export default App;
