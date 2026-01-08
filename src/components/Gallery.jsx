import React from "react";

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl font-serif font-bold text-gray-900">
          Rincones Mágicos
        </h2>
        <p className="text-gray-500 mt-2">
          Capturando la esencia de nuestras calles.
        </p>
      </div>

      {/* Grid irregular para efecto moderno */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 h-[600px]">
        {/* Foto Grande Izquierda */}
        <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1518659685715-462152865b20?q=80&w=2070"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            alt="Iglesia"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition"></div>
        </div>

        {/* Fotos Pequeñas */}
        <div className="col-span-1 row-span-1 overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1605648873993-9c878985161f?q=80&w=2070"
            className="w-full h-full object-cover hover:scale-110 transition duration-500"
            alt="Detalle"
          />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1585640369877-3e4b78759367?q=80&w=1974"
            className="w-full h-full object-cover hover:scale-110 transition duration-500"
            alt="Calle"
          />
        </div>

        {/* Foto Ancha Abajo */}
        <div className="col-span-2 row-span-1 overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1566415273775-4c077b94b0a4?q=80&w=2071"
            className="w-full h-full object-cover hover:scale-110 transition duration-500"
            alt="Paisaje"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
