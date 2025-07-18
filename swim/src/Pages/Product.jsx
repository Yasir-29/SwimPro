import React from "react";

const products = [
  {
    name: "Swimming Pool Lights",
    description: "Enhance your pool’s ambiance with our waterproof LED lights.",
    image: "https://via.placeholder.com/300x200?text=Pool+Lights",
  },
  {
    name: "Pool Filters",
    description: "High-performance filtration systems for clean and clear water.",
    image: "https://via.placeholder.com/300x200?text=Pool+Filters",
  },
  {
    name: "Pool Pumps",
    description: "Energy-efficient pumps for smooth and powerful water circulation.",
    image: "https://via.placeholder.com/300x200?text=Pool+Pumps",
  },
  {
    name: "Jacuzzi Nozzles",
    description: "Durable nozzles for spa and jacuzzi installations.",
    image: "https://via.placeholder.com/300x200?text=Jacuzzi+Nozzles",
  },
  {
    name: "Pool Skimmers",
    description: "Efficiently remove debris and maintain water quality.",
    image: "https://via.placeholder.com/300x200?text=Pool+Skimmers",
  },
  {
    name: "Underwater Speakers",
    description: "Enjoy music while swimming with waterproof audio systems.",
    image: "https://via.placeholder.com/300x200?text=Underwater+Speakers",
  },
  {
    name: "Water Heaters",
    description: "Keep your pool warm and comfortable all year round.",
    image: "https://via.placeholder.com/300x200?text=Pool+Heaters",
  },
  {
    name: "Automatic Pool Cleaners",
    description: "Robotic systems to keep your pool spotless effortlessly.",
    image: "https://via.placeholder.com/300x200?text=Auto+Cleaners",
  },
];

export default function Product() {
  return (
    <section className="py-20 bg-white min-h-screen font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B30] mb-4">
            Our <span className="text-[#00BFFF]">Products</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We supply high-quality swimming pool accessories, pumps, filters, and lighting equipment across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-t-2xl w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#0B1B30] group-hover:text-[#00BFFF] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
