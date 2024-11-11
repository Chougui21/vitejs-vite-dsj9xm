import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import { Booking } from './types';

export default function App() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const handleSubmit = (booking: Booking) => {
    setBookings(prev => [...prev, { ...booking, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl md:max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Stora Log Booking</h1>
        <BookingForm onSubmit={handleSubmit} />
        <BookingList bookings={bookings} />
      </div>
    </div>
  );
}