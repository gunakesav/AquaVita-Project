import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Factory, MapPin, Calendar, Users } from 'lucide-react';

const Project = () => {
  const projects = [
    {
      category: 'Residential',
      title: 'Modern Apartment Complex',
      location: 'Mumbai, Maharashtra',
      date: 'Completed: Jan 2024',
      clients: '500+ families',
      icon: Home,
      description: 'Installed advanced water purifier systems for entire residential complex',
    },
    {
      category: 'Commercial',
      title: 'Corporate Office Building',
      location: 'Delhi, NCR',
      date: 'Completed: Dec 2023',
      clients: '2000+ employees',
      icon: Building2,
      description: 'Complete water softening and purification system for commercial use',
    },
    {
      category: 'Industrial',
      title: 'Manufacturing Plant',
      location: 'Bangalore, Karnataka',
      date: 'Completed: Nov 2023',
      clients: 'Large scale',
      icon: Factory,
      description: 'Industrial-grade water treatment system for manufacturing processes',
    },
    {
      category: 'Residential',
      title: 'Luxury Villa Complex',
      location: 'Pune, Maharashtra',
      date: 'Completed: Oct 2023',
      clients: '100+ villas',
      icon: Home,
      description: 'Premium water purification solutions for luxury residential properties',
    },
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

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
          <h1 className="text-5xl font-bold text-[#0077be] mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our completed installation projects and case studies
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bubble-button"
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="product-card-bubble p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                  <project.icon size={32} className="text-[#0077be]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#0077be]/20 text-[#0077be] text-xs font-semibold">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0077be] mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-2 text-[#0077be]" />
                  {project.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-2 text-[#0077be]" />
                  {project.date}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users size={16} className="mr-2 text-[#0077be]" />
                  {project.clients}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-[#0077be] mb-8">Project Timeline</h2>
          <div className="product-card-bubble p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {['2020', '2021', '2022', '2023', '2024'].map((year, index) => (
                <div key={year} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border-2 border-[#0077be]">
                    <span className="text-[#0077be] font-bold">{year}</span>
                  </div>
                  <div className="text-sm text-gray-600">{index * 50}+ Projects</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
