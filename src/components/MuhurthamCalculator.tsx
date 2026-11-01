import React, { useState } from 'react';
import { Calendar, Sparkles, Check, Clock, Users, ShieldAlert, ArrowRight, Sun, Award, CheckCircle2 } from 'lucide-react';
import { OrnateCornerMandala, FadedMandalaWatermark, PadmaKolam, BrahmaMudiKolam } from './KolamPatterns';

interface MuhurthamCalculatorProps {
  onOpenBookingWithDate?: (dateInfo: { month: string; guestCount: number; days: number }) => void;
}

export const MuhurthamCalculator: React.FC<MuhurthamCalculatorProps> = ({ onOpenBookingWithDate }) => {
  const [selectedMonth, setSelectedMonth] = useState<string>('thai');
  const [eventDays, setEventDays] = useState<number>(2); // 1, 2, or 3 days

  const tamilMonths = [
    {
      id: 'thai',
      name: 'Thai (தை)',
      english: 'Jan 15 — Feb 14',
      auspiciousGrade: 'Highest (Peak Muhurtham)',
      specialty: 'Harvest New Rice, Sakkarai Pongal & Sugarcane Jaggery Nectar',
      muhurthamDates: ['Jan 22, 2027', 'Jan 28, 2027', 'Feb 04, 2027', 'Feb 11, 2027'],
      availability: 'Limited (3 Slots Left)'
    },
    {
      id: 'masi',
      name: 'Masi (மாசி)',
      english: 'Feb 15 — Mar 14',
      auspiciousGrade: 'Extremely Auspicious',
      specialty: 'Masi Magam Temple Feasts, Tiruvaiyaru Asoka Halwa',
      muhurthamDates: ['Feb 18, 2027', 'Feb 25, 2027', 'Mar 02, 2027', 'Mar 08, 2027'],
      availability: 'Available'
    },
    {
      id: 'panguni',
      name: 'Panguni (பங்குனி)',
      english: 'Mar 15 — Apr 13',
      auspiciousGrade: 'Celestial Nuptial Season',
      specialty: 'Panguni Uthiram Divine Feasts, Tender Coconut Elaneer Payasam',
      muhurthamDates: ['Mar 20, 2027', 'Mar 26, 2027', 'Apr 02, 2027'],
      availability: 'Available'
    },
    {
      id: 'chithirai',
      name: 'Chithirai (சித்திரை)',
      english: 'Apr 14 — May 14',
      auspiciousGrade: 'Royal Festivity',
      specialty: 'Tamil New Year, Maavadu Pickle, Neem Flower Pachadi & Panakam',
      muhurthamDates: ['Apr 19, 2027', 'Apr 26, 2027', 'May 03, 2027', 'May 10, 2027'],
      availability: 'High Demand (1 Slot Left)'
    },
    {
      id: 'vaikasi',
      name: 'Vaikasi (வைகாசி)',
      english: 'May 15 — Jun 14',
      auspiciousGrade: 'Grand Wedding Season',
      specialty: 'Vaikasi Visakam Banquets, Cooling Neer Mor & Mor Kozhambu',
      muhurthamDates: ['May 18, 2027', 'May 24, 2027', 'Jun 01, 2027', 'Jun 07, 2027'],
      availability: 'Available'
    },
    {
      id: 'aavani',
      name: 'Aavani (ஆவணி)',
      english: 'Aug 17 — Sep 16',
      auspiciousGrade: 'Sacred Muhurtham',
      specialty: 'Aavani Avittam, Royal Ghee Mysore Pak & Kovil Puliyodharai',
      muhurthamDates: ['Aug 22, 2027', 'Aug 29, 2027', 'Sep 05, 2027', 'Sep 12, 2027'],
      availability: 'Available'
    }
  ];

  const currentMonthData = tamilMonths.find(m => m.id === selectedMonth) || tamilMonths[0];

  return (
    <section id="panchangam" className="py-20 md:py-28 parchment-texture border-b border-brown-900/15 relative overflow-hidden">
      {/* Corner Mandalas matching cream and brown theme */}
      <OrnateCornerMandala position="tl" size={270} color="#7C4428" opacity={0.7} />
      <OrnateCornerMandala position="tr" size={270} color="#7C4428" opacity={0.7} />
      <OrnateCornerMandala position="bl" size={270} color="#7C4428" opacity={0.7} />
      <OrnateCornerMandala position="br" size={290} color="#7C4428" opacity={0.8} />

      {/* Background Watermark Mandala */}
      <FadedMandalaWatermark size={500} className="top-1/3 left-1/3" opacity={0.07} color="#7C4428" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sacred-kumkum/10 border border-sacred-kumkum/30 text-sacred-kumkum text-xs font-semibold uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" />
            <span>Panchangam Muhurtham Advisor</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-brown-900 font-normal">
            Auspicious Dates &amp; Ritual Calendar
          </h2>
          <p className="font-tamil text-sacred-kumkum text-base font-medium">
            சுப முகூர்த்த பஞ்சாங்க வழிகாட்டி &amp; மங்கள தினங்கள்
          </p>
          <p className="text-brown-700 text-sm sm:text-base font-light">
            In Tamil heritage, marriage celebrations are anchored in celestial alignment. Select your auspicious Tamil month to view confirmed auspicious Muhurtham dates, Vedic timings, and seasonal feast specialties.
          </p>
        </div>

        {/* Month Selector Carousel Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {tamilMonths.map((m) => {
            const isSelected = selectedMonth === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMonth(m.id)}
                className={`p-3.5 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? 'bg-brown-900 text-cream-50 border-brown-900 shadow-md ring-2 ring-gold-500/40'
                    : 'bg-cream-100/90 text-brown-850 border-brown-900/15 hover:border-gold-500'
                }`}
              >
                <div className={`font-serif text-base font-bold mb-0.5 ${isSelected ? 'text-cream-50' : 'text-brown-900'}`}>
                  {m.name}
                </div>
                <div className={`text-[10px] font-mono mb-2 ${isSelected ? 'text-gold-300' : 'text-brown-600'}`}>
                  {m.english}
                </div>
                <div className={`text-[9px] font-semibold px-2 py-0.5 rounded-full inline-block ${
                  isSelected ? 'bg-gold-500/20 text-gold-300' : 'bg-brown-900/10 text-brown-700'
                }`}>
                  {m.availability}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Month Analysis & Wedding Planning Guide (No Pricing!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Auspicious Dates & Seasonal Feast Menu (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 rounded-[2rem] bg-cream-50 border border-gold-500/30 shadow-bezel-outer space-y-6">
              
              <div className="flex items-center justify-between border-b border-brown-900/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase font-monument tracking-widest text-brown-600 block">
                    VEDIC PANCHANGAM ALIGNMENT
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brown-900">
                    {currentMonthData.name} — {currentMonthData.english}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-sacred-leaf/10 text-sacred-leaf text-xs font-semibold border border-sacred-leaf/30">
                  {currentMonthData.auspiciousGrade}
                </span>
              </div>

              {/* Verified Auspicious Muhurtham Dates */}
              <div>
                <h4 className="font-serif font-bold text-brown-900 text-sm mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold-600" />
                  <span>Prime Muhurtham Dates in this Period:</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {currentMonthData.muhurthamDates.map((date, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-cream-100 border border-gold-500/30 text-center shadow-sm"
                    >
                      <div className="font-serif font-bold text-brown-900 text-sm">
                        {date.split(',')[0]}
                      </div>
                      <div className="text-[10px] font-mono text-brown-600">
                        {date.split(',')[1]}
                      </div>
                      <div className="mt-1 text-[9px] text-sacred-kumkum font-tamil font-semibold">
                        சுப முகூர்த்தம்
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seasonal Culinary Special for this Month */}
              <div className="p-4 rounded-xl bg-cream-100 border border-brown-900/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 text-xl">
                  🍃
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brown-900 text-sm">
                    Seasonal Cauvery Feast Specialty
                  </h4>
                  <p className="text-xs text-brown-700 mt-1 font-light leading-relaxed">
                    {currentMonthData.specialty}. Our ancestral recipe manuscripts dictate seasonal adjustments so each course balances diner body constitution according to ancient Tamil Siddha wisdom.
                  </p>
                </div>
              </div>

              {/* Event Duration Selector */}
              <div>
                <div className="text-xs font-serif font-semibold text-brown-800 mb-2">
                  Select Nuptial Celebration Duration:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { days: 1, label: '1 Day', sub: 'Muhurtham Feast' },
                    { days: 2, label: '2 Days', sub: 'Nichayathartham + Wedding' },
                    { days: 3, label: '3 Days', sub: 'Vedic Wedding + Reception' }
                  ].map((item) => (
                    <button
                      key={item.days}
                      onClick={() => setEventDays(item.days)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        eventDays === item.days
                          ? 'bg-brown-900 text-cream-50 border-brown-900 shadow-sm'
                          : 'bg-cream-100 text-brown-850 border-brown-900/15 hover:border-gold-500'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                      <div className="text-[9px] opacity-75">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Traditional Timings & Muhurtham Consultation (No Pricing!) (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 rounded-[2rem] bg-cream-50 border border-brown-900/15 shadow-bezel-outer space-y-4">
              <div className="flex items-center justify-between border-b border-brown-900/10 pb-3">
                <div>
                  <span className="text-[10px] uppercase font-monument tracking-widest text-brown-600 block">
                    VEDIC HOROLOGY
                  </span>
                  <h3 className="font-serif text-lg font-bold text-brown-900">
                    Auspicious Timing Windows
                  </h3>
                </div>
                <Clock className="w-5 h-5 text-gold-600" />
              </div>

              <div className="space-y-3 text-xs text-brown-800">
                <div className="p-3 rounded-xl bg-cream-100 border border-brown-900/10 flex items-center justify-between">
                  <div>
                    <span className="font-serif font-bold text-brown-900 block">Brahma Muhurtham (பிரம்ம முகூர்த்தம்)</span>
                    <span className="text-[10px] text-brown-600">Peak spiritual prana for Mangalyadharanam</span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-sacred-kumkum">4:30 AM — 6:00 AM</span>
                </div>

                <div className="p-3 rounded-xl bg-cream-100 border border-brown-900/10 flex items-center justify-between">
                  <div>
                    <span className="font-serif font-bold text-brown-900 block">Sukra Hora (சுக்கிர ஹோரை)</span>
                    <span className="text-[10px] text-brown-600">Prosperity &amp; marital harmony blessing</span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-sacred-kumkum">6:00 AM — 7:30 AM</span>
                </div>

                <div className="p-3 rounded-xl bg-cream-100 border border-brown-900/10 flex items-center justify-between">
                  <div>
                    <span className="font-serif font-bold text-brown-900 block">Godhuli Sandhya (கோதூளி சந்தியா)</span>
                    <span className="text-[10px] text-brown-600">Auspicious sunset hour for grand reception</span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-sacred-kumkum">5:45 PM — 7:15 PM</span>
                </div>
              </div>

              {/* Consultation / Date Lock Action */}
              <div className="pt-3 border-t border-brown-900/10">
                <button
                  onClick={() => {
                    if (onOpenBookingWithDate) {
                      onOpenBookingWithDate({
                        month: currentMonthData.name,
                        guestCount: 600,
                        days: eventDays
                      });
                    }
                  }}
                  className="w-full py-3.5 rounded-full bg-brown-900 text-cream-50 text-xs font-semibold hover:bg-brown-850 transition-colors shadow-md flex items-center justify-center gap-2 border border-gold-500/40"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Lock {currentMonthData.name} Muhurtham &amp; Tasting &rarr;</span>
                </button>
              </div>
            </div>

            {/* Centennial Promise Card */}
            <div className="p-4 rounded-2xl bg-cream-100 border border-gold-500/30 flex items-center gap-3">
              <Award className="w-5 h-5 text-gold-600 shrink-0" />
              <div className="text-xs text-brown-700">
                <strong className="text-brown-900 block">Strict Vedic Calendar Adherence</strong>
                We serve your feast at the exact auspicious minute when the Mangalyam is tied, ensuring hot dishes and celestial grace.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
