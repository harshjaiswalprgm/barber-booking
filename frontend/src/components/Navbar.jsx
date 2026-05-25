// import React, { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-lg text-white shadow-lg">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-yellow-400">MK Salon</h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 font-medium">
//           <li className="hover:text-yellow-400 cursor-pointer transition">
//             Home
//           </li>

//           <li className="hover:text-yellow-400 cursor-pointer transition">
//             Services
//           </li>

//           <li className="hover:text-yellow-400 cursor-pointer transition">
//             About
//           </li>

//           <li className="hover:text-yellow-400 cursor-pointer transition">
//             Gallery
//           </li>

//           <li className="hover:text-yellow-400 cursor-pointer transition">
//             Contact
//           </li>
//         </ul>

//         {/* Book Button */}
//         <button className="hidden md:block bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
//           Book Now
//         </button>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-black border-t border-gray-700">
//           <ul className="flex flex-col items-center gap-6 py-6 text-lg">
//             <li className="hover:text-yellow-400">Home</li>
//             <li className="hover:text-yellow-400">Services</li>
//             <li className="hover:text-yellow-400">About</li>
//             <li className="hover:text-yellow-400">Gallery</li>
//             <li className="hover:text-yellow-400">Contact</li>

//             <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold">
//               Book Now
//             </button>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-lg text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1
          className="text-2xl font-bold text-yellow-400 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          MK Salon
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li onClick={() => scrollToSection("home")} className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li onClick={() => scrollToSection("services")} className="hover:text-yellow-400 cursor-pointer">Services</li>
          <li onClick={() => scrollToSection("about")} className="hover:text-yellow-400 cursor-pointer">About</li>
          <li onClick={() => scrollToSection("gallery")} className="hover:text-yellow-400 cursor-pointer">Gallery</li>
          <li onClick={() => scrollToSection("contact")} className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        {/* Book Button */}
        <button
          onClick={() => scrollToSection("booking")}
          className="hidden md:block bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg">
            <li onClick={() => scrollToSection("home")} className="hover:text-yellow-400">Home</li>
            <li onClick={() => scrollToSection("services")} className="hover:text-yellow-400">Services</li>
            <li onClick={() => scrollToSection("about")} className="hover:text-yellow-400">About</li>
            <li onClick={() => scrollToSection("gallery")} className="hover:text-yellow-400">Gallery</li>
            <li onClick={() => scrollToSection("contact")} className="hover:text-yellow-400">Contact</li>

            <button
              onClick={() => scrollToSection("booking")}
              className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold"
            >
              Book Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}