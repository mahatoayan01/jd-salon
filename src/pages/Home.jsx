import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Sparkles, 
  Clock, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Scissors, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Plus,
  Check,
  MessageCircle,
  Instagram
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import OpenStatusBadge from '../components/OpenStatusBadge';

export default function Home() {
  const { cart, addToCart } = useBooking();
  const [activeGalleryTab, setActiveGalleryTab] = useState('All');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const galleryCategories = ['All', 'Interior', 'Hair', 'Skin', 'Nails', 'Bridal', 'Grooming'];

  const filteredGallery = activeGalleryTab === 'All'
    ? siteData.gallery
    : siteData.gallery.filter((item) => item.category === activeGalleryTab);

  const isInCart = (serviceId) => cart.some((item) => item.id === serviceId);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-stone-100/70 via-[#FAF8F5] to-[#FAF8F5] pt-12 pb-20 overflow-hidden border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge & Rating */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={siteData.salonInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs text-xs font-semibold text-stone-800 hover:border-gold-500 transition"
                >
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>{siteData.salonInfo.heroBadge}</span>
                </a>
                <OpenStatusBadge />
              </div>

              {/* Headings */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-700 uppercase">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  {siteData.salonInfo.partnership}
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-dark-950 leading-[1.15]">
                  Precision Hair, Skin & Luxury Nail Art in Parel.
                </h1>
                <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
                  Discover bespoke haircuts, hand-painted balayage color, rejuvenating facials, and wedding bridal artistry at Bhoiwada's trusted unisex salon.
                </p>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-dark-950 text-white font-medium text-sm hover:bg-gold-600 transition shadow-md hover:shadow-lg"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  Book Appointment
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-stone-800 border border-stone-300 font-medium text-sm hover:bg-stone-50 hover:border-stone-400 transition"
                >
                  View Services & Rates
                </Link>
              </div>

              {/* Service Highlights Pills */}
              <div className="pt-4 border-t border-stone-200/80 flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600" />
                  L'Oréal Professionnel Color
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600" />
                  Keratin & Cysteine Smoothing
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600" />
                  Unisex Grooming & Bridal
                </span>
              </div>
            </div>

            {/* Right Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-white group">
                  <img
                    src="/images/hair-balayage.jpg"
                    alt="L'Oréal Balayage hair color service at JD's Unisex Salon"
                    className="w-full h-96 object-cover object-center group-hover:scale-102 transition duration-500"
                    width="600"
                    height="384"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-xs uppercase tracking-wider text-gold-300 font-semibold">
                      Featured Transformation
                    </span>
                    <h3 className="font-serif text-2xl font-bold mt-1">
                      L'Oréal Balayage Dimension
                    </h3>
                    <p className="text-xs text-stone-300 mt-1">
                      Hand-painted caramel & honey dimensional tones.
                    </p>
                  </div>
                </div>

                {/* Floating Stat Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-stone-200 p-4 max-w-xs flex items-center gap-3 animate-fade-in hidden sm:flex">
                  <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 font-bold shrink-0">
                    4.6
                  </div>
                  <div>
                    <p className="text-xs font-bold text-dark-950">450+ Verified Ratings</p>
                    <p className="text-[11px] text-stone-500">Google & Justdial Mumbai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL-TIME OPENING HOURS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-dark-900 text-white rounded-2xl shadow-lg border border-stone-800 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-bold text-white">
                  Operating Hours & Schedule
                </h3>
                <OpenStatusBadge />
              </div>
              <p className="text-sm text-stone-400 mt-0.5">
                {siteData.openingHours.displayText}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${siteData.salonInfo.phoneRaw}`}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-stone-800 text-stone-200 text-xs font-medium hover:bg-stone-700 transition"
            >
              Call for Walk-in: {siteData.salonInfo.phone}
            </a>
            <Link
              to="/book"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gold-500 text-dark-950 text-xs font-bold hover:bg-gold-400 transition"
            >
              Book Time Slot
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ABOUT JD'S SALON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200">
            <img
              src="/images/salon-interior.jpg"
              alt="JD's Unisex Salon interior styling stations in Parel"
              className="w-full h-96 object-cover"
              width="600"
              height="384"
            />
            <div className="absolute top-4 left-4 bg-dark-950/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
              Bhoiwada, Parel (Opp. Jain Mandir)
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-gold-700 uppercase">
              <Scissors className="w-4 h-4 text-gold-500" />
              About Our Salon
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-950 leading-tight">
              A Premier Unisex Grooming Experience with Neighborhood Trust.
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Located on G.D. Ambekar Marg opposite the historic Jain Mandir in Bhoiwada, Parel, **JD's Unisex Salon** has earned an enviable reputation as the go-to beauty, hair, and nail destination in South-Central Mumbai.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              We take pride in our certified partnership with <strong>L'Oréal Professionnel</strong>, guaranteeing that only genuine salon-grade hair treatments, ammonia-safe colors, and restorative formulas touch your hair. Whether you seek a clean precision fade, a bold balayage, intensive keratin smoothing, or a rejuvenating facial, our stylists are dedicated to your comfort and personal style.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <span className="font-serif text-2xl font-bold text-gold-600 block">4.6 / 5.0</span>
                <span className="text-xs text-stone-500">Google Rating (450+ Reviews)</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <span className="font-serif text-2xl font-bold text-dark-950 block">7 Days</span>
                <span className="text-xs text-stone-500">Open 10 AM to 10 PM Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POPULAR SERVICES SHOWCASE */}
      <section className="bg-stone-100/60 py-16 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-wider text-gold-700 uppercase block">
                Top Rated Client Favorites
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-950 mt-1">
                Popular Salon Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 hover:text-gold-800 group"
            >
              Explore Full Service Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.services
              .filter((s) => s.popular)
              .slice(0, 6)
              .map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden bg-stone-100">
                      <img
                        src={service.image}
                        alt={`${service.name} at JD's Unisex Salon`}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        width="400"
                        height="192"
                      />
                      <span className="absolute top-3 right-3 bg-dark-950/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                        {service.duration}
                      </span>
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="font-serif text-xl font-bold text-dark-950 group-hover:text-gold-700 transition">
                        {service.name}
                      </h3>
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-stone-400 block uppercase tracking-wide">
                        Pricing
                      </span>
                      <span className="text-sm font-bold text-dark-950">
                        {service.priceDisplay}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(service)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition ${
                        isInCart(service.id)
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                          : 'bg-dark-950 text-white hover:bg-gold-600'
                      }`}
                    >
                      {isInCart(service.id) ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Added to Booking
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          Add to Booking
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 5. PACKAGES & OFFERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-wider text-gold-700 uppercase">
            Curated Salon Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-950">
            Signature Packages & Bundles
          </h2>
          <p className="text-sm text-stone-600">
            Thoughtfully packaged services offering comprehensive beauty care at clear, value-focused rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-gold-50 text-gold-800 text-xs font-bold border border-gold-200">
                    {pkg.badge}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {pkg.duration}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-dark-950">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="py-2">
                  <span className="text-2xl font-bold text-dark-950 block">
                    {pkg.priceDisplay}
                  </span>
                </div>

                <ul className="space-y-2 pt-2 border-t border-stone-100 text-xs text-stone-700">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4">
                <Link
                  to="/book"
                  className="w-full py-2.5 rounded-xl bg-dark-950 text-white font-medium text-xs flex items-center justify-center gap-2 hover:bg-gold-600 transition"
                >
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  Book This Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WORK PORTFOLIO GALLERY */}
      <section className="bg-dark-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-wider text-gold-400 uppercase block">
                Visual Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                Our Work & Salon Ambiance
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveGalleryTab(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                    activeGalleryTab === cat
                      ? 'bg-gold-500 text-dark-950 font-bold'
                      : 'bg-white/5 text-stone-300 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl overflow-hidden aspect-square bg-stone-900 group"
              >
                <img
                  src={item.image}
                  alt={`${item.title} portfolio at JD's Unisex Salon`}
                  className="w-full h-full object-cover group-hover:scale-108 transition duration-500"
                  width="300"
                  height="300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-[10px] uppercase tracking-wider text-gold-300 font-semibold">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MEET THE STYLISTS & SPECIALISTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-wider text-gold-700 uppercase">
            Artistry & Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-950">
            Meet the Salon Specialists
          </h2>
          <p className="text-sm text-stone-600">
            Our certified stylists and skin specialists bring mastery in hair color, skin rejuvenation, and bridal artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition text-center p-6 space-y-4"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gold-500 shadow-inner bg-stone-100">
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-full h-full object-cover"
                  width="96"
                  height="96"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold text-dark-950">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-gold-700">
                  {member.role}
                </p>
                <p className="text-xs text-stone-500">
                  {member.experience}
                </p>
              </div>
              <p className="text-xs text-stone-600 border-t border-stone-100 pt-3">
                Focus: {member.specialty}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. VERIFIED CUSTOMER REVIEWS (100% REAL FROM GOOGLE MAPS) */}
      <section className="bg-stone-100/70 py-16 border-y border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-800 shadow-xs">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
              Real Google Maps & Justdial Reviews
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-950">
              What Our Clients Say
            </h2>
            <p className="text-sm text-stone-600">
              Verified testimonials copied directly from Google Maps and directory feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteData.reviews.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Verified Client
                    </span>
                  </div>
                  <p className="text-sm text-stone-700 italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-dark-950">{rev.reviewerName}</p>
                    <p className="text-stone-400 text-[11px]">{rev.date}</p>
                  </div>
                  <span className="text-stone-400 text-[11px]">Google Maps</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <a
              href={siteData.salonInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-800"
            >
              Read more reviews on Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-600 uppercase">
              <Instagram className="w-4 h-4" />
              Social Portfolio
            </div>
            <h2 className="font-serif text-3xl font-bold text-dark-950 mt-1">
              Follow Us on Social Media
            </h2>
          </div>
          <a
            href={siteData.salonInfo.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-stone-700 hover:text-gold-600 inline-flex items-center gap-1"
          >
            #JDsUnisexSalonParel
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {siteData.instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-xl overflow-hidden aspect-square bg-stone-100 shadow-xs"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                width="300"
                height="300"
              />
              <div className="absolute inset-0 bg-dark-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white text-xs">
                <p className="line-clamp-2">{post.caption}</p>
                <span className="text-[10px] text-gold-300 mt-1 inline-flex items-center gap-1">
                  View post <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold tracking-wider text-gold-700 uppercase">
            Questions & Answers
          </span>
          <h2 className="font-serif text-3xl font-bold text-dark-950">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 pt-4">
          {siteData.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-semibold text-dark-950 hover:text-gold-700 transition"
              >
                <span>{faq.q}</span>
                {openFaqIndex === idx ? (
                  <ChevronUp className="w-4 h-4 text-gold-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                )}
              </button>
              {openFaqIndex === idx && (
                <div className="px-5 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl border border-stone-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-semibold border border-gold-500/40">
            <Sparkles className="w-3.5 h-3.5" />
            Book Your Next Appointment
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold max-w-xl mx-auto">
            Ready to Experience JD's Unisex Salon in Parel?
          </h2>
          <p className="text-sm text-stone-400 max-w-lg mx-auto">
            Choose your services online, select your preferred stylist, and secure your time slot in under 2 minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/book"
              className="px-8 py-3.5 rounded-full bg-gold-500 text-dark-950 font-bold text-sm hover:bg-gold-400 transition shadow-md"
            >
              Book Appointment Now
            </Link>
            <a
              href={siteData.salonInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition border border-white/20"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
