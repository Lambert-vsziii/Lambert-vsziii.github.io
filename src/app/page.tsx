'use client';

import { useState } from 'react';
import LeftSidebar from "@/components/LeftSidebar";
import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";
import Header from '@/components/Header';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row">
        <LeftSidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <div className="flex-1 flex flex-col w-full min-w-0">
          <Header onMenuOpen={() => setIsMenuOpen(true)} />
          <div className="flex flex-col lg:flex-row flex-1">
            <MainContent />
            <RightSidebar />
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}
