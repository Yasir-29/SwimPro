"use client"

import { useState } from "react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [showAll, setShowAll] = useState(false)

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "resort", label: "Resort" },
  ]

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Pool",
      category: "residential",
      location: "Chennai",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Modern infinity pool with LED lighting",
    },
    {
      id: 2,
      title: "Resort Complex",
      category: "resort",
      location: "Goa",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Large resort pool with water features",
    },
    {
      id: 3,
      title: "Corporate Office",
      category: "commercial",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Rooftop commercial pool design",
    },
    {
      id: 4,
      title: "Private Residence",
      category: "residential",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Compact pool with spa features",
    },
    {
      id: 5,
      title: "Hotel Pool",
      category: "commercial",
      location: "Delhi",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Olympic-size hotel swimming pool",
    },
    {
      id: 6,
      title: "Beach Resort",
      category: "resort",
      location: "Kerala",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Beachfront infinity pool design",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B30] mb-6">
            Our <span className="text-[#00BFFF]">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of stunning swimming pools across India, from luxury residences to commercial
            complexes.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id)
                  setShowAll(false)
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-[#00BFFF] text-white shadow-lg"
                    : "bg-[#F3F4F6] text-[#0B1B30] hover:bg-[#00BFFF]/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Overlay without icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-[#00BFFF] bg-[#00BFFF]/10 px-3 py-1 rounded-full">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">{project.location}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1B30] mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && filteredProjects.length > 3 && (
          <div className="text-center mt-12">
            <button
              className="bg-[#00BFFF] hover:bg-[#0099CC] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              onClick={() => setShowAll(true)}
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
