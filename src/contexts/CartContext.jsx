import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // Logica del contexto
  const [cart, setCart] = useState([]);

  const finalValue = cart.reduce((total, product) => {
    return total + product.base_price * product.quantity;
  }, 0);
  const finalValueTaxes = finalValue * 1.05;

  const pushToCart = (product) => {
    const productIndex = cart.findIndex((el) => el.id === product.id);
    if (productIndex !== -1) {
      const newCart = [...cart];
      newCart[productIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const deleteFromCart = (product) => {
    const newCart = cart.filter((el) => el !== product);
    const newCartActualized = [...newCart];
    setCart(newCartActualized);
  };

  const sumarQuantity = (id) => {
    const productIndex = cart.findIndex((el) => el.id === id); // Busca el indice del producto en el carrito
    console.log(productIndex); // 0 => Indice del primer producto del carrito
    const newCart = [...cart]; // Hacemos una copia del carrito para no mutar el estado
    // cart = newCart; <== Esto no se hace, PROHIBIDO
    newCart[productIndex].quantity += 1; // Buscamos el producto en el carrito y le sumamos 1 a la cantidad. newCart[0] => {id: 1, name: "Producto 1", quantity: 1}.quantity += 1 => {id: 1, name: "Producto 1", quantity: 2}
    setCart(newCart); // Actualizamos el estado del carrito con la nueva cantidad
  };

  const restarQuantity = (id) => {
    const productIndex = cart.findIndex((el) => el.id === id);
    const newCart = [...cart]; //copia del carrito
    const product = newCart[productIndex];
    if (product.quantity > 1) {
      newCart[productIndex].quantity -= 1; // busco el producto en el carro y resto quantity 1

      setCart(newCart);
    } else {
    }
  };

  const clearCart = (product) => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        pushToCart,
        deleteFromCart,
        finalValue,
        finalValueTaxes,
        sumarQuantity,
        restarQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
