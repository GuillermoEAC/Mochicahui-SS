import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-serif font-bold text-mexico-pink">
              Pueblo Mágico
            </h1>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#historia"
              className="text-gray-700 hover:text-mexico-clay transition"
            >
              Historia
            </a>
            <a
              href="#eventos"
              className="text-gray-700 hover:text-mexico-clay transition"
            >
              Eventos
            </a>
            <a
              href="#galeria"
              className="text-gray-700 hover:text-mexico-clay transition"
            >
              Galería
            </a>
            <button className="bg-mexico-pink text-white px-4 py-2 rounded-md hover:bg-pink-700 transition">
              Visítanos
            </button>
          </div>

          {/* Botón Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4 shadow-lg">
          <a href="#historia" className="block py-2 text-gray-700">
            Historia
          </a>
          <a href="#eventos" className="block py-2 text-gray-700">
            Eventos
          </a>
          <a href="#galeria" className="block py-2 text-gray-700">
            Galería
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
