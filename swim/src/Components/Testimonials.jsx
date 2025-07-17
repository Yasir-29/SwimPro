import React, { useState } from "react";

const testimonials = [
  {
    name: "John D.",
    text: "SwimDesigners exceeded our expectations! The pool is stunning and the process was seamless.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah K.",
    text: "Professional, creative, and reliable. Our hotel pool is now the highlight of our property!",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mike L.",
    text: "Great team, great results. Highly recommend for any pool project.",
    img: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    name: "Emily R.",
    text: "From design to build, everything was top-notch. Thank you SwimDesigners!",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const visible = isMobile ? 1 : 3;
  const start = idx;
  const end = Math.min(idx + visible, testimonials.length);
  const canPrev = idx > 0;
  const canNext = end < testimonials.length;

  return (
    <div className="bg-[#F3F4F6] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0B1B30]">Testimonials</h2>
        <div className="flex justify-center mb-6 gap-4">
          <button onClick={() => setIdx(idx - 1)} disabled={!canPrev} className="px-3 py-1 rounded-full bg-white shadow disabled:opacity-40">&#8592;</button>
          <button onClick={() => setIdx(idx + 1)} disabled={!canNext} className="px-3 py-1 rounded-full bg-white shadow disabled:opacity-40">&#8594;</button>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.slice(start, end).map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#00BFFF]" />
              <p className="text-lg text-[#0B1B30]/80 mb-4">“{t.text}”</p>
              <span className="font-semibold text-[#0B1B30]">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 