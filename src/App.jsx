import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import History from "./components/History";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Gastronomy from "./components/Gastronomy";
import GastronomicRoute from "./components/GastronomicRoute";

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <History />
        <GastronomicRoute />
        <Gastronomy />
        <Events />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
