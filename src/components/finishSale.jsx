import { createContext, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function FinishSale() {
  const { cart, finalValue, finalValueTaxes, clearCart } =
    useContext(CartContext);

  return (
    <div className="mt-5 mb-5 ml-5 mr-5 grid justify-center items-center">
      <div className="">
        <div>
          <h3 className="font-bold">Resumen de compra:</h3>
        </div>
        <div>
          <p>Productos ({cart.length})</p>
          <p>Sub Total $ {finalValue.toFixed(0)}</p>
          <p>Envio 5% </p>
          <h3>Total ${finalValueTaxes.toFixed(0)}</h3>

          <button
            onClick={() => {
              clearCart(cart);
            }}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinishSale;
