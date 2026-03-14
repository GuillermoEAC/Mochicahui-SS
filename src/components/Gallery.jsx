import React from "react";
import { galeriaImagenes } from "../data/puebloData";
import { Images } from "lucide-react";

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Images size={28} className="text-mexico-yellow" />
            <h2 className="text-4xl font-serif font-bold text-white">
              Rincones Mágicos
            </h2>
          </div>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            Capturando la esencia de nuestras calles, tradiciones y sabores.
          </p>
          <div className="w-20 h-0.5 bg-mexico-yellow mx-auto mt-4" />
        </div>

        {/* Grid masonry irregular */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {galeriaImagenes.map((item, i) => (
            <div
              key={i}
              className={`${item.span} overflow-hidden rounded-xl relative group cursor-pointer`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              {/* Overlay con caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                <p className="text-white text-sm font-semibold tracking-wide">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
