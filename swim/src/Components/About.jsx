import React from "react";

const About = () => {
  return (
    <div className="bg-[#F3F4F6] py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
            alt="About SwimDesigners"
            className="rounded-3xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B1B30]">About SwimDesigners</h2>
          <p className="text-lg text-[#0B1B30]/80 mb-6">
            SwimDesigners is a leading pool design and construction company, specializing in bespoke aquatic environments for homes, hotels, and resorts. Our team blends creativity, engineering, and craftsmanship to deliver stunning, functional pools tailored to your lifestyle.
          </p>
          <ul className="space-y-3 text-[#0B1B30]/90">
            <li>✓ 20+ years of experience</li>
            <li>✓ Award-winning designs</li>
            <li>✓ End-to-end project management</li>
            <li>✓ Sustainable and innovative solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About; 