import React, { useState } from "react";
import Button from "../ui/Button";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
    console.log("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-20 container-xd">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-xd-blue mb-4">
          Contact Us
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 mb-2 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-xd-blue focus:border-xd-blue"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-xd-blue focus:border-xd-blue"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-xd-blue focus:border-xd-blue"
                placeholder="Your message"
                required
              />
            </div>

            <div>
              <Button
                type="submit"
                variant="red"
                size="lg"
                className="font-medium"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Right Column - Contact Info & Map */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-xd-blue mb-6">Get in Touch</h3>

          <div className="space-y-4 mb-8">
            {/* Email */}
            <div className="flex items-center">
              <div className="text-xd-red mr-3">
                <MdEmail className="w-6 h-6" />
              </div>
              <span className="text-gray-800">contact@glucova.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <div className="text-xd-red mr-3">
                <MdPhone className="w-6 h-6" />
              </div>
              <span className="text-gray-800">+51 902 614 512</span>
            </div>

            {/* Address */}
            <div className="flex items-center">
              <div className="text-xd-red mr-3">
                <MdLocationOn className="w-6 h-6" />
              </div>
              <span className="text-gray-800">
                Av. de la Marina 2810, San Miguel 15087, Lima, Peru
              </span>
            </div>
          </div>

          {/* Google Map (simple implementation) */}
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              title="GlucoVa Location"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5200157674963!2d-77.09580107493836!3d-12.076510588162625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c96528ea4a55%3A0x85a66d70e40870dd!2sUPC%20-%20Campus%20San%20Miguel!5e0!3m2!1ses-419!2spe!4v1746688792519!5m2!1ses-419!2spe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
