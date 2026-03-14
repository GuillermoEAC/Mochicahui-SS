import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoMochicahui from "../assets/Logo_Mochicachui.png";

const navLinks = [
  { href: "#historia", label: "Historia" },
  { href: "#ruta-gastronomica", label: "Gastronomía" },
  { href: "#eventos", label: "Eventos" },
  { href: "#galeria", label: "Galería" },
  { href: "#ubicacion", label: "Ubicación" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-gray-900/95 backdrop-blur-md shadow-xl"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo con imagen */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={logoMochicahui}
              alt="Logo Mochicahui"
              className="w-11 h-11 rounded-full object-cover border-2 border-mexico-yellow/60 group-hover:border-mexico-yellow transition-all duration-300 shadow-lg"
            />
            <div className="leading-tight">
              <span className="block text-white font-serif font-bold text-lg tracking-wide leading-none">
                Mochicahui
              </span>
              <span className="block text-mexico-yellow text-[10px] font-bold tracking-[0.15em] uppercase">
                El Fuerte · Sinaloa
              </span>
            </div>
          </a>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-mexico-yellow font-medium text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mexico-yellow group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#ubicacion"
              className="bg-mexico-yellow text-gray-900 font-bold px-5 py-2 rounded-full text-sm hover:bg-yellow-400 transition-transform hover:scale-105 shadow-md"
            >
              Visítanos
            </a>
          </div>

          {/* Botón Móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-md pb-6 px-6 space-y-1 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-200 hover:text-mexico-yellow font-medium border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
