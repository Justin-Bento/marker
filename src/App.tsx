import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="scroll-m-20 capitalize pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Vite + React
      </h1>
      <div className="overflow-hidden sm:rounded-lg dark:bg-gray-800/50">
        <div className="px-4 py-5 sm:p-6 space-y-4">
          {/* Content goes here */}
          <button
            onClick={() => setCount((count) => count + 1)}
            className="leading-7 font-mono"
          >
            count is {count}
          </button>
          <p className="leading-[1.5] text-md capitalize">
            Edit <code className="font-mono text-sm">src/App.tsx</code> and save
            to test HMR
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
