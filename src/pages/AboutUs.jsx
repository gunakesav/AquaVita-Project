import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Calendar, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const milestones = [
    { year: '2014', title: 'Company Founded', description: 'Started with a vision to provide clean water for all' },
    { year: '2016', title: 'First 1000 Customers', description: 'Reached our first major milestone' },
    { year: '2018', title: 'Industrial Expansion', description: 'Launched commercial and industrial solutions' },
    { year: '2020', title: 'National Recognition', description: 'Received awards for excellence in water treatment' },
    { year: '2024', title: '5000+ Customers', description: 'Serving thousands of satisfied customers nationwide' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To provide accessible, high-quality water purification solutions that improve health and quality of life for everyone.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To become India\'s leading water purification company, setting new standards in technology and service excellence.',
    },
    {
      icon: Award,
      title: 'Values',
      description: 'Integrity, Innovation, Customer-Centricity, and Environmental Responsibility guide everything we do.',
    },
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'BIS Certified Products',
    'NSF Certified Technology',
    'CE Mark Approved',
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
          <h1 className="text-5xl font-bold text-[#0077be] mb-4">About AquaVita</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading the way in water purification technology since 2014
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="product-card-bubble p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#0077be] mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              AquaVita was founded in 2014 with a simple yet powerful mission: to provide pure, 
              safe drinking water to every home and business in India. What started as a small 
              venture has grown into a trusted name in water purification, serving over 5,000 
              satisfied customers across the country.
            </p>
            <p>
              Our journey has been driven by innovation, quality, and an unwavering commitment 
              to customer satisfaction. We've continuously invested in cutting-edge technology 
              and expanded our product range to meet diverse water treatment needs.
            </p>
            <p>
              Today, AquaVita stands as a leader in water purification solutions, offering 
              everything from residential water purifiers to industrial-scale water treatment 
              systems. Our team of experts works tirelessly to ensure that every product we 
              deliver meets the highest standards of quality and performance.
            </p>
          </div>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="product-card-bubble p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                  <value.icon size={40} className="text-[#0077be]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0077be] mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#0077be] mb-8 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0077be] to-transparent opacity-30"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="product-card-bubble p-6">
                      <div className="flex items-center gap-4 mb-2">
                        <Calendar className="text-[#0077be]" size={20} />
                        <span className="font-bold text-[#0077be]">{milestone.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0077be] mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#0077be] border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="product-card-bubble p-8"
        >
          <h2 className="text-3xl font-bold text-[#0077be] mb-6 text-center">Certifications & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-white/10">
                <CheckCircle className="text-green-600" size={24} />
                <span className="text-gray-700 font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
