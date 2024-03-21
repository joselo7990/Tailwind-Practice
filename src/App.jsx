import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProductsContainer from "./components/productsContainer";
import Cart from "./components/cart";
import FinishSale from "./components/finishSale";
import ProductCard from "./components/productCard";
import ProductDetailContainer from "./components/productDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./contexts/CartContext";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
          <Route
            path="/product/:productId"
            element={<ProductDetailContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/finish" element={<FinishSale />} />

          <Route path="/*" element={<h1>La pagina no existe</h1>} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
