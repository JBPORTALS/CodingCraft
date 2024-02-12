import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./_components/Home";
import About from "./_components/About";
import Navbar from "./_components/Navbar";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col text-neutral-950 min-h-full h-fit w-full">
      <BrowserRouter>
        {/* Navbar Links can get the context */}
        <Navbar count={count} />
        <div className="flex flex-col justify-center px-4 sm:px-32">
          <Routes>
            <Route
              path="/"
              element={<Home count={count} setCount={setCount} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
