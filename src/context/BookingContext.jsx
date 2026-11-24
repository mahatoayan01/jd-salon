import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteData } from '../data/siteData';

const BookingContext = createContext();

const STORAGE_KEYS = {
  CART: 'jds_salon_cart',
  BOOKINGS: 'jds_salon_bookings',
  PAYMENTS: 'jds_salon_payments',
  AUTH: 'jds_salon_owner_auth',
};

export function BookingProvider({ children }) {
  // Cart state: array of service items with quantities
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CART);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Bookings state: preloaded with sample data merged with user bookings
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
      if (saved) {
        return JSON.parse(saved);
      }
      return siteData.sampleBookings;
    } catch (e) {
      return siteData.sampleBookings;
    }
  });

  // Payments state
  const [payments, setPayments] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PAYMENTS);
      if (saved) {
        return JSON.parse(saved);
      }
      return siteData.samplePayments;
    } catch (e) {
      return siteData.samplePayments;
    }
  });

  // Owner Auth state
  const [isOwnerAuthenticated, setIsOwnerAuthenticated] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
    } catch (e) {
      return false;
    }
  });

  // Sync Cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Sync Bookings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    } catch (e) {
      console.error('Failed to save bookings to localStorage', e);
    }
  }, [bookings]);

  // Sync Payments to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(payments));
    } catch (e) {
      console.error('Failed to save payments to localStorage', e);
    }
  }, [payments]);

  // Cart operations
  const addToCart = (service) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === service.id);
      if (exists) {
        return prev.map((item) =>
          item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...service, quantity: 1 }];
    });
  };

  const removeFromCart = (serviceId) => {
    setCart((prev) => prev.filter((item) => item.id !== serviceId));
  };

  const updateQuantity = (serviceId, qty) => {
    if (qty <= 0) {
      removeFromCart(serviceId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === serviceId ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotalAmount = cart.reduce((sum, item) => sum + (item.priceNum || 0) * item.quantity, 0);
  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Add new booking from checkout flow
  const createBooking = (bookingData) => {
    const newBookingId = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking = {
      id: newBookingId,
      customerName: bookingData.customerName,
      phone: bookingData.phone,
      email: bookingData.email || 'N/A',
      services: cart.map((item) => ({
        name: item.name,
        priceNum: item.priceNum,
        quantity: item.quantity,
      })),
      stylist: bookingData.stylist || 'Any Available Stylist',
      date: bookingData.date,
      timeSlot: bookingData.timeSlot,
      totalAmount: cartTotalAmount,
      paymentMethod: bookingData.paymentMethod,
      status: 'Confirmed',
      notes: bookingData.notes || '',
      createdAt: new Date().toISOString(),
      sample: false, // Real user demo booking
    };

    const newPayment = {
      id: `PAY-${Math.floor(100 + Math.random() * 900)}`,
      bookingId: newBookingId,
      customerName: bookingData.customerName,
      amount: cartTotalAmount,
      method: bookingData.paymentMethod,
      status: bookingData.paymentMethod === 'Pay at salon' ? 'Pending' : 'Demo Paid',
      date: new Date().toLocaleString(),
      sample: false,
    };

    setBookings((prev) => [newBooking, ...prev]);
    setPayments((prev) => [newPayment, ...prev]);
    clearCart();

    return newBooking;
  };

  // Status updates for Owner Dashboard
  const updateBookingStatus = (bookingId, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: newStatus } : b))
    );
  };

  // Owner authentication
  const ownerLogin = (username, password) => {
    if (
      (username === siteData.ownerCredentials.username || username === 'owner@jdssalon.com') &&
      password === siteData.ownerCredentials.password
    ) {
      setIsOwnerAuthenticated(true);
      try {
        localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
      } catch (e) {}
      return { success: true };
    }
    return { success: false, error: 'Invalid username or password' };
  };

  const ownerLogout = () => {
    setIsOwnerAuthenticated(false);
    try {
      localStorage.removeItem(STORAGE_KEYS.AUTH);
    } catch (e) {}
  };

  const resetAllDataToDefault = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.CART);
      localStorage.removeItem(STORAGE_KEYS.BOOKINGS);
      localStorage.removeItem(STORAGE_KEYS.PAYMENTS);
    } catch (e) {}
    setCart([]);
    setBookings(siteData.sampleBookings);
    setPayments(siteData.samplePayments);
  };

  return (
    <BookingContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotalAmount,
        cartTotalItems,
        bookings,
        payments,
        createBooking,
        updateBookingStatus,
        isOwnerAuthenticated,
        ownerLogin,
        ownerLogout,
        resetAllDataToDefault,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
