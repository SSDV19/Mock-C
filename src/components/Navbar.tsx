import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PadmaKolam } from './KolamPatterns';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenFeastBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenFeastBuilder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-dark-brown-pattern">
      {/* Top micro-banner for old-money heritage lineage */}
      <div className="hidden md:flex items-center justify-between px-6 lg:px-12 py-1 border-b border-gold-500/20 text-[10px] uppercase font-mono tracking-[0.2em] text-cream-200/80 bg-brown-950/40">
        <div className="flex items-center gap-3">
          <span className="font-tamil text-gold-400 font-semibold tracking-normal">ஸ்ரீ சுந்தரம் & சன்ஸ்</span>
          <span>•</span>
          <span>ESTD. 1924 • KUMBAKONAM ROYAL NUPTIAL CATERERS</span>
        </div>
        <div className="flex items-center gap-4 text-cream-200/70">
          <span>CENTENARY HERITAGE (102+ YEARS)</span>
          <span>•</span>
          <span className="text-gold-400 font-semibold">100% WOOD-FIRE THALAIVAZHAI ILAI FEASTS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo & Centennial Heritage Crest */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brown-850 border border-gold-500/50 shadow-md flex items-center justify-center p-1 overflow-hidden group-hover:border-gold-400 transition-colors">
              <PadmaKolam size={36} className="text-gold-400 transition-transform duration-700 group-hover:rotate-45" />
              <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-sacred-kumkum font-tamil pt-0.5">
                100+
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-monument text-lg sm:text-xl font-bold tracking-[0.08em] text-cream-50 group-hover:text-gold-300 transition-colors">
                  SUNDARAM
                </span>
                <span className="text-xs uppercase font-serif tracking-widest text-gold-400 font-semibold">&amp; SONS</span>
              </div>
              <div className="flex items-center gap-2 -mt-0.5">
                <span className="font-tamil text-[11px] text-sacred-kumkum font-medium">ஸ்ரீ சுந்தரம்</span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-cream-200/80 font-medium">
                  HERITAGE CATERERS &amp; ROYAL EVENTS
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-cream-100">
            <a href="#heritage" className="hover:text-gold-400 transition-colors py-1 relative group">
              100-Year Legacy
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#leaf-feast" className="hover:text-gold-400 transition-colors py-1 relative group flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 inline-block"></span>
              Banana Leaf Feast
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#mandapam-events" className="hover:text-gold-400 transition-colors py-1 relative group">
              Mandapam &amp; Decor
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#panchangam" className="hover:text-gold-400 transition-colors py-1 relative group">
              Muhurtham Calendar
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#recipe-vault" className="hover:text-gold-400 transition-colors py-1 relative group">
              1924 Secret Recipes
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Right Side Action: Primary Muhurtham CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-gold-500 text-brown-950 text-xs sm:text-[13px] font-semibold tracking-wide shadow-md hover:bg-gold-400 active:scale-[0.98] transition-all duration-300 border border-gold-300 shrink-0"
            >
              <span className="hidden sm:inline">Reserve Muhurtham</span>
              <span className="sm:hidden text-[11px]">Reserve</span>
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brown-950 text-gold-400 group-hover:text-gold-300 flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-gold-500/30 text-cream-50 hover:bg-brown-850 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gold-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Gold Filigree Border Ribbon along bottom of header */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      {/* Mobile Flyout Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-brown-900 border-b border-gold-500/30 shadow-2xl px-6 py-8 text-cream-50">
          <div className="flex flex-col gap-4 text-base font-serif">
            <a
              href="#heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gold-500/15 hover:text-gold-400"
            >
              100-Year Heritage Journey
            </a>
            <a
              href="#leaf-feast"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gold-500/15 hover:text-gold-400 flex items-center justify-between"
            >
              <span>Banana Leaf Feast Builder (இலை சாப்பாடு)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 font-sans">28 Courses</span>
            </a>
            <a
              href="#mandapam-events"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gold-500/15 hover:text-gold-400"
            >
              Event &amp; Mandapam Planning
            </a>
            <a
              href="#panchangam"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gold-500/15 hover:text-gold-400 flex items-center justify-between"
            >
              <span>Muhurtham &amp; Panchangam Calendar</span>
              <span className="text-xs px-2 py-0.5 rounded bg-sacred-kumkum/30 text-cream-100 font-sans">Auspicious Dates</span>
            </a>
            <a
              href="#recipe-vault"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gold-500/15 hover:text-gold-400"
            >
              1924 Secret Recipe Vault
            </a>

            <div className="pt-4 flex flex-col gap-3 font-sans">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFeastBuilder();
                }}
                className="w-full py-3 rounded-full bg-sacred-leaf text-cream-50 text-sm font-medium tracking-wide shadow-md flex items-center justify-center gap-2 border border-gold-400/30"
              >
                🍃 Explore 28-Item Banquet
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-gold-500 text-brown-950 text-sm font-semibold tracking-wide shadow-md flex items-center justify-center gap-2"
              >
                Schedule VIP Tasting &amp; Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
