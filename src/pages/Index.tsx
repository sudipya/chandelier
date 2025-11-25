import { DashboardCard } from "@/components/DashboardCard";
import { Sidebar } from "@/components/Sidebar";
import { Users, Building2, DollarSign, Bus, TrendingUp } from "lucide-react";
import { mockStudents, mockRooms, mockPayments, mockTransport } from "@/data/mockData";
import { Card } from "@/components/ui/card";

const Index = () => {
  const totalStudents = mockStudents.length;
  const occupiedRooms = mockRooms.filter(r => r.occupied > 0).length;
  const availableRooms = mockRooms.filter(r => r.status === 'available').length;
  const pendingPayments = mockPayments.filter(p => p.status === 'pending').length;
  const activeBusPasses = mockTransport.filter(t => t.status === 'active').length;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to Hostel Management System</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard
              title="Total Students"
              value={totalStudents}
              icon={Users}
              trend="+12% from last month"
              color="primary"
            />
            <DashboardCard
              title="Occupied Rooms"
              value={occupiedRooms}
              icon={Building2}
              trend={`${availableRooms} available`}
              color="success"
            />
            <DashboardCard
              title="Pending Payments"
              value={pendingPayments}
              icon={DollarSign}
              trend="Due this month"
              color="warning"
            />
            <DashboardCard
              title="Active Bus Passes"
              value={activeBusPasses}
              icon={Bus}
              trend="Current semester"
              color="secondary"
            />
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Recent Admissions</h2>
              </div>
              <div className="space-y-4">
                {mockStudents.slice(0, 3).map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.department}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{student.rollNumber}</p>
                      <p className="text-xs text-muted-foreground">Room {student.roomId}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="h-5 w-5 text-warning" />
                <h2 className="text-xl font-semibold">Pending Payments</h2>
              </div>
              <div className="space-y-4">
                {mockPayments.filter(p => p.status === 'pending').map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">{payment.studentName}</p>
                      <p className="text-sm text-muted-foreground">{payment.month}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-warning">₹{payment.amount}</p>
                      <p className="text-xs text-muted-foreground">Due: {payment.dueDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
