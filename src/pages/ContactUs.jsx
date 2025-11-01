import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import ConsultationForm from '../components/ConsultationForm';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gunakesav.s@gmail.com',
      link: 'mailto:gunakesav.s@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Your Address Here, City, State - PIN',
      link: null,
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Sat: 9:00 AM - 6:00 PM',
      link: null,
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[#0077be] mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us. We're here to help you with all your water purification needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="product-card-bubble p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm flex-shrink-0">
                    <info.icon size={24} className="text-[#0077be]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0077be] mb-1">{info.label}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-[#0077be] transition"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ConsultationForm />
          </div>
        </div>

        {/* Google Maps Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="product-card-bubble p-8"
        >
          <h2 className="text-2xl font-bold text-[#0077be] mb-4 flex items-center gap-2">
            <MapPin size={28} />
            Find Us on Map
          </h2>
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto text-[#0077be] mb-2" size={48} />
              <p className="text-gray-600">Google Maps Integration</p>
              <p className="text-sm text-gray-500 mt-2">
                Replace this with your Google Maps embed code
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
