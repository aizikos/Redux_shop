import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket/>} />
        <Route path="/favorite" element={<Favorite/>} />

      </Routes>
    </div>
  )
}


export default App