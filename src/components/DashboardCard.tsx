import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface DashboardCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend?: string;
  color?: "primary" | "success" | "warning" | "secondary";
}

export const DashboardCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend,
  color = "primary" 
}: DashboardCardProps) => {
  const colorClasses = {
    primary: "text-primary",
    success: "text-success",
    warning: "text-warning",
    secondary: "text-secondary",
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-muted-foreground text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
          {trend && (
            <p className="text-xs text-muted-foreground mt-1">{trend}</p>
          )}
        </div>
        <div className={`p-4 rounded-full bg-gradient-to-br ${colorClasses[color]}/10`}>
          <Icon className={`h-8 w-8 ${colorClasses[color]}`} />
        </div>
      </div>
    </Card>
  );
};
