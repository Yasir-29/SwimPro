import { Clock, Shield, Users, DollarSign, Award, Headphones } from "lucide-react"

export default function WhyUs() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "We complete projects on schedule without compromising quality standards.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "ISI Materials",
      description: "Only premium ISI certified materials used for long-lasting durability.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Skilled professionals with years of experience in pool construction.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost-Effective",
      description: "Competitive pricing without hidden costs or compromise on quality.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality checks at every stage of construction process.",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for maintenance and queries.",
    },
  ]

  return (
    <section className="py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B30] mb-6">
            Why Choose <span className="text-[#00BFFF]">Veni Enterprises</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets us apart in the swimming pool industry and why clients across India trust us with their
            projects.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-[#00BFFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00BFFF] transition-colors duration-300">
                <div className="text-[#00BFFF] group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0B1B30] mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">25+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
