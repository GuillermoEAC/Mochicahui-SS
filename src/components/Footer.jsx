import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-mexico-pink">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">
          Mochicahui, El Fuerte
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Un pueblo lleno de magia, tradición y cultura esperando por ti.
        </p>
        <div className="flex justify-center gap-6 mb-8 text-sm font-semibold tracking-widest uppercase">
          <a href="#" className="hover:text-mexico-yellow transition">
            Facebook
          </a>
          <a href="#" className="hover:text-mexico-yellow transition">
            Instagram
          </a>
          {/* <a href="#" className="hover:text-mexico-yellow transition">
            Twitter
          </a> */}
        </div>
        <p className="text-xs text-gray-600">
          &copy; 2025 Turismo Municipal. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
