import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  DollarSign, 
  Users, 
  Clock, 
  Search, 
  Filter, 
  LogOut, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  CreditCard,
  Phone,
  Sparkles
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';

export default function OwnerDashboardPage() {
  const { 
    bookings, 
    payments, 
    updateBookingStatus, 
    isOwnerAuthenticated, 
    ownerLogout,
    resetAllDataToDefault 
  } = useBooking();

  const navigate = useNavigate();

  // If not authenticated, redirect to login
  React.useEffect(() => {
    if (!isOwnerAuthenticated) {
      navigate('/owner-login', { replace: true });
    }
  }, [isOwnerAuthenticated, navigate]);

  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings' or 'payments'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Today's date string YYYY-MM-DD
  const todayStr = useMemo(() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, []);

  // Compute 4 KPI summary cards
  const stats = useMemo(() => {
    const todayAppointments = bookings.filter((b) => b.date === todayStr);
    const todayRevenue = todayAppointments.reduce((sum, b) => sum + (b.totalAmount || 0), 0);
    const totalBookingsCount = bookings.length;
    const pendingCount = bookings.filter((b) => b.status === 'Pending').length;

    return {
      todayAppointments: todayAppointments.length,
      todayRevenue,
      totalBookingsCount,
      pendingCount,
    };
  }, [bookings, todayStr]);

  // Filtered Bookings list
  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchesStatus = statusFilter === 'All' || b.status === statusFilter;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        b.customerName?.toLowerCase().includes(q) ||
        b.phone?.toLowerCase().includes(q) ||
        b.id?.toLowerCase().includes(q) ||
        b.stylist?.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [bookings, statusFilter, searchQuery]);

  const handleStatusChange = (bookingId, newStatus) => {
    updateBookingStatus(bookingId, newStatus);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-300';
      case 'Pending':
        return 'bg-amber-50 text-amber-800 border-amber-300';
      case 'Completed':
        return 'bg-blue-50 text-blue-700 border-blue-300';
      case 'Cancelled':
        return 'bg-rose-50 text-rose-700 border-rose-300';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-200';
    }
  };

  if (!isOwnerAuthenticated) {
    return null;
  }

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fade-in">
      {/* Top Header */}
      <div className="bg-dark-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-stone-800 shadow-md">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400">
            <Sparkles className="w-3.5 h-3.5" />
            Live Client-Side Session
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
            JD's Unisex Salon – Management Portal
          </h1>
          <p className="text-xs text-stone-400">
            Parel, Mumbai • Real-time bookings and simulated revenue ledger
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => {
              if (window.confirm('Reset bookings and payments back to initial sample state?')) {
                resetAllDataToDefault();
              }
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-stone-800 text-stone-300 text-xs font-semibold hover:bg-stone-700 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Demo Data
          </button>
          <button
            onClick={() => {
              ownerLogout();
              navigate('/owner-login');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-rose-900/60 text-rose-200 text-xs font-semibold hover:bg-rose-800 transition border border-rose-700/50"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </button>
        </div>
      </div>

      {/* 4 KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Today's Appointments */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Today's Bookings
            </span>
            <div className="w-8 h-8 rounded-lg bg-gold-50 text-gold-700 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <p className="font-serif text-3xl font-bold text-dark-950">
            {stats.todayAppointments}
          </p>
          <p className="text-[11px] text-stone-400">Scheduled for today ({todayStr})</p>
        </div>

        {/* Card 2: Today's Revenue */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Today's Revenue
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <p className="font-serif text-3xl font-bold text-emerald-900">
            ₹{stats.todayRevenue.toLocaleString()}
          </p>
          <p className="text-[11px] text-emerald-600 font-medium">Estimated day volume</p>
        </div>

        {/* Card 3: Total Bookings */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Total Recorded
            </span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="font-serif text-3xl font-bold text-dark-950">
            {stats.totalBookingsCount}
          </p>
          <p className="text-[11px] text-stone-400">All sample & user demo bookings</p>
        </div>

        {/* Card 4: Pending Count */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Pending Action
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className="font-serif text-3xl font-bold text-amber-900">
            {stats.pendingCount}
          </p>
          <p className="text-[11px] text-amber-700 font-medium">Awaiting salon confirmation</p>
        </div>
      </div>

      {/* Tabs Switcher: Bookings vs Payments */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-2">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition ${
              activeTab === 'bookings'
                ? 'bg-dark-950 text-white'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            Appointments & Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition ${
              activeTab === 'payments'
                ? 'bg-dark-950 text-white'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            Simulated Payments Ledger ({payments.length})
          </button>
        </div>
      </div>

      {/* VIEW 1: BOOKINGS TABLE */}
      {activeTab === 'bookings' && (
        <div className="space-y-4">
          {/* Table Search & Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by client name, ID, or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-stone-200 bg-white text-xs focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500">Filter:</span>
              {['All', 'Confirmed', 'Pending', 'Completed', 'Cancelled'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                    statusFilter === st
                      ? 'bg-dark-950 text-white font-bold'
                      : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Bookings Table */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Booking ID</th>
                    <th className="px-4 py-3 font-semibold">Customer & Phone</th>
                    <th className="px-4 py-3 font-semibold">Services</th>
                    <th className="px-4 py-3 font-semibold">Stylist</th>
                    <th className="px-4 py-3 font-semibold">Date & Slot</th>
                    <th className="px-4 py-3 font-semibold">Amount</th>
                    <th className="px-4 py-3 font-semibold">Payment</th>
                    <th className="px-4 py-3 font-semibold">Status Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="px-4 py-8 text-center text-stone-500 text-xs">
                        No appointments found matching this filter.
                      </td>
                    </tr>
                  ) : (
                    filteredBookings.map((b) => (
                      <tr key={b.id} className="hover:bg-stone-50/60 transition">
                        {/* ID */}
                        <td className="px-4 py-3 font-mono font-bold text-dark-950 whitespace-nowrap">
                          {b.id}
                          {b.sample && (
                            <span className="block text-[9px] text-stone-400 font-sans font-normal">
                              (sample)
                            </span>
                          )}
                        </td>

                        {/* Customer */}
                        <td className="px-4 py-3">
                          <p className="font-bold text-dark-950">{b.customerName}</p>
                          <a
                            href={`tel:${b.phone}`}
                            className="text-stone-500 hover:text-gold-700 text-[11px] flex items-center gap-1"
                          >
                            <Phone className="w-3 h-3" />
                            {b.phone}
                          </a>
                        </td>

                        {/* Services */}
                        <td className="px-4 py-3 max-w-[180px]">
                          <p className="truncate text-stone-800 font-medium">
                            {b.services?.map((s) => s.name).join(', ')}
                          </p>
                          <span className="text-[10px] text-stone-400">
                            {b.services?.length || 1} item(s)
                          </span>
                        </td>

                        {/* Stylist */}
                        <td className="px-4 py-3 text-stone-700 whitespace-nowrap">
                          {b.stylist}
                        </td>

                        {/* Date & Slot */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          <p className="font-semibold text-dark-950">{b.date}</p>
                          <p className="text-stone-500 text-[11px]">{b.timeSlot}</p>
                        </td>

                        {/* Amount */}
                        <td className="px-4 py-3 font-bold text-dark-950 whitespace-nowrap">
                          ₹{b.totalAmount?.toLocaleString()}
                        </td>

                        {/* Payment */}
                        <td className="px-4 py-3 text-stone-600 whitespace-nowrap">
                          {b.paymentMethod}
                        </td>

                        {/* Status Change Dropdown */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          <select
                            value={b.status}
                            onChange={(e) => handleStatusChange(b.id, e.target.value)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold border cursor-pointer focus:outline-hidden ${getStatusBadge(
                              b.status
                            )}`}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: SIMULATED PAYMENTS LEDGER */}
      {activeTab === 'payments' && (
        <div className="bg-white rounded-2xl border border-stone-200 shadow-2xs overflow-hidden">
          <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between text-xs">
            <span className="font-bold text-stone-800">Simulated Transactions</span>
            <span className="text-stone-500 text-[11px]">
              ⚠️ Demo records only — no actual financial settlement.
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Payment ID</th>
                  <th className="px-4 py-3 font-semibold">Booking ID</th>
                  <th className="px-4 py-3 font-semibold">Customer</th>
                  <th className="px-4 py-3 font-semibold">Amount</th>
                  <th className="px-4 py-3 font-semibold">Method</th>
                  <th className="px-4 py-3 font-semibold">Payment Status</th>
                  <th className="px-4 py-3 font-semibold">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {payments.map((p) => (
                  <tr key={p.id} className="hover:bg-stone-50/60 transition">
                    <td className="px-4 py-3 font-mono font-bold text-dark-950">
                      {p.id}
                      {p.sample && (
                        <span className="block text-[9px] text-stone-400 font-sans font-normal">
                          (sample)
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-mono text-stone-700">{p.bookingId}</td>
                    <td className="px-4 py-3 font-medium text-dark-950">{p.customerName}</td>
                    <td className="px-4 py-3 font-bold text-dark-950">
                      ₹{p.amount?.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-stone-700">{p.method}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                          p.status === 'Received' || p.status === 'Demo Paid'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-stone-400 text-[11px] whitespace-nowrap">
                      {p.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
