import React from 'react';
import { useForm } from 'react-hook-form';
import { Booking } from '../types';

interface BookingFormProps {
  onSubmit: (data: Booking) => void;
}

const CITIES = [
  'Skikda', 'Algiers', 'Oran', 'Constantine', 'Annaba', 'Setif', 'Batna', 'Biskra',
  'Tlemcen', 'Bejaia', 'Blida', 'Tebessa', 'Djelfa', 'Jijel', 'Sidi Bel Abbes',
  'Tizi Ouzou', 'El Oued', 'Ghardaia', 'Mostaganem', 'Ouargla', 'Relizane',
  'Saida', 'Souk Ahras', 'Tiaret', 'Bordj Bou Arreridj', 'Medea', 'Mascara'
];

const VEHICLE_TYPES = [
  { value: 'truck', label: 'Truck' },
  { value: 'clark2T', label: 'Clark 2T' },
  { value: 'clark10T', label: 'Clark 10T' },
  { value: 'stacker', label: 'Stacker' }
];

const GOODS_TYPES = [
  { value: 'TC20', label: 'TC 20\'' },
  { value: 'TC40', label: 'TC 40\'' },
  { value: 'REEFER20', label: 'Reefer 20\'' },
  { value: 'REEFER40', label: 'Reefer 40\'' },
  { value: 'BIGBAG', label: 'Big Bag' },
  { value: 'DIVERS', label: 'Divers' }
];

export default function BookingForm({ onSubmit }: BookingFormProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Booking>();

  const onFormSubmit = (data: Booking) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Customer Name
          <input
            {...register('customerName', { required: 'Customer name is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </label>
        {errors.customerName && <p className="text-red-500 text-xs italic">{errors.customerName.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Vehicle Type
          <select
            {...register('vehicleType', { required: 'Vehicle type is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select vehicle type</option>
            {VEHICLE_TYPES.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </label>
        {errors.vehicleType && <p className="text-red-500 text-xs italic">{errors.vehicleType.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Origin
          <select
            {...register('origin', { required: 'Origin is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select origin</option>
            {CITIES.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>
        {errors.origin && <p className="text-red-500 text-xs italic">{errors.origin.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Destination
          <select
            {...register('destination', { required: 'Destination is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select destination</option>
            {CITIES.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>
        {errors.destination && <p className="text-red-500 text-xs italic">{errors.destination.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Type of Goods
          <select
            {...register('goodsType', { required: 'Type of goods is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select type of goods</option>
            {GOODS_TYPES.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </label>
        {errors.goodsType && <p className="text-red-500 text-xs italic">{errors.goodsType.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Special Equipment Required
          <select
            {...register('specialEquipment')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Comments
          <textarea
            {...register('comments')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={3}
            placeholder="Additional comments or special requirements..."
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date
          <input
            {...register('date', { required: 'Date is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
          />
        </label>
        {errors.date && <p className="text-red-500 text-xs italic">{errors.date.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Book Vehicle
      </button>
    </form>
  );
}