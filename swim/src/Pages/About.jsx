import { CheckCircle, Award, Users, MapPin } from "lucide-react"
import aboutImage from "../assets/About.png"

export default function About() {
  const highlights = [
    {
      icon: <MapPin className="w-6 h-6 text-[#00BFFF]" />,
      title: "Pan-India Presence",
      description: "Serving clients across 25+ cities in India",
    },
    {
      icon: <Award className="w-6 h-6 text-[#00BFFF]" />,
      title: "10+ Years Experience",
      description: "Decade of expertise in pool construction",
    },
    {
      icon: <Users className="w-6 h-6 text-[#00BFFF]" />,
      title: "Expert Team",
      description: "Skilled professionals and certified engineers",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#00BFFF]" />,
      title: "Waterproofing Specialists",
      description: "Advanced waterproofing solutions guaranteed",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Swimming Pool Construction"
                className="w-full max-w-[1200px] h-auto object-contain mx-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-[#00BFFF]">Veni Enterprises</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Established in 2013, Veni Enterprises has been at the forefront of swimming pool design and construction
                in India. Based in Chennai, we've expanded our expertise across the nation, delivering world-class
                aquatic solutions for residential and commercial clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for
                premium swimming pool projects. From luxury villas to resort complexes, we bring your aquatic dreams to
                life.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00BFFF]/10 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
