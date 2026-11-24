import React from 'react';
import { isSalonOpenNow } from '../data/siteData';

export default function OpenStatusBadge({ className = '' }) {
  const isOpen = isSalonOpenNow();

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${
        isOpen
          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
          : 'bg-amber-50 text-amber-800 border border-amber-200'
      } ${className}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
        }`}
      />
      {isOpen ? 'Open Now • Closes 10 PM' : 'Closed • Opens 10 AM'}
    </span>
  );
}
