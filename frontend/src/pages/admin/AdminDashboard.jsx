import React from "react";

export default function AdminDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-10">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <a href="/admin/bookings" className="bg-white shadow p-6 rounded-xl">
          Manage Bookings
        </a>

        <a href="/admin/settings" className="bg-white shadow p-6 rounded-xl">
          Salon Settings
        </a>

        <a href="/" className="bg-white shadow p-6 rounded-xl">
          View Website
        </a>
      </div>
    </div>
  );
}
