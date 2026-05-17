"use client";

import { useState } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    location: "",
    email: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="bookappointment" className="py-16 px-6 bg-[#f8f6f2]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-[#b5b099] text-center font-normal mb-8">
          Schedule An Appointment
        </h2>
        <p className="text-center text-[#3c312d] text-sm mb-2">
          Please fill the form and we'll get back to you as soon as possible. Alternatively, you are welcome to give us at{" "}
          <a href="tel:62623735" className="text-[#b5b099] hover:underline">62623735</a> (Boon Lay),{" "}
          <a href="tel:63333270" className="text-[#b5b099] hover:underline">63333270</a> (Waterloo),{" "}
          <a href="tel:63223908" className="text-[#b5b099] hover:underline">63223908</a> (Kovan), or send us an email at{" "}
          <a href="mailto:hello@shangtcm.com" className="text-[#b5b099] hover:underline">hello@shangtcm.com</a>
        </p>
        <p className="text-center text-[#3c312d] text-sm mb-8">and we'll be happy to answer all your questions</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#b5b099]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#b5b099]"
            />
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#b5b099] text-gray-400"
            >
              <option value="">Select a location</option>
              <option value="boon-lay">Boon Lay</option>
              <option value="waterloo">Waterloo</option>
              <option value="kovan">Kovan</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#b5b099]"
            />
            <input
              type="date"
              placeholder="Choose Date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#b5b099]"
            />
          </div>
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#b5b099] text-white text-sm uppercase tracking-wider px-10 py-4 hover:bg-[#9a957f] transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
