import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BananaLeafFeastBuilder } from './components/BananaLeafFeastBuilder';
import { EventPlanningVisualizer } from './components/EventPlanningVisualizer';
import { HeritageTimeline } from './components/HeritageTimeline';
import { MuhurthamCalculator } from './components/MuhurthamCalculator';
import { RecipeVault } from './components/RecipeVault';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Calendar } from 'lucide-react';

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState<{
    packageName?: string;
    guestCount?: number;
    month?: string;
  }>({});

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleOpenBookingWithMenu = (data: { packageName: string; guestCount: number }) => {
    setBookingInitialData({
      packageName: data.packageName,
      guestCount: data.guestCount,
    });
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingWithDate = (data: { month: string; guestCount: number; days: number }) => {
    setBookingInitialData({
      month: data.month,
      guestCount: data.guestCount,
    });
    setIsBookingModalOpen(true);
  };

  const handleOpenFeastBuilder = () => {
    const el = document.getElementById('leaf-feast');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen site-heritage-bg text-brown-900 selection:bg-cream-200 selection:text-brown-950 font-sans relative">
      {/* Top Dark Brown Patterned Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenFeastBuilder={handleOpenFeastBuilder}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section with Hanging Temple Bells, Banana Leaves, and Corner Mandalas */}
        <Hero
          onOpenFeastBuilder={handleOpenFeastBuilder}
          onOpenBooking={handleOpenBooking}
        />

        {/* 1. Interactive Banana Leaf Feast with Dish Images (No Cost Estimator) */}
        <BananaLeafFeastBuilder
          onOpenBookingWithMenu={handleOpenBookingWithMenu}
        />

        {/* 2. Royal Mandapam & Event Planning Visualizer (No Cost Estimator) */}
        <EventPlanningVisualizer />

        {/* 3. 100-Year Heritage Centennial Timeline (1924 — 2026) */}
        <HeritageTimeline />

        {/* 4. Auspicious Panchangam Muhurtham Calendar (No Cost Estimator) */}
        <MuhurthamCalculator
          onOpenBookingWithDate={handleOpenBookingWithDate}
        />

        {/* 5. 1924 Ancestral Secret Recipe Vault with Real Images */}
        <RecipeVault />

        {/* 6. Multi-Generational Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenFeastBuilder={handleOpenFeastBuilder}
      />

      {/* VIP Booking / Consultation Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialData={bookingInitialData}
      />

      {/* Quick Floating Action Button on Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={handleOpenBooking}
          className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-brown-900 text-cream-50 text-xs font-semibold shadow-2xl border border-gold-500/50 hover:bg-brown-850 active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
          <span>Reserve 2026–27 Muhurtham</span>
        </button>
      </div>
    </div>
  );
};

export default App;
