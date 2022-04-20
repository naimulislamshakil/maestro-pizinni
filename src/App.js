import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Component/Pages/Home/Home";
import About from "../src/Component/Pages/About/About";
import Contact from "../src/Component/Pages/Contact/Contact";
import Menu from "../src/Component/Pages/Menu/Menu";
import NotFound from "../src/Component/Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
