import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Product from "./components/Product";
import Basket from "./components/Basket";



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket/>} />
      </Routes>
    </div>
  )
}


export default App