import React from 'react';
import { Mountain, Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Mountain className="w-6 h-6 text-white" />
            <span className="text-white font-serif font-bold text-xl">Matese Experience</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 Matese Experience. Tutti i diritti riservati.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Termini & Condizioni</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-600">
          <p>Le immagini sono a scopo illustrativo. I servizi sono forniti da partner locali selezionati.</p>
        </div>
      </div>
    </footer>
  );
};