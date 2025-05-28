import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ImageGrid } from '../components/ImageGrid';
import { ProductSection } from '../components/ProductSection';
import { CustomerReview } from '../components/CustomerReview';
import { Footer } from '../components/Footer';
import { Page } from '../types';

interface HomePageProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  images: string[];
}

export const HomePage: React.FC<HomePageProps> = ({ 
  currentPage, 
  setCurrentPage, 
  images 
}) => (
  <div className="bg-black text-white min-h-screen">
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
    <HeroSection />
    <ImageGrid images={images} />
    <ProductSection setCurrentPage={setCurrentPage} />
    <CustomerReview />
    <Footer />
  </div>
);
