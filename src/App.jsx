import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Hakkinda from "./pages/Hakkinda";
import Iletisim from "./pages/Iletisim";
import Anasayfa from "./pages/Anasayfa";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Anasayfa />} />
          <Route path="blog" element={<Blog />} />
          <Route path="hakkinda" element={<Hakkinda />} />
          <Route path="iletisim" element={<Iletisim />} />
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
