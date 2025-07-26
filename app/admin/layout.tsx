"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state

  return (
    <div className="flex h-screen">
      {/* Sidebar (fixed on left) */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Right side (Main content) */}
      <div className="flex flex-col flex-1">
        <Header setIsOpen={setIsOpen} /> {/* Top Navbar */}
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
