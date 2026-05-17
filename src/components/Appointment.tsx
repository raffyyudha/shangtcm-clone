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
    <section id="bookappointment" className="py-16 px-4 md:px-6 bg-[#f5f4ee]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-[#9a9e86] text-center font-normal mb-6 md:mb-8">
          Schedule An Appointment
        </h2>
        <p className="text-center text-[#2c3e35] text-sm mb-2 px-2">
          Please fill the form and we&apos;ll get back to you as soon as possible. Alternatively, you are welcome to give us at{" "}
          <a href="tel:62623735" className="text-[#9a9e86] hover:underline">xxxxxx</a> (xxxxxx),{" "}
          <a href="tel:63333270" className="text-[#9a9e86] hover:underline">xxxxxx</a> (xxxxxx),{" "}
          <a href="tel:63223908" className="text-[#9a9e86] hover:underline">xxxxxx</a> (xxxxxx), or send us an email at{" "}
          <a href="mailto:hello@shangtcm.com" className="text-[#9a9e86] hover:underline">hello@shangtcm.com</a>
        </p>
        <p className="text-center text-[#2c3e35] text-sm mb-8">and we&apos;ll be happy to answer all your questions</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#9a9e86] text-[#2c3e35]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#9a9e86] text-[#2c3e35]"
            />
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#9a9e86] text-gray-400"
            >
              <option value="">Select a location</option>
              <option value="boon-lay">xxxxxx</option>
              <option value="waterloo">xxxxxx</option>
              <option value="kovan">xxxxxx</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#9a9e86] text-[#2c3e35]"
            />
            <input
              type="date"
              placeholder="Choose Date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#9a9e86] text-[#2c3e35]"
            />
          </div>
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#9a9e86] text-white text-sm uppercase tracking-wider px-10 py-3.5 rounded-full hover:bg-[#888c74] transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
