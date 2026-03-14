import React from "react";
import { gastronomia } from "../data/puebloData";
import { Utensils, ChefHat } from "lucide-react";

const Gastronomy = () => {
  return (
    <section className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-mexico-yellow rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-mexico-pink rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <ChefHat size={28} className="text-mexico-yellow" />
            <h2 className="text-4xl font-serif font-bold text-white">
              Sabores de Nuestra Tierra
            </h2>
          </div>
          <div className="w-20 h-0.5 bg-mexico-yellow mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Platillos que cuentan la historia de nuestra gente y nuestra tierra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gastronomia.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-mexico-yellow/50 transition-all duration-500"
            >
              {/* Imagen */}
              <div className="h-64 overflow-hidden">
                <img
                  src={item.imagen}
                  alt={item.platillo}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Overlay de acento */}
              <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />

              {/* Ícono flotante */}
              <div className="absolute top-52 left-6 bg-mexico-yellow text-gray-900 p-2 rounded-full">
                <Utensils size={16} />
              </div>

              {/* Contenido */}
              <div className="p-6 pt-5">
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  {item.platillo}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gastronomy;
