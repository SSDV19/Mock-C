import React from 'react';

interface Review {
  id: string;
  quote: string;
  author: string;
  role: string;
  publication: string;
  city: string;
}

const REVIEWS: Review[] = [
  {
    id: 'rev-01',
    quote: "Atelier Noir treats the humble cotton T-shirt not as an afterthought, but as a severe piece of modernist sculpture.",
    author: "Hiroshi Takahashi",
    role: "Senior Fashion Critic",
    publication: "Tokyo Design Journal",
    city: "Tokyo"
  },
  {
    id: 'rev-02',
    quote: "The 340 GSM weight holds an architectural drape unlike anything from mainstream luxury houses. It simply refuses to sag.",
    author: "Elena Rostova",
    role: "Creative Director",
    publication: "Vestiaire Review",
    city: "Paris"
  },
  {
    id: 'rev-03',
    quote: "The online bespoke lab allows tactile customization with the poise and restraint of an haute couture studio.",
    author: "Marcus Vance",
    role: "Apparel Editor",
    publication: "Monocle Style",
    city: "London"
  }
];

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#e65c00] block mb-2">
            Critical Reception / Archive
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
            Editorial Perspectives
          </h2>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-white/40">
          Independent Critiques · 2024–2026
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="p-8 rounded-[2.5rem] bg-[#121215] border border-white/10 double-bezel flex flex-col justify-between"
          >
            <div>
              <span className="font-editorial text-4xl text-white/20 select-none block mb-4">“</span>
              <p className="font-editorial text-lg sm:text-xl font-light text-white leading-relaxed mb-6">
                {rev.quote}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  {rev.author}
                </h4>
                <p className="text-[10px] font-mono text-white/50 mt-0.5">
                  {rev.role} · {rev.publication}
                </p>
              </div>
              <span className="text-[10px] font-mono text-white/40 uppercase">
                {rev.city}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
