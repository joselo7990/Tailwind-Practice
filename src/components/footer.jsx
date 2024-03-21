import logo from "../imagenes/logo.jpg";

function Footer() {
  return (
    <footer className="bg-teal-500 p-6 shadow text-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              alt="logo"
              className="h-14 w-14 rounded-full object-cover mr-2"
              style={{ maxWidth: "6rem", maxHeight: "6rem" }}
            ></img>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              E- Comerce
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Sobre-Nosotros
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licencia
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            E-Comerce™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
