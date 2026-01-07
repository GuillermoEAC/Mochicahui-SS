import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { eventos } from "../data/puebloData";

const Events = () => {
  return (
    <section id="eventos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Agenda Cultural
          </h2>
          <div className="w-24 h-1 bg-mexico-blue mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {eventos.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={event.img}
                  alt={event.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-mexico-pink shadow-sm">
                  Próximamente
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-mexico-clay font-bold mb-3 uppercase tracking-wide">
                  <Calendar size={14} className="mr-2" />
                  {event.fecha}
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                  {event.titulo}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin size={16} className="mr-2 text-mexico-blue" />
                  {event.lugar}
                </div>
                <p className="text-gray-600 mb-6 line-clamp-3">{event.desc}</p>
                <button className="w-full py-3 border border-mexico-blue text-mexico-blue font-semibold rounded-lg hover:bg-mexico-blue hover:text-white transition duration-300">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;
