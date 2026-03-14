import React, { useState } from "react";
import { rutaGastronomica } from "../data/puebloData";
import {
  MapPin,
  Utensils,
  BookOpen,
  Map,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const GastronomicRoute = () => {
  const [paradaActiva, setParadaActiva] = useState(rutaGastronomica[0]);
  const [modoVista, setModoVista] = useState("foto");
  const [fotoIndex, setFotoIndex] = useState(0);

  const handleSelectParada = (parada) => {
    setParadaActiva(parada);
    setModoVista("foto");
    setFotoIndex(0);
  };

  const galeria = paradaActiva.galeria || [paradaActiva.img];
  const totalFotos = galeria.length;

  const irAnterior = () =>
    setFotoIndex((prev) => (prev - 1 + totalFotos) % totalFotos);
  const irSiguiente = () =>
    setFotoIndex((prev) => (prev + 1) % totalFotos);

  return (
    <section
      id="ruta-gastronomica"
      className="py-20 relative"
      style={{
        backgroundColor: "#fff7ed",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cline x1='0' y1='32' x2='32' y2='0' stroke='%23B54B26' stroke-width='0.5' stroke-opacity='0.1'/%3E%3Cline x1='-16' y1='32' x2='16' y2='0' stroke='%23B54B26' stroke-width='0.5' stroke-opacity='0.1'/%3E%3Cline x1='16' y1='32' x2='48' y2='0' stroke='%23B54B26' stroke-width='0.5' stroke-opacity='0.1'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-mexico-clay flex justify-center items-center gap-3">
            <Utensils className="text-mexico-yellow" size={32} />
            Ruta del Sabor
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Selecciona un punto en la lista para ver sus fotos y ubicación exacta.
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
                    onClick={() => handleSelectParada(parada)}
                    className={`flex items-center gap-4 cursor-pointer p-3 rounded-lg transition-all duration-200 ${paradaActiva.id === parada.id
                      ? "bg-mexico-pink/10 border-l-4 border-mexico-pink"
                      : "hover:bg-gray-100 border-l-4 border-transparent"
                      }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${paradaActiva.id === parada.id
                        ? "bg-mexico-pink text-white"
                        : "bg-gray-200 text-gray-500"
                        }`}
                    >
                      {index + 1}
                    </div>
                    <div className="min-w-0">
                      <h4
                        className={`font-bold text-sm truncate ${paradaActiva.id === parada.id
                          ? "text-mexico-pink"
                          : "text-gray-700"
                          }`}
                      >
                        {parada.nombre}
                      </h4>
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        {parada.tipo}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Tarjeta Interactiva */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 min-h-[500px] flex flex-col">
              {/* Pestañas */}
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => setModoVista("foto")}
                  className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${modoVista === "foto"
                    ? "bg-white text-mexico-pink border-b-2 border-mexico-pink"
                    : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                    }`}
                >
                  <ImageIcon size={18} /> Galería
                </button>
                <button
                  onClick={() => setModoVista("mapa")}
                  className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${modoVista === "mapa"
                    ? "bg-white text-mexico-blue border-b-2 border-mexico-blue"
                    : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                    }`}
                >
                  <Map size={18} /> Ubicación Real
                </button>
              </div>

              {/* Área de Visualización */}
              <div className="h-64 md:h-80 relative bg-gray-100">
                {modoVista === "foto" ? (
                  <>
                    <img
                      key={`${paradaActiva.id}-${fotoIndex}`}
                      src={galeria[fotoIndex]}
                      alt={`${paradaActiva.nombre} - foto ${fotoIndex + 1}`}
                      className="w-full h-full object-cover animate-fade-in"
                    />

                    {/* Flechas de navegación (solo si hay más de 1 foto) */}
                    {totalFotos > 1 && (
                      <>
                        <button
                          onClick={irAnterior}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                          aria-label="Foto anterior"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={irSiguiente}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                          aria-label="Foto siguiente"
                        >
                          <ChevronRight size={20} />
                        </button>

                        {/* Contador y puntos */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                          {galeria.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setFotoIndex(i)}
                              className={`w-2 h-2 rounded-full transition-all ${i === fotoIndex
                                ? "bg-white scale-125"
                                : "bg-white/50"
                                }`}
                              aria-label={`Ir a foto ${i + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
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

              {/* Thumbnails de la galería */}
              {modoVista === "foto" && totalFotos > 1 && (
                <div className="flex gap-2 px-6 pt-4 pb-1 overflow-x-auto">
                  {galeria.map((foto, i) => (
                    <button
                      key={i}
                      onClick={() => setFotoIndex(i)}
                      className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${i === fotoIndex
                        ? "ring-2 ring-mexico-pink ring-offset-2 opacity-100"
                        : "opacity-60 hover:opacity-90"
                        }`}
                    >
                      <img
                        src={foto}
                        alt={`Miniatura ${i + 1}`}
                        className="w-16 h-12 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

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
