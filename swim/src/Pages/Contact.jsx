import React from "react";
import Button from "./Button";
import bgImage from "../assets/pool-1.jpeg"; 

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="rounded-3xl shadow-xl max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-10 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.10)" }} 
      >
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#05243A]">
            Get a Free Quote
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium text-black">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0077B6] outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-black">Mobile No</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0077B6] outline-none"
                placeholder="Enter your mobile number"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-black">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0077B6] outline-none"
                placeholder="Your Email Address"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-black">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0077B6] outline-none"
                rows="5"
                placeholder="How can we help you?"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2298755988586!2d80.1266258!3d13.1036508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52624f15c6960d%3A0xa546025854c252f0!2sVeni%20Enterprises%20SWIM%20DESIGNERS!5e0!3m2!1sen!2sin!4v1721287921597!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
