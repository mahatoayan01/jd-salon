import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, User, AlertTriangle, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';

export default function OwnerLoginPage() {
  const { ownerLogin, isOwnerAuthenticated } = useBooking();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // If already logged in, redirect directly to dashboard
  React.useEffect(() => {
    if (isOwnerAuthenticated) {
      navigate('/owner', { replace: true });
    }
  }, [isOwnerAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = ownerLogin(username, password);
    if (result.success) {
      navigate('/owner');
    } else {
      setError(result.error || 'Invalid credentials');
    }
  };

  const fillDemoCredentials = () => {
    setUsername(siteData.ownerCredentials.username);
    setPassword(siteData.ownerCredentials.password);
    setError('');
  };

  return (
    <div className="py-16 max-w-md mx-auto px-4 sm:px-6 space-y-6">
      {/* Notice Banner */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-900">
          <p className="font-bold">{siteData.ownerCredentials.notice}</p>
          <p className="text-[11px] text-amber-800 mt-0.5">
            This dashboard is for managing appointments, customer records, and simulated payment ledgers.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-lg space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-full bg-dark-900 border-2 border-gold-500 text-gold-400 font-serif font-bold text-xl flex items-center justify-center mx-auto shadow-inner">
            JD
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-dark-950">
            Salon Owner Portal
          </h1>
          <p className="text-xs text-stone-500">
            Sign in to access JD's Unisex Salon management dashboard.
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 text-rose-700 text-xs font-semibold border border-rose-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-stone-700">Username or Email</label>
            <div className="relative">
              <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-stone-700">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-dark-950 text-white font-medium text-xs hover:bg-gold-600 transition shadow"
            >
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              Sign In to Owner Portal
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Quick Fill Demo Helper */}
        <div className="pt-4 border-t border-stone-100 text-center space-y-2">
          <p className="text-[11px] text-stone-500">
            Default Demo Credentials: <span className="font-mono font-bold text-stone-800">admin</span> / <span className="font-mono font-bold text-stone-800">salonpassword</span>
          </p>
          <button
            type="button"
            onClick={fillDemoCredentials}
            className="text-xs text-gold-700 font-semibold hover:underline"
          >
            Auto-fill demo credentials
          </button>
        </div>
      </div>
    </div>
  );
}
