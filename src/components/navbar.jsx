import logo from "../imagenes/logo.jpg";
import IconoCarrito from "./iconoCarrito";
import { Link } from "react-router-dom";

function Navbar(params) {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <Link to={"/"}>
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img
              src={logo}
              alt="logo"
              className="h-14 w-14 rounded-full object-cover mr-2"
              style={{ maxWidth: "6rem", maxHeight: "6rem" }}
            ></img>

            <span className="font-semibold text-xl tracking-tight">
              E- Comerce
            </span>
          </div>
        </Link>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to={"/"}>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Inicio
              </a>
            </Link>
            <Link to={"/cart"}>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Carrito
              </a>
            </Link>
            <Link to={"/finish"}>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Finalizar Compra
              </a>
            </Link>
          </div>

          <Link to="/cart">
            <IconoCarrito />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
