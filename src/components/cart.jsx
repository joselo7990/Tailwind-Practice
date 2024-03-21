import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    deleteFromCart,
    finalValue,
    finalValueTaxes,
    sumarQuantity,
    restarQuantity,
  } = useContext(CartContext);

  return (
    <div className="flex justify-center">
      <div>
        {cart.map((product) => (
          <div key={product.id} className="flex justify-between">
            <div className="mx-px mt-5 mb-5 flex justify-start">
              <div className="col-span-1">
                <img
                  className="w-30 h-30 rounded mx-px mt-px"
                  src={product.thumbnail}
                  alt="product"
                />
              </div>
              <div className="col-span-3 flex flex-col items-center ml-3">
                <div className="font-bold">{product.title}</div>
                <div className="col-span-1 flex flex-col">
                  <div className="mt-2 ml-5 font-bold flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="15"
                      height="15"
                      className="mr-2"
                      onClick={() => {
                        restarQuantity(product.id);
                      }}
                    >
                      <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                    </svg>

                    <h3>Cantidad {product.quantity}</h3>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="15"
                      height="15"
                      className="ml-2"
                      onClick={() => {
                        sumarQuantity(product.id);
                      }}
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>
                  </div>
                  <div className="mt-2 ml-5 font-bold">
                    <h3>Sub total $ {product.base_price.toFixed(0)}</h3>
                  </div>
                </div>
                <div className="mt-2 ml-5 font-bold">
                  <h1>
                    Total: ${" "}
                    {product.base_price.toFixed(0) *
                      product.quantity.toFixed(0)}
                  </h1>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => deleteFromCart(product)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Eliminar
                  </button>
                  <Link to={"/finish"}>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">
                      Finalizar Compra
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resumen de compra */}
      <div className="mt-5 mb-5 ml-5 mr-5 resumen-compra">
        <div className="flex flex-col justify-end">
          <div>
            <h3>Resumen de compra</h3>
          </div>
          <div>
            <p>Productos ({cart.length})</p>
            <p>Sub Total ${finalValue.toFixed(0)}</p>
            <p>Envio: 5%</p>

            <h3>Total: ${finalValueTaxes.toFixed(0)} </h3>

            <Link to={"/finish"}>
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                Finalizar Compra
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
