import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Star,
  MessageCircle
} from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-white/80 pt-16 pb-28 md:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & L'Oréal Partnership */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-dark-900 border border-gold-500 flex items-center justify-center text-gold-400 font-serif font-bold text-lg">
                JD
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-wide">
                JD's Unisex Salon
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              {siteData.salonInfo.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gold-300">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              {siteData.salonInfo.partnership}
            </div>
            <div className="flex items-center gap-2 pt-2">
              <div className="flex text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-gold-400" />
                ))}
              </div>
              <span className="text-xs text-white/90 font-medium">
                {siteData.salonInfo.rating} / 5 ({siteData.salonInfo.reviewCount}+ Google & Directory Reviews)
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-serif text-lg font-semibold tracking-wide border-b border-gold-500/40 pb-2 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-gold-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition">Services & Rate Card</Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-gold-400 transition">Location & Directions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-400 transition">Contact & Inquiries</Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-gold-400 transition">Book Appointment</Link>
              </li>
              <li>
                <Link to="/owner-login" className="text-stone-400 hover:text-gold-400 transition text-xs">
                  Owner Dashboard (Demo)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Schedule */}
          <div className="space-y-3">
            <h4 className="text-white font-serif text-lg font-semibold tracking-wide border-b border-gold-500/40 pb-2 inline-block">
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm text-stone-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Monday – Sunday</p>
                  <p className="text-xs text-stone-400">10:00 AM – 10:00 PM</p>
                  <p className="text-[11px] text-emerald-400 font-medium mt-1">Open All 7 Days</p>
                </div>
              </div>
              <p className="text-xs text-stone-400 pt-2 leading-relaxed">
                Prior booking recommended for specialized treatments (Balayage, Keratin, Bridal).
              </p>
            </div>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-serif text-lg font-semibold tracking-wide border-b border-gold-500/40 pb-2 inline-block">
              Visit Us in Bhoiwada
            </h4>
            <div className="space-y-3 text-sm text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  {siteData.salonInfo.address.fullAddress}
                  <span className="block text-gold-300 mt-0.5">({siteData.salonInfo.landmark})</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${siteData.salonInfo.phoneRaw}`} className="hover:text-gold-400 text-xs">
                  {siteData.salonInfo.phone}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={siteData.salonInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-600/20 text-gold-300 border border-gold-500/30 text-xs hover:bg-gold-600/30 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            © {currentYear} JD's Unisex Salon Parel. All rights reserved.
          </p>
          <div className="bg-amber-950/40 border border-amber-600/30 px-3 py-1 rounded text-amber-300/90 text-center">
            ⚠️ Demo website & booking portal – online payment is a simulation, no real money is charged.
          </div>
        </div>
      </div>
    </footer>
  );
}
