import React, { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import placeholder from "../assets/placeholder.png";

const testimonialsData = [
  {
    name: "Rakesh David",
    location: "Srilanka",
    rating: 5,
    text: "Exceptional work by Veni Enterprises! They transformed our backyard into a stunning oasis. The attention to detail and quality of construction exceeded our expectations.",
    image: placeholder,
  },
  {
    name: "Prasanna Kumar",
    location: "Bahrain",
    rating: 5,
    text: "Professional team with excellent project management. They completed our resort pool project on time and within budget. Highly recommended for commercial projects.",
    image: placeholder,
  },
  {
    name: "Subash Krishnan",
    location: "Thootukudi",
    rating: 5,
    text: "Outstanding service from design to completion. The waterproofing work is top-notch and the pool has been maintenance-free for over 2 years now.",
    image: placeholder,
  },
  {
    name: "Sriram Umakanthan",
    location: "Chennai",
    rating: 5,
    text: "Veni Enterprises delivered exactly what they promised. The 3D design helped us visualize the final result perfectly. Great team to work with!",
    image: placeholder,
  },
  {
    name: "Rajini Gopal",
    location: "Coimbatore",
    rating: 5,
    text: "Their dedication to quality and precision is unmatched. The pool's tile finish and lighting exceeded our expectations.",
    image: placeholder,
  },
  {
    name: "Harish Arvind",
    location: "Maldives",
    rating: 5,
    text: "Best commercial pool builders! Clean work, fast delivery, and no compromise on quality.",
    image: placeholder,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonialsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonialsData.slice(currentIndex, currentIndex + 2);

  return (
    <section className="py-20 bg-gradient-to-b from-[#E1F5FE] via-white to-[#ffffff] transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0277BD] mb-4 drop-shadow-sm">
            What Our <span className="text-[#039BE5]">Clients Say</span>
          </h2>
          <p className="text-lg text-[#0277BD]/80 max-w-2xl mx-auto">
            Real stories from clients who trusted Veni Enterprises with their vision.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#E0F7FA] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="absolute top-6 right-6 text-[#81D4FA]/40">
                <Quote className="w-8 h-8" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="leading-relaxed mb-6 text-gray-700 text-base">"{testimonial.text}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

