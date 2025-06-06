import React, { useState } from "react";
import Button from "../ui/Button";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

const ContactUs: React.FC = () => {
  const { t } = useTranslation("contact");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    <section id="contact" className="py-20 container-xd" ref={ref}>
      <div className="container-xd">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-xd-blue mb-4">
            {t("title")}
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  {t("name.label")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-xd-blue focus:border-xd-blue"
                  placeholder={t("name.placeholder")}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  {t("email.label")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-xd-blue focus:border-xd-blue"
                  placeholder={t("email.placeholder")}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  {t("message.label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-xd-blue focus:border-xd-blue"
                  placeholder={t("message.placeholder")}
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
                  {t("button")}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Right Column - Contact Info & Map */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-xd-blue mb-6">
              {t("info.title")}
            </h3>

            <div className="space-y-4 mb-8">
              {/* Email */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-xd-red mr-3">
                  <MdEmail className="w-6 h-6" />
                </div>
                <span className="text-gray-800">{t("info.email")}</span>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-xd-red mr-3">
                  <MdPhone className="w-6 h-6" />
                </div>
                <span className="text-gray-800">{t("info.phone")}</span>
              </motion.div>

              {/* Address */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="text-xd-red mr-3">
                  <MdLocationOn className="w-6 h-6" />
                </div>
                <span className="text-gray-800">{t("info.address")}</span>
              </motion.div>
            </div>

            {/* Google Map (simple implementation) */}
            <motion.div
              className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <iframe
                title="GlucoVa Location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5200157674963!2d-77.09580107493836!3d-12.076510588162625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c96528ea4a55%3A0x85a66d70e40870dd!2sUPC%20-%20Campus%20San%20Miguel!5e0!3m2!1ses-419!2spe!4v1746688792519!5m2!1ses-419!2spe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
