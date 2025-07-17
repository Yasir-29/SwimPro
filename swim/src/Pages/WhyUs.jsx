import React from "react";

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#00BFFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
    ),
    title: "Expert Team",
    desc: "Skilled professionals with decades of experience."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#00BFFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg>
    ),
    title: "Quality Materials",
    desc: "We use only the best, most durable materials."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#00BFFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12V4" /></svg>
    ),
    title: "Innovative Design",
    desc: "Modern, creative, and functional pool solutions."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#00BFFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3h.01" /><path d="M21 3v6h-6" /></svg>
    ),
    title: "Customer Focused",
    desc: "We listen, adapt, and deliver to your needs."
  }
];

const WhyUs = () => {
  return (
    <div className="relative bg-white py-20">
      {/* Decorative SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F3F4F6" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0B1B30]">Why Choose Us</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 bg-[#F3F4F6] rounded-2xl shadow hover:shadow-xl transition-all duration-200">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-[#0B1B30]/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs; 