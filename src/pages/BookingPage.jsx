import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  CreditCard, 
  CheckCircle2, 
  Trash2, 
  Plus, 
  Minus, 
  AlertTriangle, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles,
  QrCode,
  DollarSign
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';

export default function BookingPage() {
  const { 
    cart, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    cartTotalAmount, 
    cartTotalItems,
    createBooking 
  } = useBooking();

  const navigate = useNavigate();

  // Booking Flow Steps: 1: Services, 2: Stylist, 3: DateTime, 4: Details, 5: Payment, 6: Confirmation
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [selectedStylist, setSelectedStylist] = useState('Any Available Stylist (Fastest)');
  
  // Default to today's date (formatted YYYY-MM-DD)
  const todayStr = useMemo(() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, []);

  const [bookingDate, setBookingDate] = useState(todayStr);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('Pay at salon');
  const [demoUpiApp, setDemoUpiApp] = useState('Google Pay');
  const [demoCardDetails, setDemoCardDetails] = useState({
    number: '4111 •••• •••• 1111',
    expiry: '12/28',
    cvv: '•••'
  });

  // Completed Booking Result
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Calculate available time slots for chosen date, disabling past hours if today
  const availableSlots = useMemo(() => {
    const isToday = bookingDate === todayStr;
    const now = new Date();
    const currentHour = now.getHours();

    return siteData.openingHours.timeSlots.map((slot) => {
      // Slot example: "10:00 AM", "02:00 PM"
      const [time, modifier] = slot.split(' ');
      let [hours] = time.split(':').map(Number);
      if (modifier === 'PM' && hours < 12) hours += 12;
      if (modifier === 'AM' && hours === 12) hours = 0;

      const isPast = isToday && hours <= currentHour;
      return {
        slot,
        disabled: isPast,
      };
    });
  }, [bookingDate, todayStr]);

  // Handle final appointment confirmation
  const handleConfirmAppointment = () => {
    const booking = createBooking({
      customerName: customerDetails.name,
      phone: customerDetails.phone,
      email: customerDetails.email,
      stylist: selectedStylist,
      date: bookingDate,
      timeSlot: selectedTimeSlot || '12:00 PM',
      paymentMethod: paymentMethod === 'Demo UPI' ? `Demo UPI (${demoUpiApp})` : paymentMethod,
      notes: customerDetails.notes,
    });

    setConfirmedBooking(booking);
    setCurrentStep(6);
  };

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Step Header */}
      {currentStep < 6 && (
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 text-gold-800 text-xs font-semibold border border-gold-200">
            <Calendar className="w-3.5 h-3.5 text-gold-600" />
            Step {currentStep} of 5: Appointment Checkout
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-dark-950">
            {currentStep === 1 && 'Review Selected Services'}
            {currentStep === 2 && 'Select Your Preferred Stylist'}
            {currentStep === 3 && 'Choose Date & Time Slot'}
            {currentStep === 4 && 'Customer Contact Details'}
            {currentStep === 5 && 'Order Summary & Demo Payment'}
          </h1>

          {/* Progress bar */}
          <div className="max-w-md mx-auto flex items-center justify-between pt-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition ${
                    s === currentStep
                      ? 'bg-dark-950 text-white ring-4 ring-gold-200'
                      : s < currentStep
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-200 text-stone-600'
                  }`}
                >
                  {s < currentStep ? '✓' : s}
                </div>
                {s < 5 && (
                  <div
                    className={`w-8 sm:w-14 h-0.5 mx-1 transition ${
                      s < currentStep ? 'bg-emerald-500' : 'bg-stone-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 1: REVIEW SERVICES */}
      {currentStep === 1 && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6 animate-fade-in">
          {cart.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-dark-950">Your Booking Cart is Empty</h3>
              <p className="text-xs sm:text-sm text-stone-500 max-w-sm mx-auto">
                Select a service below to quickly get started with your appointment booking.
              </p>
              
              {/* Quick Add List */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto">
                {siteData.services.slice(0, 4).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => addToCart(s)}
                    className="p-3 rounded-xl border border-stone-200 hover:border-gold-500 hover:bg-gold-50/50 transition flex items-center justify-between text-xs"
                  >
                    <div>
                      <p className="font-bold text-dark-950">{s.name}</p>
                      <p className="text-stone-500">{s.priceDisplay}</p>
                    </div>
                    <span className="p-1.5 rounded-full bg-dark-950 text-white shrink-0">
                      <Plus className="w-3.5 h-3.5" />
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/services"
                  className="px-6 py-2.5 rounded-full bg-gold-500 text-dark-950 font-bold text-xs hover:bg-gold-400 transition"
                >
                  Browse All Salon Services
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="divide-y divide-stone-100">
                {cart.map((item) => (
                  <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-stone-200"
                        width="56"
                        height="56"
                      />
                      <div>
                        <h4 className="font-bold text-dark-950 text-sm">{item.name}</h4>
                        <p className="text-xs text-stone-500">{item.duration} • {item.priceDisplay}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-stone-200 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-stone-500 hover:text-dark-950 transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-dark-950">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-stone-500 hover:text-dark-950 transition"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-stone-400 hover:text-rose-600 transition"
                        title="Remove service"
                        aria-label="Remove service"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subtotal */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <p className="text-xs text-stone-500">Estimated Subtotal ({cartTotalItems} items)</p>
                  <p className="text-xl font-bold text-dark-950">₹{cartTotalAmount.toLocaleString()}</p>
                </div>
                <Link
                  to="/services"
                  className="text-xs text-gold-700 font-semibold hover:underline"
                >
                  + Add More Services
                </Link>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-dark-950 text-white font-medium text-xs hover:bg-gold-600 transition shadow"
                >
                  Continue to Stylist Selection
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* STEP 2: CHOOSE STYLIST */}
      {currentStep === 2 && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6 animate-fade-in">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-dark-950">Who would you like to see?</h3>
            <p className="text-xs text-stone-500">
              Select a preferred specialist or choose "Any Available Stylist" for maximum scheduling flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteData.stylistsForBooking.map((st) => (
              <label
                key={st.id}
                onClick={() => setSelectedStylist(st.name)}
                className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                  selectedStylist === st.name
                    ? 'border-gold-500 bg-gold-50/60 ring-2 ring-gold-400'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    selectedStylist === st.name ? 'bg-gold-500 text-white' : 'bg-stone-100 text-stone-700'
                  }`}>
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-dark-950 text-xs">{st.name}</p>
                    <p className="text-[11px] text-stone-500">JD's Unisex Salon Specialist</p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="stylist"
                  checked={selectedStylist === st.name}
                  onChange={() => setSelectedStylist(st.name)}
                  className="text-gold-600 focus:ring-gold-500"
                />
              </label>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-stone-100">
            <button
              onClick={() => setCurrentStep(1)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-stone-600 text-xs font-medium hover:bg-stone-100 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-dark-950 text-white font-medium text-xs hover:bg-gold-600 transition shadow"
            >
              Continue to Date & Time
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: DATE & TIME SLOT */}
      {currentStep === 3 && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6 animate-fade-in">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-dark-950">Select Appointment Date & Time</h3>
            <p className="text-xs text-stone-500">
              Salon operating hours: 10:00 AM – 10:00 PM daily. Past hours for today are disabled.
            </p>
          </div>

          {/* Date Picker */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-800">Select Date</label>
            <input
              type="date"
              min={todayStr}
              value={bookingDate}
              onChange={(e) => {
                setBookingDate(e.target.value);
                setSelectedTimeSlot(''); // reset slot when date changes
              }}
              className="w-full sm:w-64 px-4 py-2.5 rounded-xl border border-stone-200 text-xs font-medium focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
            />
          </div>

          {/* Time Slot Grid */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-800">Available Time Slots</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {availableSlots.map(({ slot, disabled }) => (
                <button
                  key={slot}
                  disabled={disabled}
                  onClick={() => setSelectedTimeSlot(slot)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition border ${
                    disabled
                      ? 'bg-stone-100 text-stone-300 border-stone-200 cursor-not-allowed'
                      : selectedTimeSlot === slot
                      ? 'bg-gold-500 text-dark-950 font-bold border-gold-600 ring-2 ring-gold-300'
                      : 'bg-white text-stone-800 border-stone-200 hover:border-gold-400 hover:bg-gold-50/40'
                  }`}
                >
                  <Clock className="w-3 h-3 inline mr-1 opacity-70" />
                  {slot}
                </button>
              ))}
            </div>
            {!selectedTimeSlot && (
              <p className="text-[11px] text-amber-700">Please choose a time slot to proceed.</p>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-stone-100">
            <button
              onClick={() => setCurrentStep(2)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-stone-600 text-xs font-medium hover:bg-stone-100 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button
              disabled={!selectedTimeSlot}
              onClick={() => setCurrentStep(4)}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium text-xs shadow transition ${
                selectedTimeSlot
                  ? 'bg-dark-950 hover:bg-gold-600'
                  : 'bg-stone-300 cursor-not-allowed'
              }`}
            >
              Continue to Contact Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: CUSTOMER DETAILS */}
      {currentStep === 4 && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6 animate-fade-in">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-dark-950">Who is this booking for?</h3>
            <p className="text-xs text-stone-500">
              We will send your appointment confirmation via WhatsApp or SMS to this number.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Apte"
                  value={customerDetails.name}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Mobile Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98200 54321"
                  value={customerDetails.phone}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-700">Email Address (Optional)</label>
              <input
                type="email"
                placeholder="e.g. radhika@example.com"
                value={customerDetails.email}
                onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-700">Special Notes / Hair Length / Requests</label>
              <textarea
                rows="3"
                placeholder="Any allergies, previous chemical treatments, hair length details, or wedding event schedule..."
                value={customerDetails.notes}
                onChange={(e) => setCustomerDetails({ ...customerDetails, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-stone-100">
            <button
              onClick={() => setCurrentStep(3)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-stone-600 text-xs font-medium hover:bg-stone-100 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button
              disabled={!customerDetails.name.trim() || !customerDetails.phone.trim()}
              onClick={() => setCurrentStep(5)}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium text-xs shadow transition ${
                customerDetails.name.trim() && customerDetails.phone.trim()
                  ? 'bg-dark-950 hover:bg-gold-600'
                  : 'bg-stone-300 cursor-not-allowed'
              }`}
            >
              Proceed to Demo Payment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: ORDER SUMMARY & DEMO PAYMENT */}
      {currentStep === 5 && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6 animate-fade-in">
          {/* Mandatory Demo Disclaimer Banner */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900">
              <p className="font-bold">Demo payment – no real money is charged.</p>
              <p className="text-[11px] text-amber-800 mt-0.5">
                This is a live demonstration booking system. Selecting UPI or Card triggers a simulated confirmation, recording the booking to your browser session and the owner dashboard.
              </p>
            </div>
          </div>

          {/* Order Summary Box */}
          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-serif text-lg font-bold text-dark-950 border-b border-stone-200 pb-2">
              Appointment Summary
            </h4>
            <div className="text-xs text-stone-700 space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-500">Date & Time:</span>
                <span className="font-semibold text-dark-950">{bookingDate} at {selectedTimeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Stylist:</span>
                <span className="font-semibold text-dark-950">{selectedStylist}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Client:</span>
                <span className="font-semibold text-dark-950">{customerDetails.name} ({customerDetails.phone})</span>
              </div>
              <div className="pt-2 border-t border-stone-200 space-y-1">
                <span className="text-stone-500 font-medium block">Selected Services:</span>
                {cart.map((c) => (
                  <div key={c.id} className="flex justify-between text-[11px]">
                    <span>{c.name} (x{c.quantity})</span>
                    <span>₹{((c.priceNum || 0) * c.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-stone-200 flex justify-between font-bold text-sm text-dark-950">
                <span>Total Payable (Demo):</span>
                <span className="text-gold-700">₹{cartTotalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-stone-800 block">
              Select Demo Payment Method
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Option 1: Pay at salon */}
              <label
                onClick={() => setPaymentMethod('Pay at salon')}
                className={`p-4 rounded-xl border cursor-pointer transition text-xs ${
                  paymentMethod === 'Pay at salon'
                    ? 'border-gold-500 bg-gold-50/70 ring-2 ring-gold-400'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="w-5 h-5 text-gold-600" />
                  <input
                    type="radio"
                    name="paymethod"
                    checked={paymentMethod === 'Pay at salon'}
                    onChange={() => setPaymentMethod('Pay at salon')}
                  />
                </div>
                <p className="font-bold text-dark-950">Pay at Salon</p>
                <p className="text-[11px] text-stone-500 mt-1">Cash, Card or UPI after your service</p>
              </label>

              {/* Option 2: Demo UPI */}
              <label
                onClick={() => setPaymentMethod('Demo UPI')}
                className={`p-4 rounded-xl border cursor-pointer transition text-xs ${
                  paymentMethod === 'Demo UPI'
                    ? 'border-gold-500 bg-gold-50/70 ring-2 ring-gold-400'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <QrCode className="w-5 h-5 text-emerald-600" />
                  <input
                    type="radio"
                    name="paymethod"
                    checked={paymentMethod === 'Demo UPI'}
                    onChange={() => setPaymentMethod('Demo UPI')}
                  />
                </div>
                <p className="font-bold text-dark-950">Demo UPI</p>
                <p className="text-[11px] text-stone-500 mt-1">Simulate GPay / PhonePe payment</p>
              </label>

              {/* Option 3: Demo Card */}
              <label
                onClick={() => setPaymentMethod('Demo Card')}
                className={`p-4 rounded-xl border cursor-pointer transition text-xs ${
                  paymentMethod === 'Demo Card'
                    ? 'border-gold-500 bg-gold-50/70 ring-2 ring-gold-400'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <CreditCard className="w-5 h-5 text-indigo-600" />
                  <input
                    type="radio"
                    name="paymethod"
                    checked={paymentMethod === 'Demo Card'}
                    onChange={() => setPaymentMethod('Demo Card')}
                  />
                </div>
                <p className="font-bold text-dark-950">Demo Card</p>
                <p className="text-[11px] text-stone-500 mt-1">Simulate Visa / Mastercard payment</p>
              </label>
            </div>

            {/* Sub-options for Demo UPI */}
            {paymentMethod === 'Demo UPI' && (
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2 animate-fade-in">
                <span className="font-bold text-stone-800 block">Choose Demo UPI App:</span>
                <div className="flex gap-2">
                  {['Google Pay', 'PhonePe', 'Paytm'].map((app) => (
                    <button
                      key={app}
                      type="button"
                      onClick={() => setDemoUpiApp(app)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                        demoUpiApp === app ? 'bg-dark-950 text-white' : 'bg-white text-stone-700'
                      }`}
                    >
                      {app}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-stone-500">
                  Demo UPI ID: <span className="font-mono font-semibold">jdsalon@demoaxis</span> (Simulation only)
                </p>
              </div>
            )}

            {/* Sub-options for Demo Card */}
            {paymentMethod === 'Demo Card' && (
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2 animate-fade-in">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-stone-500 block uppercase">Demo Card Number</label>
                    <input
                      type="text"
                      disabled
                      value={demoCardDetails.number}
                      className="w-full px-3 py-1.5 rounded-lg border border-stone-200 bg-white font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-stone-500 block uppercase">Expiry / CVV</label>
                    <input
                      type="text"
                      disabled
                      value={`${demoCardDetails.expiry} | ${demoCardDetails.cvv}`}
                      className="w-full px-3 py-1.5 rounded-lg border border-stone-200 bg-white font-mono text-xs"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-stone-400">
                  Pre-filled test sandbox card credentials.
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-stone-100">
            <button
              onClick={() => setCurrentStep(4)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-stone-600 text-xs font-medium hover:bg-stone-100 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={handleConfirmAppointment}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition"
            >
              <CheckCircle2 className="w-4 h-4" />
              Confirm Demo Booking (₹{cartTotalAmount.toLocaleString()})
            </button>
          </div>
        </div>
      )}

      {/* STEP 6: CONFIRMATION RECEIPT */}
      {currentStep === 6 && confirmedBooking && (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-lg text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-300">
              Booking Confirmed • Status: {confirmedBooking.status}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-950">
              Appointment Booked Successfully!
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
              Thank you, <strong>{confirmedBooking.customerName}</strong>. We look forward to welcoming you at JD's Unisex Salon in Bhoiwada, Parel.
            </p>
          </div>

          {/* Receipt Card */}
          <div className="max-w-md mx-auto bg-stone-50 rounded-2xl p-6 border border-stone-200 text-left space-y-3 text-xs">
            <div className="flex justify-between items-center border-b border-stone-200 pb-2">
              <span className="text-stone-500">Booking ID:</span>
              <span className="font-mono font-bold text-sm text-dark-950">{confirmedBooking.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Date & Slot:</span>
              <span className="font-semibold text-dark-950">{confirmedBooking.date} at {confirmedBooking.timeSlot}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Assigned Stylist:</span>
              <span className="font-semibold text-dark-950">{confirmedBooking.stylist}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Payment Method:</span>
              <span className="font-semibold text-dark-950">{confirmedBooking.paymentMethod}</span>
            </div>
            <div className="pt-2 border-t border-stone-200">
              <span className="text-stone-500 block mb-1">Booked Services:</span>
              {confirmedBooking.services.map((s, idx) => (
                <div key={idx} className="flex justify-between text-[11px] text-stone-700">
                  <span>{s.name}</span>
                  <span>₹{s.priceNum?.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-stone-200 flex justify-between font-bold text-dark-950 text-sm">
              <span>Total Amount:</span>
              <span className="text-gold-700">₹{confirmedBooking.totalAmount?.toLocaleString()}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/owner"
              className="px-6 py-2.5 rounded-full bg-dark-950 text-white font-medium text-xs hover:bg-gold-600 transition shadow"
            >
              View in Owner Dashboard →
            </Link>
            <Link
              to="/"
              className="px-6 py-2.5 rounded-full bg-stone-100 text-stone-800 font-medium text-xs hover:bg-stone-200 transition"
            >
              Return to Home Page
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
