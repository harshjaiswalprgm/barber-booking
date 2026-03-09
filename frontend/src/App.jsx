import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageBookings from "./pages/admin/ManageBookings";
import SalonSettings from "./pages/admin/SalonSettings";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* WEBSITE */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <BookingForm />
              <Footer />

            </>
          }
        />

        {/* ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/bookings" element={<ManageBookings />} />
        <Route path="/admin/settings" element={<SalonSettings />} />

      </Routes>

    </BrowserRouter>
  );
}