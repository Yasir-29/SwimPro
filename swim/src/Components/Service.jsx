import React from "react";

const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-[#00BFFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
    ),
    title: "Custom Pool Design",
    desc: "Unique, tailored pool designs to fit your space and lifestyle."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#00BFFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg>
    ),
    title: "Construction & Build",
    desc: "Expert construction with premium materials and craftsmanship."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#00BFFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12V4" /></svg>
    ),
    title: "Renovation & Remodel",
    desc: "Modernize and upgrade your existing pool with new features."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#00BFFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3h.01" /><path d="M21 3v6h-6" /></svg>
    ),
    title: "Maintenance & Care",
    desc: "Ongoing pool maintenance to keep your water crystal clear."
  }
];

const Service = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0B1B30]">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#F3F4F6] rounded-2xl p-8 flex flex-col items-center text-center shadow transition-transform hover:-translate-y-2 hover:shadow-xl duration-200"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-[#0B1B30]/80">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service; 