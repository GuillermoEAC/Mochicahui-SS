import React from "react";
import { MapPin, Car, Train, Navigation } from "lucide-react";

const Location = () => {
  return (
    <section id="ubicacion" className="flex flex-col md:flex-row h-auto md:h-[520px]">
      {/* Panel izquierdo */}
      <div className="bg-mexico-blue w-full md:w-2/5 p-12 text-white flex flex-col justify-center gap-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Navigation size={32} className="text-mexico-yellow" />
            <h2 className="text-3xl font-serif font-bold">Como llegar</h2>
          </div>
          <p className="text-blue-200 mt-2 leading-relaxed">
            Ubicados en el corazón del norte de Sinaloa, a solo unos minutos de Los
            Mochis y El Fuerte.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="bg-white/10 rounded-lg p-2.5 flex-shrink-0">
              <MapPin size={20} className="text-mexico-yellow" />
            </div>
            <div>
              <p className="font-bold text-sm">Ubicación</p>
              <p className="text-blue-200 text-sm">Mochicahui, El Fuerte, Sinaloa</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-white/10 rounded-lg p-2.5 flex-shrink-0">
              <Car size={20} className="text-mexico-yellow" />
            </div>
            <div>
              <p className="font-bold text-sm">En automóvil</p>
              <p className="text-blue-200 text-sm">A 20 min de Los Mochis por carretera</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-white/10 rounded-lg p-2.5 flex-shrink-0">
              <Train size={20} className="text-mexico-yellow" />
            </div>
            <div>
              <p className="font-bold text-sm">Tren Chepe</p>
              <p className="text-blue-200 text-sm">Parada oficial del Ferrocarril Chihuahua-Pacífico</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="w-full md:w-3/5 h-72 md:h-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14305.77667822362!2d-108.9389885!3d25.9392685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bb7a5a887d159d%3A0x6b8764b8893708e!2s81890%20Mochicahui%2C%20Sin.!5e0!3m2!1ses!2smx!4v1709665243123!5m2!1ses!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Mochicahui"
        />
      </div>
    </section>
  );
};

export default Location;
