"use client";

import { Button } from "primereact/button";

export default function Header({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Button
        icon="pi pi-bars"
        className="p-button-text"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <h2 className="text-xl font-bold">Admin Dashboard</h2>
      <Button label="Logout" icon="pi pi-sign-out" className="p-button-danger" />
    </header>
  );
}
