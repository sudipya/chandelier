import { NavLink } from "@/components/NavLink";
import { Home, Users, Building2, Wallet, Bus, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/students", icon: Users, label: "Students" },
    { to: "/rooms", icon: Building2, label: "Rooms" },
    { to: "/payments", icon: Wallet, label: "Payments" },
    { to: "/transport", icon: Bus, label: "Transport" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-card"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-[hsl(var(--sidebar-bg))] text-[hsl(var(--sidebar-fg))] w-64 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hostel Manager
          </h1>
          <p className="text-sm text-[hsl(var(--sidebar-fg))]/70 mt-1">Management System</p>
        </div>

        <nav className="px-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-[hsl(var(--sidebar-fg))]/80 hover:bg-[hsl(var(--sidebar-active))]/10 hover:text-[hsl(var(--sidebar-active))] transition-colors"
              activeClassName="bg-[hsl(var(--sidebar-active))] text-white hover:bg-[hsl(var(--sidebar-active))] hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};
