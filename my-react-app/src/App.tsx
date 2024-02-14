import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Cart } from "./_components";
import Signup from "./_components/Signup";
import WithNavbar from "./_components/WithNavbar";

function App() {
  return (
    <div className="flex flex-col text-neutral-950 min-h-full h-fit w-full">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <WithNavbar>
                <Home />
              </WithNavbar>
            }
          />
          <Route
            path="/cart"
            element={
              <WithNavbar>
                <Cart />
              </WithNavbar>
            }
          />
          <Route path="/auth/sign-in" element={<Signup />} />
          <Route path="/auth/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
