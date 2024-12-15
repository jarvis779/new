import React from 'react';
import './HomePage.css'; // Asegúrate de crear este archivo CSS

const AboutPage = () => {
 return (
  <>
    <div className="home-page flex flex-col items-center p-[20px]">
    <h1 className="text-gray-900 font-bold text-3xl mb-2">Sobre PharPath</h1>
    <p className="text-gray-700 text-xs mt-2">Escrito por:
      <a href="/about" className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
        ~Equipo PharPath
      </a>
    </p>
    <p className="text-base leading-8 my-5 mx-[300px]">
      Nuestra Misión
      <br/>
      Nuestra misión es transformar la forma en que se rastrean y gestionan los medicamentos, asegurando la trazabilidad y la seguridad de los productos farmacéuticos desde su origen hasta su consumo final. Utilizando la tecnología blockchain, nos esforzamos por crear un sistema inmutable y transparente que permita a los usuarios y a las autoridades sanitarias tener acceso a información precisa y actualizada sobre el estado de los medicamentos en todo momento.
      <br/>
      <br/>
      Tecnología Blockchain
      <br/>
      La tecnología blockchain es la columna vertebral de nuestro sistema. Esta tecnología permite la creación de registros digitales inmutables y seguros que pueden ser verificados por cualquier usuario. Cada bloque en la cadena contiene información sobre un medicamento, incluyendo su origen, proceso de fabricación, almacenamiento, transporte y entrega final. Esta información es accesible para todos los participantes del sistema, garantizando la transparencia y la confianza en el proceso de rastreabilidad.
      <br/>
      <br/>
      Beneficios para los Usuarios
      <ul>
        <li>Seguridad y Calidad: Al tener un registro inmutable de cada paso del proceso de un medicamento, nuestra plataforma asegura que los productos farmacéuticos cumplan con los estándares de calidad y seguridad establecidos.</li>
        <li>Transparencia: Los usuarios pueden rastrear el camino de un medicamento desde su fabricación hasta su entrega, lo que aumenta la confianza en la autenticidad y la calidad del producto.</li>
        <li>Eficiencia: La tecnología blockchain reduce la necesidad de intermediarios, lo que puede disminuir los costos y acelerar el proceso de entrega de medicamentos.</li>
      </ul>
      <br/>
      Compromiso con la Innovación
      <br/>
      Nos esforzamos por mantenernos a la vanguardia de las tecnologías emergentes y aplicarlas para mejorar la eficiencia y la seguridad de la cadena de suministro de medicamentos. Estamos comprometidos con la creación de soluciones innovadoras que no solo mejoren la rastreabilidad de los medicamentos, sino que también contribuyan a la mejora de la salud global.
    </p>
  </div>
  <div className="home-page flex flex-col items-center p-[20px]">
    <h1 className="text-gray-900 font-bold text-3xl mb-2">Apoya PharPath</h1>
    <p className="text-gray-700 text-xs mt-2">Escrito por:
      <a href="/about" className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
        ~Equipo PharPath
      </a>
    </p>
    <p className="text-base leading-8 my-5 mx-[300px]">
      PharPath es un proyecto de código abierto y depende principalmente del apoyo de la comunidad. Estaríamos muy contentos si estuvieras dispuesto a apoyar nuestro trabajo ya sea a través de contribuciones o apoyo financiero.
      <br/>
      Si deseas apoyar nuestro proyecto y ayudarnos a crecer, puedes convertirte en un patrocinador en GitHub :)
    </p>
  </div>

  </>

 );
}

export default AboutPage;