import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Scissors, 
  ShoppingBag, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ShieldCheck, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import OpenStatusBadge from './OpenStatusBadge';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartTotalItems, isOwnerAuthenticated } = useBooking();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services & Pricing', path: '/services' },
    { label: 'Location & Hours', path: '/location' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all shadow-xs">
      {/* Top micro bar */}
      <div className="bg-dark-950 text-white/90 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              {siteData.salonInfo.partnership}
            </span>
            <span className="text-white/60">•</span>
            <span className="flex items-center gap-1 text-white/80">
              <MapPin className="w-3 h-3 text-gold-400" />
              Bhoiwada, Parel, Mumbai (Opp. Jain Mandir)
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <OpenStatusBadge />
            <a
              href={`tel:${siteData.salonInfo.phoneRaw}`}
              className="flex items-center gap-1 text-white/90 hover:text-gold-400 transition"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              {siteData.salonInfo.phone}
            </a>
            <Link
              to={isOwnerAuthenticated ? "/owner" : "/owner-login"}
              className="text-white/60 hover:text-gold-400 transition ml-2 border-l border-white/20 pl-3"
            >
              Owner Portal {isOwnerAuthenticated && '✓'}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-dark-900 border-2 border-gold-500 flex items-center justify-center text-gold-400 font-serif font-bold text-xl shadow-inner group-hover:scale-105 transition-transform">
              JD
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-dark-950 block leading-tight">
                JD's Unisex Salon
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-stone-500 block">
                Hair • Beauty • Nails | Parel
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold-600 relative py-1 ${
                  isActive(link.path)
                    ? 'text-gold-600 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold-500'
                    : 'text-stone-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Booking Cart Icon */}
            <Link
              to="/book"
              className="relative p-2.5 rounded-full text-stone-700 hover:text-gold-600 hover:bg-gold-50 transition"
              title="View Selected Services"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartTotalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-fade-in">
                  {cartTotalItems}
                </span>
              )}
            </Link>

            {/* Book Now Button */}
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-950 text-white font-medium text-sm hover:bg-gold-600 transition shadow-sm hover:shadow"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu & Cart Icon */}
          <div className="flex items-center space-x-3 md:hidden">
            <Link
              to="/book"
              className="relative p-2 text-stone-800"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartTotalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartTotalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:text-gold-600 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          <div className="pb-2 border-b border-stone-200/60 flex items-center justify-between">
            <OpenStatusBadge />
            <span className="text-xs text-stone-500">Parel, Mumbai</span>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive(link.path)
                  ? 'bg-gold-50 text-gold-700 font-semibold'
                  : 'text-stone-800 hover:bg-stone-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-stone-200 space-y-2">
            <Link
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-950 text-white font-medium text-sm hover:bg-gold-600 transition"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              Book Appointment {cartTotalItems > 0 && `(${cartTotalItems})`}
            </Link>
            <Link
              to={isOwnerAuthenticated ? "/owner" : "/owner-login"}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-2 text-xs text-stone-500 hover:text-gold-600"
            >
              Owner Portal {isOwnerAuthenticated ? '(Signed In)' : ''}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
