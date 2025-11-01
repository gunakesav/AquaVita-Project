import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sparkles } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  const { name, features, capacity, icon: Icon } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="product-card-bubble"
    >
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-4 rounded-full bg-white/20 backdrop-blur-sm"
          >
            <Icon size={48} className="text-[#0077be]" />
          </motion.div>
        </div>

        {/* Product Name */}
        <h3 className="text-2xl font-bold text-[#0077be] mb-4 text-center">{name}</h3>

        {/* Capacity */}
        {capacity && (
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-[#0077be] font-semibold text-sm">
              {capacity}
            </span>
          </div>
        )}

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="flex items-start text-gray-700"
            >
              <Sparkles size={16} className="mr-2 mt-1 text-[#0077be] flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Price Range */}
        <div className="text-center mb-6">
          <p className="text-xs text-gray-500 mb-2">Price Range</p>
          <div className="inline-block px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span className="text-[#0077be] font-semibold">Custom Quote</span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bubble-button"
          onClick={() => {
            window.location.href = '/contact';
          }}
        >
          Consult Now
        </motion.button>
      </div>

      {/* Decorative Bubbles */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-sm"></div>
    </motion.div>
  );
};

export default ProductCard;
