import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Plus, 
  Check, 
  Clock, 
  Calendar, 
  Sparkles, 
  ArrowRight,
  ShoppingBag,
  Filter
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';

export default function ServicesPage() {
  const { cart, addToCart, cartTotalItems, cartTotalAmount } = useBooking();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return siteData.services.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <div className="py-12 space-y-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-stone-800">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-semibold border border-gold-500/40">
              <Sparkles className="w-3.5 h-3.5" />
              {siteData.salonInfo.partnership}
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Salon Services & Rate Card
            </h1>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              Explore our complete range of certified hair treatments, skin therapies, nails, and bridal packages. Add any service directly to your appointment cart.
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-gold-500/10 to-transparent pointer-events-none hidden md:block" />
        </div>
      </section>

      {/* Sticky Cart Summary Bar if cart has items */}
      {cartTotalItems > 0 && (
        <aside aria-label="Cart summary banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                {cartTotalItems}
              </div>
              <div>
                <p className="text-sm font-bold text-emerald-900">
                  {cartTotalItems} {cartTotalItems === 1 ? 'service' : 'services'} added to your appointment
                </p>
                <p className="text-xs text-emerald-700">
                  Subtotal: <span className="font-semibold">₹{cartTotalAmount.toLocaleString()}</span>
                </p>
              </div>
            </div>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-dark-950 text-white font-medium text-xs hover:bg-gold-600 transition shadow"
            >
              <ShoppingBag className="w-4 h-4 text-gold-400" />
              Proceed to Booking Checkout
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>
      )}

      {/* Search & Category Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {siteData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
                  selectedCategory === cat.id
                    ? 'bg-dark-950 text-white shadow-sm'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services or treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-stone-200 bg-white focus:outline-hidden focus:border-gold-500 focus:ring-1 focus:ring-gold-500 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Services Count */}
        <div className="text-xs text-stone-500 flex items-center justify-between">
          <span>Showing {filteredServices.length} available services</span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-gold-700 hover:underline"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 space-y-3">
            <p className="text-base font-bold text-dark-950">No matching services found</p>
            <p className="text-xs text-stone-500">
              Try adjusting your search terms or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs bg-dark-950 text-white rounded-full font-medium"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const inCart = isInCart(service.id);
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-md transition overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-48 bg-stone-100 overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.name} at JD's Unisex Salon`}
                        className="w-full h-full object-cover group-hover:scale-104 transition duration-300"
                        width="400"
                        height="192"
                      />
                      <span className="absolute top-3 right-3 bg-dark-950/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gold-400" />
                        {service.duration}
                      </span>
                      {service.popular && (
                        <span className="absolute top-3 left-3 bg-gold-500 text-dark-950 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Popular
                        </span>
                      )}
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-gold-700 uppercase tracking-wider">
                          {service.category.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-dark-950 group-hover:text-gold-700 transition">
                        {service.name}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase tracking-wider">
                        Price
                      </span>
                      <span className="text-sm font-bold text-dark-950">
                        {service.priceDisplay}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(service)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition ${
                        inCart
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                          : 'bg-dark-950 text-white hover:bg-gold-600'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Added ({cart.find((c) => c.id === service.id)?.quantity})
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
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
