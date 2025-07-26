"use client";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { useState } from "react";

export default function AdminDashboard() {
  const [chartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{ label: "Sales", data: [300, 450, 600, 800, 950], backgroundColor: "#6366F1" }],
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <Card title="Total Sales" className="p-4">
          <p className="text-xl font-semibold">$12,500</p>
        </Card>
        <Card title="Total Orders" className="p-4">
          <p className="text-xl font-semibold">320</p>
        </Card>
        <Card title="New Customers" className="p-4">
          <p className="text-xl font-semibold">50</p>
        </Card>
      </div>
      <div className="mt-6">
        <Card title="Sales Overview">
          <Chart type="bar" data={chartData} />
        </Card>
      </div>
    </div>
  );
}
