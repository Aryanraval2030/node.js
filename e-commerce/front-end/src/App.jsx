import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Products from "./pages/Products";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
