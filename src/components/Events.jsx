import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { eventos } from "../data/puebloData";

const Events = () => {
  return (
    <section
      id="eventos"
      className="py-24 relative"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z' fill='none' stroke='%23005A9C' stroke-width='0.4' stroke-opacity='0.12'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Calendar size={28} className="text-mexico-blue" />
            <h2 className="text-4xl font-serif font-bold text-gray-900">
              Agenda Cultural
            </h2>
          </div>
          <div className="w-20 h-0.5 bg-mexico-blue mx-auto mt-4" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Vive Mochicahui a través de sus fiestas, tradiciones y celebraciones
            que unen a la comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventos.map((event) => (
            <article
              key={event.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Imagen */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={event.img}
                  alt={event.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-mexico-clay text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Próximamente
                </div>
              </div>

              {/* Contenido */}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-mexico-clay font-bold uppercase tracking-widest mb-3">
                  <Clock size={13} />
                  {event.fecha}
                </div>

                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-mexico-pink transition-colors">
                  {event.titulo}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <MapPin size={14} className="text-mexico-blue flex-shrink-0" />
                  {event.lugar}
                </div>

                <p className="text-gray-600 leading-relaxed flex-1">{event.desc}</p>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="w-full py-3 rounded-xl border-2 border-mexico-blue text-mexico-blue font-bold text-sm hover:bg-mexico-blue hover:text-white transition-all duration-300">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
