import { Waves, Wrench, Droplets, Sparkles } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Pool Design",
      description: "Custom swimming pool designs tailored to your space and preferences with 3D visualization.",
      features: ["3D Design", "Custom Layouts", "Modern Aesthetics"],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Construction",
      description: "Complete pool construction services using premium materials and advanced techniques.",
      features: ["Quality Materials", "Expert Installation", "Timely Delivery"],
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Waterproofing",
      description: "Advanced waterproofing solutions ensuring long-lasting protection and durability.",
      features: ["Advanced Sealants", "Leak Prevention", "Long-term Warranty"],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Accessories",
      description: "Premium pool accessories including lighting, filtration, and automation systems.",
      features: ["LED Lighting", "Filtration Systems", "Pool Automation"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-[#E0F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B30] mb-6">
            Our <span className="text-[#00BFFF]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive swimming pool solutions from concept to completion, backed by years of expertise and
            innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00BFFF] transition-colors duration-300">
                <div className="text-[#00BFFF] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0B1B30] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>



      </div>
    </section>
  )
}
