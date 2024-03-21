import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white shadow-md p-4 rounded-md">
        <img src={product.thumbnail} alt="car" className="w-48" />
        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2">$ {product.price}</p>
          <p className="text-gray-700 text-base mb-2">{product.title}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
