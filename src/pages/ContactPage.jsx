import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Mail,
  Sparkles
} from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'Hair Treatment (Balayage / Keratin)',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 text-gold-800 text-xs font-semibold border border-gold-200">
          <MessageCircle className="w-3.5 h-3.5 text-gold-600" />
          Get in Touch
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-dark-950">
          Contact JD's Unisex Salon
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
          Have a question regarding bridal bookings, balayage consultation, or appointment slots? Reach out directly via WhatsApp or phone.
        </p>
      </section>

      {/* Main Grid: Cards + Inquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Action Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-dark-950">
                  Instant WhatsApp Chat
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Fastest response for chair availability, price inquiries, and consultations.
                </p>
              </div>
              <a
                href={siteData.salonInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition shadow-xs"
              >
                Message on WhatsApp ({siteData.salonInfo.whatsapp})
              </a>
            </div>

            {/* Direct Phone Call Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-full bg-gold-50 text-gold-600 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-dark-950">
                  Telephone Inquiries
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Direct line to salon reception (10:00 AM – 10:00 PM).
                </p>
              </div>
              <a
                href={`tel:${siteData.salonInfo.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-dark-950 text-white text-xs font-bold hover:bg-gold-600 transition"
              >
                Call {siteData.salonInfo.phone}
              </a>
            </div>

            {/* Location & Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3 text-xs text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-dark-950">Bhoiwada Address</p>
                  <p>{siteData.salonInfo.address.fullAddress}</p>
                  <p className="text-gold-700 font-medium mt-0.5">Landmark: {siteData.salonInfo.landmark}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-stone-100">
                <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-dark-950">Hours</p>
                  <p>10:00 AM – 10:00 PM (Monday – Sunday)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Demo Inquiry Message Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-dark-950">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  Your inquiry regarding <strong>{formData.serviceInterest}</strong> has been received. Our salon manager will respond to you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-dark-950 text-white text-xs font-semibold hover:bg-gold-600 transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-dark-950">
                    Send a Message or Consultation Request
                  </h3>
                  <p className="text-xs text-stone-500">
                    Fill in your details and our team will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98200 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="e.g. ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Service of Interest</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-gold-500 focus:border-gold-500 bg-white"
                    >
                      <option>Hair Treatment (Balayage / Keratin)</option>
                      <option>Bridal & Makeup Packages</option>
                      <option>Precision Haircut & Styling</option>
                      <option>Hydra Facial & Skincare</option>
                      <option>Nails & Spa Pedicure</option>
                      <option>Men's Grooming</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Your Message / Special Request</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us what you are looking for, preferred date, or any hair/skin details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-dark-950 text-white font-medium text-xs hover:bg-gold-600 transition shadow"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
