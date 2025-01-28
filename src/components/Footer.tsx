import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-4">neoframe</div>
            <p className="text-gray-400 text-sm">
              Ihre Digitalagentur in Zürich für moderne Webentwicklung und kreatives Design.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/dienstleistungen" className="hover:text-primary transition-colors">
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <Link to="/projekte" className="hover:text-primary transition-colors">
                  Projekte
                </Link>
              </li>
              <li>
                <Link to="/neotype" className="hover:text-primary transition-colors">
                  Neotype
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>8106 Adlikon bei Regensdorf</li>
              <li>kontakt@neoframe.ch</li>
              <li>+41 76 415 29 05</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Mehr</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/partner" className="hover:text-primary transition-colors">
                  Partnerprogramm
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="hover:text-primary transition-colors">
                  Über uns
                </Link>
              </li>
              <li className="flex space-x-4 pt-4">
                <a href="https://www.facebook.com/share/18fdyoMGMJ/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/neoframe.ch" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/neoframe-webdesign" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-gray-400 text-sm">
          Webdesign Agentur Zürich © {new Date().getFullYear()} neoframe. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}