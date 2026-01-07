import React from "react";
import { historia } from "../data/puebloData";

const History = () => {
  return (
    <section id="historia" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-16 h-1 bg-mexico-pink"></div>
            <h2 className="text-4xl font-serif font-bold text-gray-900">
              {historia.titulo}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {historia.texto1}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {historia.texto2}
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-4 left-4 w-full h-full border-4 border-mexico-clay rounded-lg z-0"></div>
            <img
              src={historia.imagenUrl}
              alt="Historia del pueblo"
              className="relative z-10 rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default History;
