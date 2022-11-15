import { Home, VerySoon, PlaceToStay } from "./Pages";
import { Navbar, Footer } from "./Component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<VerySoon />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
