import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, Shield, Zap, DollarSign, Award, Users, Calendar, TrendingUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = [
    {
      name: 'Water Purifier',
      features: [
        'Multi-stage filtration',
        'Removes 99.9% contaminants',
        'UV sterilization',
        'TDS control',
      ],
      capacity: 'Capacity: 15L/hour',
      icon: Droplets,
    },
    {
      name: 'Water Softener',
      features: [
        'Ion exchange technology',
        'Removes hardness minerals',
        'Protects appliances',
        'Regeneration system',
      ],
      capacity: 'Capacity: 2000L/day',
      icon: Shield,
    },
  ];

  const valueProps = [
    {
      icon: Shield,
      title: 'Advanced Filtration Technology',
      description: 'State-of-the-art purification systems',
    },
    {
      icon: Zap,
      title: 'Eco-Friendly Solutions',
      description: 'Sustainable water treatment methods',
    },
    {
      icon: TrendingUp,
      title: 'Smart Monitoring',
      description: 'Real-time water quality tracking',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Affordable solutions for everyone',
    },
  ];

  const stats = [
    { icon: Calendar, value: '10+', label: 'Years in Business' },
    { icon: Users, value: '5000+', label: 'Happy Customers' },
    { icon: Droplets, value: '10M+', label: 'Liters Purified' },
    { icon: Award, value: '15+', label: 'Awards Won' },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Droplets size={80} className="text-[#0077be]" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#0077be] mb-6">
              Pure Water, Pure Life
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Advanced water purification solutions for your home and business
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bubble-button text-lg"
              >
                Get Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0077be] mb-4">Our Products</h2>
            <p className="text-gray-600 text-lg">Premium water purification solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bubble-button"
              >
                View All Products
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose AquaVita */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0077be] mb-4">Why Choose AquaVita?</h2>
            <p className="text-gray-600 text-lg">We provide the best water purification solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="product-card-bubble text-center p-6"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                    <prop.icon size={40} className="text-[#0077be]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0077be] mb-3">{prop.title}</h3>
                <p className="text-gray-600 text-sm">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/50 to-cyan-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0077be] mb-4">Our Achievements</h2>
            <p className="text-gray-600 text-lg">Numbers that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="product-card-bubble text-center p-6"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon size={36} className="text-[#0077be]" />
                </div>
                <div className="text-4xl font-bold text-[#0077be] mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
