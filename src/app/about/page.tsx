import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">À propos de Deco Plus Tunisia</h1>

      <p className="text-center text-xl text-gray-600 mt-4">
        Nous offrons des produits de décoration de haute qualité pour rendre votre maison élégante et fonctionnelle.
      </p>

      <div className="mt-12 flex flex-col lg:flex-row items-center justify-between animate-slide-in-left">
        <div className="w-full lg:w-1/2">
          <Image src="/image/Logo2.png" alt="Décoration" width={300} height={300} className="rounded-lg shadow-xl w-full hover:scale-105 transition-all duration-300" />
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Une touche de design dans chaque coin de votre maison
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Chez Deco Plus Tunisia, nous croyons que chaque détail compte.
          </p>
          
          <div className="flex justify-center lg:justify-start space-x-6">
            <a href="https://www.facebook.com" className="text-gray-600 hover:text-blue-600 transform hover:scale-125 transition duration-300">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" className="text-gray-600 hover:text-pink-600 transform hover:scale-125 transition duration-300">
              <FaInstagram className="w-6 h-6" />
            </a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
