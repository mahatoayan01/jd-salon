import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import OwnerLoginPage from './pages/OwnerLoginPage';
import OwnerDashboardPage from './pages/OwnerDashboardPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-gold-500 selection:text-white">
      <ScrollToTop />
      <Header />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/owner-login" element={<OwnerLoginPage />} />
          <Route path="/owner" element={<OwnerDashboardPage />} />
          {/* Catch-all fallback redirects to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <FloatingActions />
      <Footer />
    </div>
  );
}
