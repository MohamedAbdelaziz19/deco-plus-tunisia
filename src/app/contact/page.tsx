'use client'
import Swal from 'sweetalert2'
import React, { FormEvent } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Contact() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "719907ab-0bf8-4a4b-b281-ee43cf3e0fbd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent uccess!",
        icon: "success"
      });
    }
  }
  

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Contactez-nous</h1>

      <p className="text-center text-xl text-gray-600 mt-4">
        Nous serions ravis de discuter avec vous. N hésitez pas à nous contacter pour toute question ou information.
      </p>

      <div className="mt-12 flex flex-col lg:flex-row items-center justify-between animate-slide-in-left">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Vous pouvez nous joindre à tout moment
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Chez Deco Plus Tunisia, nous sommes toujours disponibles pour vous aider avec vos projets de décoration.
          </p>

          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <input
              name='name'
              type="text"
              placeholder="Votre nom"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name='email'
              type="email"
              placeholder="Votre email"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name='message'
              placeholder="Votre message"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Suivez-nous sur les réseaux sociaux</h3>
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
}

export default Contact;
