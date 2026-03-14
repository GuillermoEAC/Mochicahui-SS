import React from "react";
import { Facebook, Instagram, Heart, MapPin } from "lucide-react";
import logoMochicahui from "../assets/Logo_Mochicachui.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Franja de acento */}
      <div className="h-1 bg-gradient-to-r from-mexico-pink via-mexico-yellow to-mexico-clay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Columna 1: Identidad con logo */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <img
                src={logoMochicahui}
                alt="Logo Mochicahui"
                className="w-16 h-16 rounded-full object-cover border-2 border-mexico-yellow/50 shadow-lg"
              />
              <div>
                <h3 className="text-xl font-serif font-bold leading-none">Mochicahui</h3>
                <p className="text-mexico-yellow text-xs font-bold tracking-widest uppercase mt-1">
                  El Fuerte · Sinaloa
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Un pueblo lleno de magia, tradición y cultura esperando por ti en
              el corazón de El Fuerte, Sinaloa.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#historia", label: "Historia" },
                { href: "#ruta-gastronomica", label: "Ruta Gastronómica" },
                { href: "#eventos", label: "Eventos" },
                { href: "#galeria", label: "Galería" },
                { href: "#ubicacion", label: "Cómo Llegar" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-mexico-yellow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Redes Sociales
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-white/5 hover:bg-mexico-yellow hover:text-gray-900 text-gray-400 p-3 rounded-lg transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-white/5 hover:bg-mexico-yellow hover:text-gray-900 text-gray-400 p-3 rounded-lg transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin size={14} className="text-mexico-yellow" />
              <span>Mochicahui, El Fuerte, Sinaloa, México</span>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; 2026 Turismo Municipal de Mochicahui. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={12} className="text-mexico-pink mx-0.5" /> en Mochicahui, Sinaloa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
