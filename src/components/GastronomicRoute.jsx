import React, { useState } from "react";
import { rutaGastronomica } from "../data/puebloData";
import {
  MapPin,
  Utensils,
  BookOpen,
  Map,
  Image as ImageIcon,
} from "lucide-react";

const GastronomicRoute = () => {
  const [paradaActiva, setParadaActiva] = useState(rutaGastronomica[0]);
  const [modoVista, setModoVista] = useState("foto"); // 'foto' o 'mapa'

  return (
    <section id="ruta-gastronomica" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-mexico-clay flex justify-center items-center gap-3">
            <Utensils className="text-mexico-yellow" size={32} />
            Ruta del Sabor
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Selecciona un punto en la lista para ver su historia y ubicación
            exacta.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* COLUMNA IZQUIERDA: Lista de Paradas */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-4 sticky top-24">
              <h3 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
                Puntos de Interés
              </h3>
              <div className="space-y-3">
                {rutaGastronomica.map((parada, index) => (
                  <div
                    key={parada.id}
                    onClick={() => {
                      setParadaActiva(parada);
                      setModoVista("foto"); // Resetear a foto al cambiar
                    }}
                    className={`flex items-center gap-4 cursor-pointer p-3 rounded-lg transition-all duration-200 ${
                      paradaActiva.id === parada.id
                        ? "bg-mexico-pink/10 border-l-4 border-mexico-pink"
                        : "hover:bg-gray-100 border-l-4 border-transparent"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        paradaActiva.id === parada.id
                          ? "bg-mexico-pink text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h4
                        className={`font-bold text-sm ${
                          paradaActiva.id === parada.id
                            ? "text-mexico-pink"
                            : "text-gray-700"
                        }`}
                      >
                        {parada.nombre}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Tarjeta Interactiva con Mapa Real */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 min-h-[500px] flex flex-col">
              {/* Pestañas de Navegación (Foto vs Mapa) */}
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => setModoVista("foto")}
                  className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    modoVista === "foto"
                      ? "bg-white text-mexico-pink border-b-2 border-mexico-pink"
                      : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                  }`}
                >
                  <ImageIcon size={18} /> Galería
                </button>
                <button
                  onClick={() => setModoVista("mapa")}
                  className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    modoVista === "mapa"
                      ? "bg-white text-mexico-blue border-b-2 border-mexico-blue"
                      : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                  }`}
                >
                  <Map size={18} /> Ubicación Real
                </button>
              </div>

              {/* Área de Visualización (Cambiante) */}
              <div className="h-64 md:h-80 relative bg-gray-100">
                {modoVista === "foto" ? (
                  /* VISTA FOTO */
                  <img
                    src={paradaActiva.img}
                    alt={paradaActiva.nombre}
                    className="w-full h-full object-cover animate-fade-in"
                  />
                ) : (
                  /* VISTA MAPA (IFRAME) */
                  <iframe
                    title="Mapa Gastronómico"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      paradaActiva.busquedaMapa
                    )}&output=embed`}
                    className="animate-fade-in"
                  ></iframe>
                )}
              </div>

              {/* Contenido Texto */}
              <div className="p-8 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-mexico-yellow text-xs font-bold px-2 py-1 rounded text-gray-800 uppercase">
                    {paradaActiva.tipo}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <MapPin size={12} /> {paradaActiva.coordenadas}
                  </span>
                </div>

                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  {paradaActiva.nombre}
                </h3>

                <div className="flex items-start gap-3">
                  <BookOpen
                    className="text-mexico-clay flex-shrink-0 mt-1"
                    size={20}
                  />
                  <p className="text-gray-600 leading-relaxed">
                    {paradaActiva.historia}
                  </p>
                </div>

                {modoVista === "foto" && (
                  <button
                    onClick={() => setModoVista("mapa")}
                    className="mt-6 text-mexico-blue font-bold text-sm hover:underline flex items-center gap-2 self-start"
                  >
                    Ver ubicación en el mapa →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GastronomicRoute;
