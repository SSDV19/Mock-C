import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart, Award, ShieldCheck } from 'lucide-react';
import { KolamBorder, PadmaKolam, CentennialKolamBadge } from './KolamPatterns';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenFeastBuilder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenFeastBuilder }) => {
  return (
    <footer className="bg-brown-900 text-cream-100 relative overflow-hidden border-t-2 border-gold-500/30">
      
      {/* Decorative Kolam Frieze */}
      <div className="pt-8">
        <KolamBorder className="text-gold-500/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-14">
          
          {/* Brand & Centennial Heritage Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-cream-50/10 border border-gold-500/50 flex items-center justify-center p-1">
                <PadmaKolam size={36} className="text-gold-400" />
              </div>
              <div>
                <h3 className="font-monument text-xl font-bold tracking-[0.08em] text-cream-50">
                  SUNDARAM &amp; SONS
                </h3>
                <span className="font-tamil text-sacred-kumkum font-semibold text-xs block">
                  ஸ்ரீ சுந்தரம் &amp; சன்ஸ் — நூற்றாண்டு பாரம்பரியம்
                </span>
              </div>
            </div>

            <p className="text-xs text-cream-300/80 font-light leading-relaxed">
              Serving the royal weddings, temple festivals, and multi-generational family milestones of South India since 1924. Dedicated to preserving authentic wood-fired Cauvery Delta culinary dharma and temple mandapam architecture.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-[11px] font-mono">
                100+ YEARS (1924 — 2026)
              </span>
              <span className="text-xs font-tamil text-cream-300">
                சாத்வீக தூய்மை
              </span>
            </div>
          </div>

          {/* Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              The Banquets
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/90 font-light">
              <li>
                <button onClick={onOpenFeastBuilder} className="hover:text-gold-300 transition-colors text-left">
                  Banana Leaf Simulator
                </button>
              </li>
              <li>
                <a href="#leaf-feast" className="hover:text-gold-300 transition-colors">
                  Shatabdi 28-Course Feast
                </a>
              </li>
              <li>
                <a href="#leaf-feast" className="hover:text-gold-300 transition-colors">
                  Chettinad Raja Virundhu
                </a>
              </li>
              <li>
                <a href="#leaf-feast" className="hover:text-gold-300 transition-colors">
                  Satvik Temple Banquet
                </a>
              </li>
              <li>
                <a href="#recipe-vault" className="hover:text-gold-300 transition-colors">
                  1924 Secret Rasam Podi
                </a>
              </li>
            </ul>
          </div>

          {/* Event Planning & Mandapams (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Event Planning
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/90 font-light">
              <li>
                <a href="#mandapam-events" className="hover:text-gold-300 transition-colors">
                  Chola Temple Mandapam
                </a>
              </li>
              <li>
                <a href="#mandapam-events" className="hover:text-gold-300 transition-colors">
                  Chettinad Palace Staging
                </a>
              </li>
              <li>
                <a href="#mandapam-events" className="hover:text-gold-300 transition-colors">
                  Lotus Water Pavilion
                </a>
              </li>
              <li>
                <a href="#panchangam" className="hover:text-gold-300 transition-colors">
                  Panchangam Muhurtham Calc
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-gold-300 transition-colors">
                  100-Year Family History
                </a>
              </li>
            </ul>
          </div>

          {/* Heritage Regional Offices (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Regional Sanctums &amp; Concierge
            </h4>
            
            <div className="space-y-2 text-xs text-cream-300/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cream-100 block">Kumbakonam Ancestral Hearth:</strong>
                  <span>14/2 Sannadhi Street, Near Sarangapani Temple, Kumbakonam 612001</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cream-100 block">Madras (Chennai) Banquet Lounge:</strong>
                  <span>78 North Mada Street, Mylapore, Chennai 600004</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-cream-200">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-mono font-semibold">+91 98400 19240 / +91 44 2464 1924</span>
              </div>

              <div className="flex items-center gap-2.5 text-cream-200">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-mono">heritage@sundaramcaterers1924.com</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-full bg-cream-50 text-brown-900 font-semibold text-xs hover:bg-gold-300 transition-colors shadow-md"
              >
                Schedule Tasting &amp; Reservation &rarr;
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Accreditation & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400/80">
          <div className="flex items-center gap-2">
            <span className="font-tamil text-sacred-kumkum font-bold">சுபம்</span>
            <span>&copy; 1924 — 2026 Sundaram &amp; Sons Heritage Catering &amp; Events Pvt. Ltd. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>ISO 22000 Certified Kitchens</span>
            <span>•</span>
            <span>100% Compostable Plantain Service</span>
            <span>•</span>
            <span>A2 Cow Ghee Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
