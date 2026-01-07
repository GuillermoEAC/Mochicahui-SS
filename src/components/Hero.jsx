import React from "react";
import { infoPueblo } from "../data/puebloData";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="text-mexico-yellow font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-2 block animate-pulse">
          Bienvenidos a
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-xl">
          {infoPueblo.nombre}
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mb-10 font-light">
          {infoPueblo.slogan}
        </p>
        <a
          href="#eventos"
          className="bg-mexico-yellow text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition transform hover:scale-105 shadow-xl border-2 border-transparent hover:border-white"
        >
          Descubrir Agenda
        </a>
      </div>
    </div>
  );
};
export default Hero;
