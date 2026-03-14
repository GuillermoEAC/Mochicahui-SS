import React from "react";
import { infoPueblo } from "../data/puebloData";
import imgPrincipal from "../assets/Mochicahui_Principal.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={imgPrincipal}
          alt="Vista principal de Mochicahui"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradiente oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Contenido central */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Etiqueta superior */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-mexico-yellow text-xs font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-mexico-yellow animate-pulse" />
          Pueblo Mágico · El Fuerte, Sinaloa
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl leading-none">
          {infoPueblo.nombre}
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          {infoPueblo.slogan}
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#ruta-gastronomica"
            className="bg-mexico-yellow text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-2xl text-base"
          >
            Descubrir Gastronomía
          </a>
          <a
            href="#historia"
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 text-base"
          >
            Nuestra Historia
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#historia"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown size={36} />
      </a>
    </div>
  );
};

export default Hero;
