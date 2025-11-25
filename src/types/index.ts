export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  department: string;
  year: string;
  contact: string;
  email: string;
  address: string;
  roomId?: string;
  busPass?: boolean;
  admissionDate: string;
}

export interface Room {
  id: string;
  roomNumber: string;
  capacity: number;
  floor: number;
  occupied: number;
  status: 'available' | 'full' | 'maintenance';
  students: string[];
}

export interface Payment {
  id: string;
  studentId: string;
  studentName: string;
  amount: number;
  type: 'hostel' | 'transport' | 'other';
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
  paymentDate?: string;
  month: string;
}

export interface Transport {
  id: string;
  studentId: string;
  studentName: string;
  route: string;
  stopName: string;
  fee: number;
  validFrom: string;
  validUntil: string;
  status: 'active' | 'expired';
}

export interface DashboardStats {
  totalStudents: number;
  occupiedRooms: number;
  availableRooms: number;
  pendingPayments: number;
  activeBusPasses: number;
}
