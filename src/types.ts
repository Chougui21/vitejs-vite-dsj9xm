export interface Booking {
  id?: number;
  customerName: string;
  vehicleType: 'truck' | 'clark2T' | 'clark10T' | 'stacker';
  origin: string;
  destination: string;
  goodsType: 'TC20' | 'TC40' | 'REEFER20' | 'REEFER40' | 'BIGBAG' | 'DIVERS';
  specialEquipment: boolean;
  comments?: string;
  date: string;
}