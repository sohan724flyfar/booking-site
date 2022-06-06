import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/Home/List/List";
import Hotels from "./Pages/Hotels/Hotels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="hotels/:id" element={<Hotels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
