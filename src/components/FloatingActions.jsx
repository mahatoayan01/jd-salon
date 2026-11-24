import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';

export default function FloatingActions() {
  const { cartTotalItems } = useBooking();

  return (
    <>
      {/* Floating WhatsApp and Call buttons on desktop/tablet right edge */}
      <aside aria-label="Quick contact actions" className="fixed bottom-24 right-5 z-40 hidden sm:flex flex-col gap-3">
        {/* WhatsApp Chat Button */}
        <a
          href={siteData.salonInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-emerald-500/30 group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute right-15 bg-dark-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow pointer-events-none">
            Chat with JD's Salon
          </span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${siteData.salonInfo.phoneRaw}`}
          className="w-13 h-13 rounded-full bg-dark-900 text-gold-400 border border-gold-500/40 flex items-center justify-center shadow-lg hover:scale-110 transition-transform group relative"
          aria-label="Call salon"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-15 bg-dark-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow pointer-events-none">
            Call {siteData.salonInfo.phone}
          </span>
        </a>
      </aside>

      {/* Sticky Bottom Bar for Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 shadow-lg">
        <div className="flex items-center gap-2">
          <a
            href={siteData.salonInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-700 font-medium text-xs border border-emerald-200"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            WhatsApp
          </a>
          <a
            href={`tel:${siteData.salonInfo.phoneRaw}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-100 text-stone-800 font-medium text-xs border border-stone-200"
          >
            <Phone className="w-4 h-4 text-stone-700" />
            Call
          </a>
          <Link
            to="/book"
            className="flex-2 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-dark-950 text-white font-medium text-xs shadow-sm hover:bg-gold-600 transition"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            Book Now {cartTotalItems > 0 && `(${cartTotalItems})`}
          </Link>
        </div>
      </div>
    </>
  );
}
