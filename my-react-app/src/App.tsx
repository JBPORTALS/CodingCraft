import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Navbar, About, Cart } from "./_components";

function App() {
  return (
    <div className="flex flex-col text-neutral-950 min-h-full h-fit w-full">
      <BrowserRouter>
        {/* Navbar Links can get the context */}
        <Navbar />
        <div className="flex flex-col justify-center px-4 sm:px-16 md:px-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
