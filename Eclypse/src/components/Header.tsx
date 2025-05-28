import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => (
  <header className="flex justify-between items-center p-6 bg-black text-white">
    <div className="flex items-center">
      <img src="/images/Frame 8.svg" alt="Eclypse Logo" />
      <span className="text-xl font-light">Eclypse</span>
    </div>
    <nav className="flex space-x-8">
      <button
        onClick={() => setCurrentPage('home')}
        className="text-gray-300 hover:text-white transition-colors"
      >
        About Us
      </button>
      <button className="text-gray-300 hover:text-white transition-colors">
        Waitlist
      </button>
      <button
        onClick={() => setCurrentPage('checkout')}
        className="text-white border-b border-white pb-1"
      >
        Cart
      </button>
    </nav>
  </header>
);