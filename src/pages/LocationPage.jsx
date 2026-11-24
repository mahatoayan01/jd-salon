import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  ExternalLink, 
  Navigation, 
  ShieldCheck, 
  CheckCircle,
  Train,
  Car
} from 'lucide-react';
import { siteData } from '../data/siteData';
import OpenStatusBadge from '../components/OpenStatusBadge';

export default function LocationPage() {
  return (
    <div className="py-12 space-y-12">
      {/* Title Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 text-gold-800 text-xs font-semibold border border-gold-200">
          <MapPin className="w-3.5 h-3.5 text-gold-600" />
          Bhoiwada, Parel, Mumbai
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-dark-950">
          Find JD's Unisex Salon
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
          Conveniently located in Bhoiwada, Parel on G.D. Ambekar Marg, directly opposite the Jain Mandir.
        </p>
      </section>

      {/* Main Grid: Details + Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address, Hours, Transit */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-dark-950">
                  Salon Address & Landmark
                </h3>
                <OpenStatusBadge />
              </div>
              
              <div className="space-y-1 text-sm text-stone-700">
                <p className="font-semibold text-dark-950">{siteData.salonInfo.name}</p>
                <p>{siteData.salonInfo.address.line1}</p>
                <p>{siteData.salonInfo.address.line2}</p>
                <p>{siteData.salonInfo.address.city} - {siteData.salonInfo.address.pincode}</p>
              </div>

              <div className="p-3 rounded-xl bg-gold-50/70 border border-gold-200/80 text-xs text-gold-900 font-medium">
                📍 Landmark: {siteData.salonInfo.landmark}
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={siteData.salonInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-dark-950 text-white text-xs font-semibold hover:bg-gold-600 transition"
                >
                  <Navigation className="w-3.5 h-3.5 text-gold-400" />
                  Get Directions on Maps
                </a>
                <a
                  href={`tel:${siteData.salonInfo.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold hover:bg-stone-200 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-stone-600" />
                  Call Salon
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold-600" />
                <h3 className="font-serif text-xl font-bold text-dark-950">
                  Weekly Operating Schedule
                </h3>
              </div>

              <div className="divide-y divide-stone-100 text-xs">
                {siteData.openingHours.days.map((d) => (
                  <div key={d.day} className="py-2.5 flex items-center justify-between">
                    <span className="font-medium text-stone-700">{d.day}</span>
                    <span className="font-semibold text-dark-950">
                      {d.open} – {d.close}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-stone-500 pt-1">
                *Open on all public holidays and weekends.
              </p>
            </div>

            {/* Transit and Connectivity */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3">
              <h4 className="font-serif text-lg font-bold text-dark-950">
                Getting Here (Parel / Dadar)
              </h4>
              <div className="space-y-2 text-xs text-stone-600">
                <div className="flex items-start gap-2">
                  <Train className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <p>
                    <strong>Railway:</strong> 5–7 minutes auto-rickshaw ride from <strong>Parel</strong> (Central Railway) or <strong>Prabhadevi / Dadar</strong> stations.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <p>
                    <strong>Road:</strong> Accessible via Dr. B.A. Road and G.D. Ambekar Marg with parking available nearby along Bhoiwada.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-4 border border-stone-200 shadow-xs space-y-4">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200">
              <iframe
                title="JD's Unisex Salon Parel Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.036!2d72.8427771!3d19.0069444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf99a91a9ac7%3A0x321472591cd529e5!2sJD's%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between p-3 rounded-xl bg-stone-50 text-xs text-stone-600 gap-2">
              <span>Google Place ID: {siteData.salonInfo.googleMapsPlaceId}</span>
              <a
                href={siteData.salonInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-700 font-semibold hover:underline inline-flex items-center gap-1"
              >
                Open Google Maps Listing
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
