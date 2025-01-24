'use client'
import Swal from 'sweetalert2'
import React, { useState, useEffect, FormEvent } from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

const ProductDetails = () => {
  // Submit handler with validation and sanitization
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    
    // Form validation
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phoneNumber = formData.get('phone number')?.toString().trim();

    if (!name || !email || !phoneNumber) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields.',
        icon: 'error'
      });
      return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid email address.',
        icon: 'error'
      });
      return;
    }

    // Phone number validation (simple check for numbers)
    const phonePattern = /^[0-9]{8,15}$/;
    if (!phonePattern.test(phoneNumber)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid phone number.',
        icon: 'error'
      });
      return;
    }

    // Append access key (already safe but ensure no sensitive data in production)
    formData.append("access_key", "719907ab-0bf8-4a4b-b281-ee43cf3e0fbd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      if (!response.ok) {
        throw new Error('Failed to send the form data');
      }

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      } else {
        throw new Error('Failed to send the form data');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error instanceof Error ? error.message : 'Unknown error occurred.',
        icon: 'error'
      });
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const images = [
    "/image/table1.jpg", // Main Image
    "/image/table1-dt1.jpg", // Secondary Image 1
    "/image/table1-dt2.jpg", // Secondary Image 2
    "/image/table1-dt3.jpg", // Secondary Image 3
    "/image/table1-dt4.jpg", // Secondary Image 4
  ];

  // Handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      <div className="container mx-auto">
        {/* Product Details Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image Carousel */}
          <div className="relative ">
            {/* Carousel Images */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute block max-w-full h-auto transform transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={src}
                    alt={`Product Image ${index + 1}`}
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Image Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-left"
                viewBox="0 0 24 24"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right"
                viewBox="0 0 24 24"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800">Table Élégante</h1>
            <p className="mt-4 text-gray-600">
              Ajoutez une touche d élégance à votre intérieur avec cette table moderne et chic.
            </p>
            <p className="mt-4 text-2xl font-semibold text-gray-800">150 TND</p>
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                <ShoppingCart className="w-5 h-5 inline mr-2" /> Ajouter au panier
              </button>
              <button
                className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
                onClick={() => setShowOrderForm(!showOrderForm)}
              >
                <ShoppingCart className="w-5 h-5 inline mr-2" /> Commander
              </button>
            </div>

            {showOrderForm && (
              <div className="mt-6 p-6 bg-white rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Formulaire de Commande</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input type="text" name='name' placeholder="Nom complet" className="w-full px-4 py-2 border rounded-lg" />
                  <input type="email" name='email' placeholder="Adresse e-mail" className="w-full px-4 py-2 border rounded-lg" />
                  <input type="tel" name='phone number' placeholder="Numéro de téléphone" className="w-full px-4 py-2 border rounded-lg" />
                  <select name="state" className="w-full px-4 py-2 border rounded-lg">
                    <option value="">Choisissez une région</option>
                    <option value="Tunis">Tunis</option>
                    <option value="Sfax">Sfax</option>
                    <option value="Sousse">Sousse</option>
                    <option value="Nabeul">Nabeul</option>
                  </select>
                  <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg">Valider la commande</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
