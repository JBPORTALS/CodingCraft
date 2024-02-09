import { useState } from "react";

function App() {
  let [counter, setCounter] = useState<number>(0);

  return (
    <div className="flex justify-center items-center bg-gray-900 h-full w-full">
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="text-white rounded-md hover:border-white hover:border px-6 py-3 bg-gray-800 hover:bg-gray-700"
      >
        Count: {counter}
      </button>
    </div>
  );
}

export default App;
