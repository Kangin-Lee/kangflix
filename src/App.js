import logo from "./logo.svg";
import "./App.css";
import Movie from "./component/Movie";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Detail from "./component/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
