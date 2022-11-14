import { Home } from "./Pages";
import { Navbar, Footer } from "./Component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
