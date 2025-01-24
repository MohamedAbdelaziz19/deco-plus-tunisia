import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Info, Settings, Phone, MapPin, Mail } from 'lucide-react'; // Import Lucide React icons

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/image/Logo2.png" alt="Logo" width={150} height={50} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Liens Rapides</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/"><Home className="inline-block mr-2 w-5 h-5" /> Accueil</Link></li>
              <li><Link href="/about"><Info className="inline-block mr-2 w-5 h-5" /> À Propos</Link></li>
              <li><Link href="/services"><Settings className="inline-block mr-2 w-5 h-5" /> Services</Link></li>
              <li><Link href="/contact"><Phone className="inline-block mr-2 w-5 h-5" /> Contact</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li><Mail className="inline-block mr-2 w-5 h-5" /> decoplustunisia@gmail.com</li>
              <li><Phone className="inline-block mr-2 w-5 h-5" /> +216 99 467 869</li>
              <li><MapPin className="inline-block mr-2 w-5 h-5" /> Jammel, Monastire</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-300 pt-6">
          <p> Deco Plus Tunisie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
