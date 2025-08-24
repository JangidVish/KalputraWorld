import React, { useState } from "react";
import products from "./data.json";
import {
  FaWhatsapp,
  FaFacebookF,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Calculate pagination
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md relative">
        <div className="text-pink-600 font-bold text-xl">Kalpatru World</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 md:pr-10 font-semibold md:text-lg">
          <a href="#home" className="hover:text-pink-600">
            Home
          </a>
          <a href="#products" className="hover:text-pink-600">
            Products
          </a>
          <a href="#footer" className="hover:text-pink-600">
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg flex flex-col items-start p-4 space-y-3 md:hidden z-50">
            <a
              href="#home"
              className="hover:text-pink-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#products"
              className="hover:text-pink-600"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#footer"
              className="hover:text-pink-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-5 justify-around px-6 md:px-16 py-12 bg-gray-50">
        <div className="md:w-1/2 space-y-4 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Celebrate Diwali with{" "}
            <span className="text-pink-600">Exquisite Rangolis</span>
          </h1>
          <p className="text-gray-600">
            Discover our collection of modern and traditional rangoli products,
            crafted to bring joy and beauty to your festivities. Elevate your
            home decor this festive season.
          </p>
          <a href="https://amzn.in/d/8dBzQGY" className="mt-4 inline-block">
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600">
              Shop Now
            </button>
          </a>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="main.jpg"
            alt="Rangoli"
            loading="lazy"
            className="rounded-lg shadow-lg w-full max-w-[500px] h-auto"
          />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="px-6 md:px-16 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Festive Collection
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentProducts.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={product.img}
                alt={product.name}
                loading="lazy"
                className="rounded-md mb-4 w-full h-[250px] object-cover"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600 text-sm flex-grow">{product.desc}</p>
              <div className="mt-3 font-bold text-pink-600">
                {product.price}
              </div>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 px-2 rounded-lg w-full">
                  Buy on Amazon
                </button>
              </a>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-pink-600 text-white hover:bg-pink-700"
            }`}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-pink-600 text-white hover:bg-pink-700"
            }`}
          >
            Next
          </button>
        </div>
      </section>

      {/* Floating Social Buttons */}
      <div className="fixed right-4 bottom-6 flex flex-col space-y-3 z-50">
        <a
          href="https://wa.me/8446654379"
          className="bg-green-500 text-white p-3 rounded-full shadow hover:bg-green-600"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href="https://www.facebook.com/share/15sBtPVK26/"
          className="bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700"
        >
          <FaFacebookF size={22} />
        </a>
        <a
          href="tel:+918446654379"
          className="bg-yellow-500 text-white p-3 rounded-full shadow hover:bg-yellow-600"
        >
          <FaPhoneAlt size={22} />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 px-6 md:px-16 py-10 md:mt-12" id="footer">
        <div className="flex flex-col md:flex-row justify-center items-start gap-6">
          <div>
            <div className="text-pink-600 font-bold text-2xl mb-2 align-middle text-center">
              Kalpatru World
            </div>
            <p className="text-gray-800 md:text-lg text-center md:max-w-xl">
              Bringing culture, colors, and creativity together—our rangoli
              designs light up your celebrations with joy and elegance.
            </p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-6">
          © 2025 Kalpatru Worlds. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
