import { useEffect, useState } from "react";
import ProductCard from "./productCard";

function ProductsContainer() {
  // Un estado que va a guardar los datos recibidos de la API
  const [data, setData] = useState([]);

  useEffect(() => {
    // Función asincrónica que va a hacer la petición a la API
    async function fetchData() {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q&q=bicicleta#json"
      );
      const toJson = await response.json();

      const results = toJson.results;

      //setData le da el valor a data => Setea el estado con la info de la api
      setData(results);
    }
    fetchData();
  }, []);
  //se actualizo el estado//

  // En el return, mapeamos el estado data y le pasamos cada producto a un componente ProductCard. Mapeamos porque tenemos un array de productos.
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsContainer;
