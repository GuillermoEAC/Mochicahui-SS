import React from "react";
import { gastronomia } from "../data/puebloData";

const Gastronomy = () => {
  return (
    <section className="py-20 bg-mexico-yellow/10">
      {" "}
      {/* Fondo amarillento suave */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-mexico-clay mb-12">
          Sabores de Nuestra Tierra
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gastronomia.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-mexico-pink p-1">
                <img
                  src={item.imagen}
                  alt={item.platillo}
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {item.platillo}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gastronomy;
