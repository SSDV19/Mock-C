import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoApplied ? subtotal * 0.15 : 0;
  const shippingThreshold = 250;
  const freeShipping = subtotal >= shippingThreshold || cart.length === 0;
  const shippingCost = freeShipping ? 0 : 25;
  const total = Math.max(0, subtotal - discount + shippingCost);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ATELIER15' || promoCode.trim().length > 0) {
      setPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#e8e5de', '#e65c00']
      });
    }, 1200);
  };

  const handleFinish = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop scrim */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
        className="relative z-10 w-full max-w-md h-full bg-[#121215] border-l border-white/10 shadow-2xl flex flex-col justify-between p-6 sm:p-8 animate-slideLeft overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h3 id="cart-heading" className="font-editorial text-2xl font-normal text-white">Your Atelier Bag</h3>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
              {cart.reduce((sum, i) => sum + i.quantity, 0)} Items Selected
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close bag"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Checkout Modal Overlay if Complete */}
        {checkoutComplete ? (
          <div className="my-auto text-center p-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 text-[#e65c00] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-editorial text-2xl text-white">Order Confirmed</h4>
            <p className="text-xs text-white/60 leading-relaxed max-w-xs mx-auto">
              Your bespoke garment has been dispatched to our Tokyo atelier cutting floor. An artisan craft tracking ticket has been sent to your email.
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-white/80">
              REFERENCE: #NOIR-{(Math.random() * 90000 + 10000).toFixed(0)}
            </div>
            <button
              onClick={handleFinish}
              className="w-full py-3 rounded-full bg-white text-black font-semibold uppercase text-xs tracking-wider hover:bg-[#eae7df] transition-colors"
            >
              Return to Atelier
            </button>
          </div>
        ) : (
          <>
            {/* Free Shipping Progress Meter */}
            <div className="pt-4 pb-2">
              <div className="flex justify-between text-[11px] font-mono text-white/60 mb-1.5">
                <span>{freeShipping ? '✓ Complimentary Global Courier' : `Add $${shippingThreshold - subtotal} for Complimentary Shipping`}</span>
                <span>{Math.min(100, Math.round((subtotal / shippingThreshold) * 100))}%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-500"
                  style={{ width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%` }}
                />
              </div>
            </div>

            {/* Scrollable Item List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <span className="font-editorial text-xl text-white/30 block mb-2">The bag is currently empty.</span>
                  <p className="text-xs text-white/50 max-w-xs mx-auto">
                    Explore our permanent architectural collection or customize your bespoke tee in the 3D lab.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-4 items-center"
                  >
                    <div className="w-20 h-24 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-editorial text-base text-white truncate font-normal">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5 text-[11px] font-mono text-white/50">
                        <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: item.color.hex }} />
                        <span>{item.color.name}</span>
                        <span>·</span>
                        <span>{item.size}</span>
                      </div>
                      {item.hasArtwork && (
                        <span className="inline-block px-2 py-0.5 mt-1 rounded bg-[#e65c00]/10 border border-[#e65c00]/30 text-[9px] font-mono uppercase text-[#e65c00]">
                          Bespoke Print
                        </span>
                      )}

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                        <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2 py-0.5 border border-white/10">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            aria-label={`Decrease quantity of ${item.title}`}
                            className="text-white/60 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono text-white px-1.5">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            aria-label={`Increase quantity of ${item.title}`}
                            className="text-white/60 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm font-semibold text-white">
                            ${item.price * item.quantity}
                          </span>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            aria-label={`Remove ${item.title} from bag`}
                            className="text-white/40 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Calculations & Checkout */}
            {cart.length > 0 && (
              <div className="pt-4 border-t border-white/10 space-y-3">
                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="VOUCHER (e.g. ATELIER15)…"
                    aria-label="Enter voucher or promo code"
                    autoComplete="off"
                    spellCheck={false}
                    className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-white/20 uppercase focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50 focus:border-white"
                  />
                  <button
                    type="submit"
                    aria-label="Apply voucher code"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-white transition-colors focus-visible:ring-1 focus-visible:ring-white/50"
                  >
                    Apply
                  </button>
                </form>

                {/* Subtotals breakdown */}
                <div className="space-y-1 text-xs font-mono text-white/60">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Atelier Privilege (15%)</span>
                      <span>-${discount.toFixed(0)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Insured Courier</span>
                    <span>{freeShipping ? 'COMPLIMENTARY' : `$${shippingCost}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold text-white pt-2 border-t border-white/10 font-sans">
                    <span className="uppercase tracking-wider text-xs">Total</span>
                    <span className="font-mono text-base">${total.toFixed(0)}</span>
                  </div>
                </div>

                {/* Checkout Trigger Button */}
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full flex items-center justify-between px-6 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#eae7df] transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active-press disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>{isCheckingOut ? 'Securing Atelier Allocation…' : 'Proceed To Checkout'}</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-white/40">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>256-Bit Encrypted Secure Checkout</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
