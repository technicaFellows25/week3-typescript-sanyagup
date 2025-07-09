import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router";
import Home from './pages/home';
import Destination from './pages/Destination';
import About from './pages/About';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
