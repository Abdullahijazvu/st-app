"use client";

import { LayoutDashboard, ShoppingCart, Box, Users, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={20} />, link: "/admin" },
  { name: "Products", icon: <Box size={20} />, link: "/admin/products" },
  { name: "Customers", icon: <Users size={20} />, link: "/admin/customers" },
  { name: "Orders", icon: <ShoppingCart size={20} />, link: "/admin/orders" },
];

export default function AdminSidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      } bg-white text-black h-screen p-4 flex flex-col border-r border-gray-200`}
    >
      {/* Toggle Sidebar Button */}
      <button
        className="p-2 mb-4 bg-transparent border-none hover:bg-gray-200 text-black self-end"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Dashboard Title */}
      {isOpen && (
        <div className="mb-6 text-xl font-bold text-center">Dashboard</div>
      )}

      {/* Sidebar Menu */}
      <ul className="space-y-4 flex-1">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 ${
              pathname === item.link ? "font-bold" : ""
            }`}
          >
            <span>{item.icon}</span>
            {isOpen && (
              <Link href={item.link} className="text-black">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
