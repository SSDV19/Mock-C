import React, { useState } from 'react';
import { X, Calendar, Users, Phone, MapPin, Check, Sparkles, Utensils, Castle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PadmaKolam, BrahmaMudiKolam } from './KolamPatterns';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    packageName?: string;
    guestCount?: number;
    month?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const [eventType, setEventType] = useState('Kalyanam (Muhurtham Wedding)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Chennai');
  const [eventDate, setEventDate] = useState('2027-02-14');
  const [guests, setGuests] = useState(initialData?.guestCount || 600);
  const [requestTastingBox, setRequestTastingBox] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C59B3F', '#26532B', '#8B2226', '#FDFBF7']
      });
    } catch (err) {}
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Vanakkam Sundaram & Sons! I would like to inquire about booking our ${eventType} on ${eventDate} for ~${guests} guests in ${city}. Please send me the menu catalogue and schedule a tasting session.`
    );
    window.open(`https://wa.me/919840019240?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown-950/70 backdrop-blur-md animate-fadeIn">
      {/* Modal Double-Bezel Architecture */}
      <div className="relative w-full max-w-2xl p-2 sm:p-3 rounded-[2.5rem] bg-cream-100 border border-gold-500/50 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Inner Container */}
        <div className="relative rounded-[calc(2.5rem-0.5rem)] bg-cream-50 p-6 sm:p-8 border border-white overflow-y-auto flex-1 space-y-6">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-cream-200 text-brown-800 hover:bg-brown-900 hover:text-cream-50 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center space-y-1.5 pr-8">
                <span className="font-tamil text-sacred-kumkum text-xs font-semibold tracking-wider">
                  ஸ்ரீ சுந்தரம் &amp; சன்ஸ் • முன்பதிவு
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-brown-900 font-bold">
                  Reserve Muhurtham &amp; VIP Tasting Box
                </h3>
                <p className="text-xs text-brown-700 font-light max-w-md mx-auto">
                  Experience four generations of Cauvery Delta culinary mastery. Enter your celebration details to lock in your auspicious date.
                </p>
                {initialData?.packageName && (
                  <div className="inline-block mt-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-brown-900 font-serif text-xs font-semibold">
                    Selected Banquet: {initialData.packageName}
                  </div>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Event Type & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-brown-900 block mb-1">
                      Sacred Occasion / Event:
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-brown-900/15 bg-cream-100 text-brown-900 focus:outline-none focus:ring-2 focus:ring-gold-500 font-serif"
                    >
                      <option>Kalyanam (Muhurtham Wedding)</option>
                      <option>Nichayathartham (Engagement)</option>
                      <option>Sashtiapthapoorthi (60th Birthday)</option>
                      <option>Seemantham &amp; Valaikaappu</option>
                      <option>Satabhishekam (80th Birthday)</option>
                      <option>Grand Corporate Heritage Gala</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold text-brown-900 block mb-1">
                      Event Location / City:
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-brown-900/15 bg-cream-100 text-brown-900 focus:outline-none focus:ring-2 focus:ring-gold-500 font-serif"
                    >
                      <option>Chennai (Mylapore, T.Nagar, ECR)</option>
                      <option>Kumbakonam &amp; Thanjavur</option>
                      <option>Madurai &amp; Chettinad</option>
                      <option>Coimbatore &amp; Tiruppur</option>
                      <option>Bengaluru</option>
                      <option>Destination Nuptials (Pan-India / Int'l)</option>
                    </select>
                  </div>
                </div>

                {/* Date & Guest Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-brown-900 block mb-1">
                      Auspicious Date:
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-xl border border-brown-900/15 bg-cream-100 text-brown-900 focus:outline-none focus:ring-2 focus:ring-gold-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-brown-900 block mb-1">
                      Estimated Guest Count:
                    </label>
                    <input
                      type="number"
                      min="50"
                      max="10000"
                      step="50"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      required
                      className="w-full p-2.5 rounded-xl border border-brown-900/15 bg-cream-100 text-brown-900 focus:outline-none focus:ring-2 focus:ring-gold-500 font-mono"
                    />
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-brown-900 block mb-1">
                      Family / Host Name:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. S. Ramachandran"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-xl border border-brown-900/15 bg-cream-100 text-brown-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-brown-900 block mb-1">
                      WhatsApp Mobile Number:
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98400 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-xl border border-brown-900/15 bg-cream-100 text-brown-900 focus:outline-none focus:ring-2 focus:ring-gold-500 font-mono"
                    />
                  </div>
                </div>

                {/* Tasting Box Request Checkbox */}
                <div className="p-3.5 rounded-2xl bg-cream-200/60 border border-gold-500/30 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="tastingBox"
                    checked={requestTastingBox}
                    onChange={(e) => setRequestTastingBox(e.target.checked)}
                    className="w-4 h-4 rounded mt-0.5 text-brown-900"
                  />
                  <label htmlFor="tastingBox" className="cursor-pointer">
                    <span className="font-serif font-bold text-brown-900 block">
                      Dispatch Sundaram VIP Tasting Box (சுவை பார்வை பெட்டி)
                    </span>
                    <span className="text-[11px] text-brown-700 font-light block mt-0.5">
                      Complimentary delivery of Asoka Halwa, Elaneer Payasam, 1924 Rasam concentrate &amp; Degree Filter Kaapi sample to your residence before finalizing.
                    </span>
                  </label>
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-full bg-brown-900 text-cream-50 text-xs font-semibold tracking-wider hover:bg-brown-850 active:scale-[0.98] transition-all shadow-md border border-gold-500/30"
                  >
                    Confirm Date Reservation &rarr;
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="py-3 px-6 rounded-full bg-sacred-leaf text-cream-50 text-xs font-semibold tracking-wider hover:bg-sacred-leafLight active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Instant WhatsApp</span>
                  </button>
                </div>

              </form>
            </>
          ) : (
            /* Submission Confirmation Screen */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-sacred-leaf/15 text-sacred-leaf border-2 border-sacred-leaf flex items-center justify-center mx-auto text-2xl">
                ✓
              </div>
              <span className="font-tamil text-sacred-kumkum font-bold text-base block">
                நன்றி! உங்கள் சுப முகூர்த்த தேதி பதிவு செய்யப்பட்டது.
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-brown-900 font-bold">
                Date Reservation Requested!
              </h3>
              <p className="text-xs text-brown-700 font-light max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="font-semibold text-brown-900">{name || 'Family'}</strong>. The 4th generation Sundaram Family Concierge has received your celebration details for <span className="font-mono font-semibold">{eventDate}</span> in <span className="font-semibold">{city}</span>.
              </p>
              
              <div className="p-4 rounded-2xl bg-cream-100 border border-gold-500/30 max-w-sm mx-auto text-xs text-brown-800 space-y-1">
                <div><strong>Occasion:</strong> {eventType}</div>
                <div><strong>Guest Count:</strong> {guests} Guests</div>
                {requestTastingBox && <div><strong>VIP Tasting Box:</strong> Scheduled for Dispatch</div>}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-2.5 rounded-full bg-sacred-leaf text-white text-xs font-semibold shadow"
                >
                  Chat with Head Master Chef on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-cream-200 text-brown-800 text-xs font-medium hover:bg-cream-300"
                >
                  Return to Site
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
