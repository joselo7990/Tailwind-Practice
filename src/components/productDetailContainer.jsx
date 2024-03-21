import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetail from "./productDetail";

function ProductDetailContainer(params) {
  const [data, setData] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    async function fetchDataProducts() {
      const dataProduct = await fetch(
        `https://api.mercadolibre.com/items/${productId}`
      );
      const response = await dataProduct.json();

      setData(response);
    }
    fetchDataProducts();
  }, []);

  return <>{data && <ProductDetail product={data} />}</>;
}

export default ProductDetailContainer;
