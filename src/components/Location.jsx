import React from "react";
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section className="py-0 flex flex-col md:flex-row h-[500px]">
      {/* Lado Izquierdo: Información */}
      <div className="bg-mexico-blue w-full md:w-1/3 p-12 text-white flex flex-col justify-center">
        <MapPin size={48} className="mb-4 text-mexico-yellow" />
        <h2 className="text-3xl font-serif font-bold mb-6">¿Cómo llegar?</h2>
        <p className="text-lg mb-8 text-blue-100">
          Ubicados en el corazón del norte de Sinaloa, a solo unos minutos de
          Los Mochis y El Fuerte.
        </p>
        <div className="space-y-4">
          <p className="font-bold">📍 Mochicahui, El Fuerte, Sinaloa.</p>
          <p>🚗 A 20 min de Los Mochis.</p>
          <p>🚂 Paso del tren Chepe.</p>
        </div>
      </div>

      {/* Lado Derecho: Mapa (Iframe de Google Maps) */}
      <div className="w-full md:w-2/3 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14305.77667822362!2d-108.9389885!3d25.9392685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bb7a5a887d159d%3A0x6b8764b8893708e!2s81890%20Mochicahui%2C%20Sin.!5e0!3m2!1ses!2smx!4v1709665243123!5m2!1ses!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
