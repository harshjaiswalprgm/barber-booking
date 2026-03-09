import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ManageBookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = () => {
    axios
      .get("http://localhost:5000/api/bookings/all")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/bookings/${id}/status`, {
        status,
      });

      fetchBookings();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6 font-bold">Manage Bookings</h1>

      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Service</th>
            <th className="p-3">Date</th>
            <th className="p-3">Time</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b._id} className="border text-center">
              <td className="p-3">{b.name}</td>
              <td className="p-3">{b.phone}</td>
              <td className="p-3">{b.service}</td>
              <td className="p-3">{b.date}</td>
              <td className="p-3">{b.time}</td>

              <td className="p-3 font-semibold">
                {b.status === "booked" && (
                  <span className="text-blue-600">Booked</span>
                )}

                {b.status === "completed" && (
                  <span className="text-green-600">Completed</span>
                )}

                {b.status === "cancelled" && (
                  <span className="text-red-600">Cancelled</span>
                )}
              </td>

              <td className="p-3 flex gap-2 justify-center">
                <button
                  onClick={() => updateStatus(b._id, "completed")}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Complete
                </button>

                <button
                  onClick={() => updateStatus(b._id, "cancelled")}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
