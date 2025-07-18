import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Chennai",
      rating: 5,
      text: "Exceptional work by Veni Enterprises! They transformed our backyard into a stunning oasis. The attention to detail and quality of construction exceeded our expectations.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
    {
      name: "Priya Sharma",
      location: "Bangalore",
      rating: 5,
      text: "Professional team with excellent project management. They completed our resort pool project on time and within budget. Highly recommended for commercial projects.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
    {
      name: "Amit Patel",
      location: "Mumbai",
      rating: 5,
      text: "Outstanding service from design to completion. The waterproofing work is top-notch and the pool has been maintenance-free for over 2 years now.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
    {
      name: "Sunita Reddy",
      location: "Hyderabad",
      rating: 5,
      text: "Veni Enterprises delivered exactly what they promised. The 3D design helped us visualize the final result perfectly. Great team to work with!",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B30] mb-6">
            What Our <span className="text-[#00BFFF]">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
            us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] rounded-2xl p-8 relative hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#00BFFF]/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">"{testimonial.text}"</p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-15 h-15 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#0B1B30]">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#00BFFF] to-[#0099CC] rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Happy Clients?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let us create your dream swimming pool with the same dedication and quality.
            </p>
            <button className="bg-white text-[#00BFFF] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
