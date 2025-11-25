import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Bus, MapPin, Calendar } from "lucide-react";
import { mockTransport } from "@/data/mockData";

const Transport = () => {
  const activePasses = mockTransport.filter(t => t.status === 'active').length;
  const totalRevenue = mockTransport.reduce((sum, t) => sum + t.fee, 0);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Transport Management</h1>
              <p className="text-muted-foreground">Manage bus passes and transportation</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Issue Bus Pass
            </Button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Bus Passes</p>
                  <p className="text-3xl font-bold">{activePasses}</p>
                  <p className="text-sm text-muted-foreground mt-1">Current semester</p>
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <Bus className="h-8 w-8 text-primary" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                  <p className="text-3xl font-bold text-success">₹{totalRevenue.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground mt-1">This semester</p>
                </div>
                <div className="p-3 rounded-full bg-success/10">
                  <Bus className="h-8 w-8 text-success" />
                </div>
              </div>
            </Card>
          </div>

          {/* Transport Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockTransport.map((transport) => (
              <Card key={transport.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{transport.studentName}</h3>
                    <p className="text-sm text-muted-foreground">ID: {transport.studentId}</p>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={transport.status === 'active' 
                      ? 'bg-success/10 text-success border-success/20' 
                      : 'bg-muted text-muted-foreground'}
                  >
                    {transport.status.toUpperCase()}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5">
                    <Bus className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{transport.route}</p>
                      <p className="text-xs text-muted-foreground">Bus Route</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{transport.stopName}</p>
                      <p className="text-xs text-muted-foreground">Pickup Point</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">
                        {transport.validFrom} to {transport.validUntil}
                      </p>
                      <p className="text-xs text-muted-foreground">Validity Period</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Semester Fee</span>
                      <span className="text-xl font-bold text-primary">₹{transport.fee}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm" className="flex-1">
                    Renew
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Available Routes */}
          <Card className="p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Available Routes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Route A - City Center', 'Route B - North Campus', 'Route C - South Zone'].map((route) => (
                <div key={route} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <Bus className="h-5 w-5 text-primary" />
                    <p className="font-medium">{route}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Multiple pickup points available</p>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    View Stops
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Transport;
