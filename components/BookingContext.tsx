'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookingContextType {
  isOpen: boolean;
  prefilledService: string;
  prefilledPackage: string;
  openBooking: (serviceOrPackageName?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledPackage, setPrefilledPackage] = useState('');

  const openBooking = (name?: string) => {
    if (name) {
      if (name.toLowerCase().includes('package')) {
        setPrefilledPackage(name);
        setPrefilledService(name);
      } else {
        setPrefilledService(name);
        setPrefilledPackage('');
      }
    } else {
      setPrefilledService('');
      setPrefilledPackage('');
    }
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        prefilledService,
        prefilledPackage,
        openBooking,
        closeBooking
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
