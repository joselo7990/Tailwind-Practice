import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import ProductDetailPicture from "./productDetailPicture";
import { Link } from "react-router-dom";

function ProductDetail({ product }) {
  const { pushToCart } = useContext(CartContext);
  const [mainPicture, setMainPicture] = useState(
    product.pictures[0].secure_url
  );

  const changePicture = (url) => {
    setMainPicture(url);
  };

  return (
    <div className="grid grid-cols-2 bg-white shadow-md p-4 rounded-md">
      <div className="">
        <img
          src={mainPicture}
          className="w-full max-h-[400px] object-contain"
          alt="car"
        />
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base mb-2">{product.id}</p>
        <p className="font-bold text-xl mb-2">{product.title}</p>

        <p className="text-gray-700 text-base mb-2">
          Ciudad: {product.seller_address.city.name}
        </p>
        <p className="text-gray-700 text-base mb-2">
          Pais: {product.seller_address.country.name}
        </p>

        <p className="font-bold text-5xl mt-12">$ {product.price}</p>
        <div className="flex mt-5">
          <button
            onClick={() => pushToCart(product)}
            className="bg-blue-500 rounded text-white text-xl py-4 px-4 mx-1"
          >
            Agregar al carrito
          </button>
          <Link to={"/"}>
            <button className="bg-teal-300 rounded text-xl py-4 px-4 mx-1">
              Continuar Comprando
            </button>
          </Link>
        </div>
        <div className="flex gap-4">
          {product.pictures.length > 1 &&
            product.pictures.map((picture, index) => {
              if (index > 2) return;
              const isSelected = picture.secure_url === mainPicture;
              return (
                <ProductDetailPicture
                  url={picture.secure_url}
                  changePicture={changePicture}
                  isSelected={isSelected}
                  key={picture.secure_url}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
