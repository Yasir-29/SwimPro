import { Clock, Shield, Users, DollarSign, Award, Headphones } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-[#00B8D9]" />, // aqua blue
      title: "Timely Delivery",
      description: "We complete projects on schedule without compromising quality standards.",
      bg: "bg-[#E0F7FA]",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#007BFF]" />, // light blue
      title: "ISI Materials",
      description: "Only premium ISI certified materials used for long-lasting durability.",
      bg: "bg-[#E3F2FD]",
    },
    {
      icon: <Users className="w-8 h-8 text-[#009688]" />, // teal
      title: "Expert Team",
      description: "Skilled professionals with years of experience in pool construction.",
      bg: "bg-[#E0F2F1]",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#673AB7]" />, // purple
      title: "Cost-Effective",
      description: "Competitive pricing without hidden costs or compromise on quality.",
      bg: "bg-[#EDE7F6]",
    },
    {
      icon: <Award className="w-8 h-8 text-[#EF6C00]" />, // orange
      title: "Quality Assurance",
      description: "Rigorous quality checks at every stage of construction process.",
      bg: "bg-[#FFF3E0]",
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#D32F2F]" />, // red
      title: "24/7 Support",
      description: "Round-the-clock customer support for maintenance and queries.",
      bg: "bg-[#FFEBEE]",
    },
  ];

  return (
    <section className="py-20 bg-[#C6F3F9] text-[#0B1B30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-[#0388A6]">Veni Enterprises</span>
          </h2>
          <p className="text-xl text-[#1B3B4B] max-w-3xl mx-auto">
            Discover what sets us apart in the swimming pool industry and why clients across India trust us with their projects.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 ${benefit.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300`}
              >
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-[#1B3B4B] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
