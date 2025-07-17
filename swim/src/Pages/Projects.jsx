import React, { useState } from "react";

const projects = [
  { category: "Residential", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
  { category: "Commercial", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" },
  { category: "Residential", img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" },
  { category: "Commercial", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80" },
  { category: "Residential", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" },
  { category: "Commercial", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" },
];

const categories = ["All", "Residential", "Commercial"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <div className="bg-[#F3F4F6] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#0B1B30]">Our Projects</h2>
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl font-medium transition shadow-sm ${active === cat ? "bg-[#00BFFF] text-white" : "bg-white text-[#0B1B30] hover:bg-[#F3F4F6]"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Gallery */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map((proj, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200">
              <img src={proj.img} alt="Project" className="w-full h-56 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 