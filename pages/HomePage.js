import React from "react";
import "./HomePage.css"; // Asegúrate de crear este archivo CSS
import Sec2 from "../Components/Sec2";
import Sec3 from "../Components/Sec3";
import Features from "../Components/Features";

const HomePage = () => {
  return (
    <div className="home-page" class="text-gray-900">
      <header class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        <div class="flex justify-center flex-col p-5 items-center w-full drop-shadow-2xl">
          <h1 class="text-white text-9xl font-bold ">PharPhat</h1>
          <p class=" text-white text-3xl underline font-medium">
            Rastreabilidad de Medicamentos en la Cadena de Suministro
          </p>
        </div>
      </header>
      <main>
        <Sec2 />
        <Features />
        <Sec3 />
      </main>
    </div>
  );
};

export default HomePage;
