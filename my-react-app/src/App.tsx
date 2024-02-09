import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./_components/Home";
import About from "./_components/About";
import Navbar from "./_components/Navbar";

function App() {
  return (
    <div className="flex flex-col text-white bg-gray-900 h-full w-full">
      <BrowserRouter>
        {/* Navbar Links can get the context */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
