import React from 'react';
import { format } from 'date-fns';
import { Booking } from '../types';

interface BookingListProps {
  bookings: Booking[];
}

export default function BookingList({ bookings }: BookingListProps) {
  if (bookings.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Current Bookings</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Vehicle</th>
                <th className="px-4 py-2">Route</th>
                <th className="px-4 py-2">Goods</th>
                <th className="px-4 py-2">Special Equipment</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Comments</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="px-4 py-2">{booking.customerName}</td>
                  <td className="px-4 py-2">{booking.vehicleType}</td>
                  <td className="px-4 py-2">{booking.origin} → {booking.destination}</td>
                  <td className="px-4 py-2">{booking.goodsType}</td>
                  <td className="px-4 py-2">{booking.specialEquipment ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-2">{format(new Date(booking.date), 'dd/MM/yyyy')}</td>
                  <td className="px-4 py-2">{booking.comments || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}