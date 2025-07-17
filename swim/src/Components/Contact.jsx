import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B1B30]">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00BFFF] outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00BFFF] outline-none" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00BFFF] outline-none" rows="5" placeholder="How can we help you?" />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
        {/* Google Map Embed */}
        <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614037700000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact; 