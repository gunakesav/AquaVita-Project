import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ConsultationForm from '../components/ConsultationForm';

const Products = () => {
  const products = [
    {
      name: 'Water Purifier',
      features: [
        'Multi-stage filtration system',
        'Removes 99.9% contaminants',
        'UV sterilization technology',
        'TDS control & monitoring',
      ],
      capacity: 'Capacity: 15L/hour',
      icon: Droplets,
    },
    {
      name: 'Water Softener',
      features: [
        'Ion exchange technology',
        'Removes hardness minerals',
        'Protects appliances from scale',
        'Automatic regeneration system',
      ],
      capacity: 'Capacity: 2000L/day',
      icon: Shield,
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[#0077be] mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium water purification solutions designed for your needs
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* Consultation Form Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0077be] mb-4">
              Need Expert Advice?
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and our experts will get back to you within 24 hours
            </p>
          </motion.div>

          <ConsultationForm />
        </div>
      </div>
    </div>
  );
};

export default Products;
