import React from "react";
import { historia } from "../data/puebloData";
import { ScrollText, Landmark } from "lucide-react";

const History = () => {
  return (
    <section
      id="historia"
      className="py-24 relative"
      style={{
        backgroundColor: "#fafaf9",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='1.2' fill='%23B54B26' fill-opacity='0.12'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 bg-mexico-clay" />
              <span className="text-mexico-clay font-bold uppercase tracking-widest text-xs">
                Nuestra Historia
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              {historia.titulo}
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Landmark size={22} className="text-mexico-pink flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  {historia.texto1}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <ScrollText size={22} className="text-mexico-blue flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  {historia.texto2}
                </p>
              </div>
            </div>

            {/* Datos rápidos */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              {[
                { label: "Fundación", value: "1605" },
                { label: "Años de historia", value: "+400" },
                { label: "Cultura", value: "Yoreme" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-3xl font-serif font-bold text-mexico-clay">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Imágenes apiladas */}
          <div className="relative order-1 lg:order-2 h-[500px]">
            {/* Imagen principal */}
            <div className="absolute right-0 top-0 w-[80%] h-[85%] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={historia.imagenPrincipal}
                alt="Vista de Mochicahui"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Imagen secundaria superpuesta */}
            <div className="absolute left-0 bottom-0 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-50">
              <img
                src={historia.imagenSecundaria}
                alt="Tradición Yoreme"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Tarjeta de acento */}
            <div className="absolute left-[52%] bottom-[15%] bg-mexico-clay text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold z-10">
              Pueblo Mágico
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
