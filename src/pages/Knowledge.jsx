import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Download, Search, Filter } from 'lucide-react';

const Knowledge = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      category: 'Water Quality',
      title: 'Understanding TDS in Water',
      type: 'Article',
      icon: FileText,
      description: 'Learn about Total Dissolved Solids and their impact on water quality',
      date: 'Jan 15, 2024',
    },
    {
      category: 'Maintenance',
      title: 'Water Purifier Maintenance Guide',
      type: 'Guide',
      icon: BookOpen,
      description: 'Step-by-step guide to maintaining your water purification system',
      date: 'Dec 20, 2023',
    },
    {
      category: 'Technology',
      title: 'RO vs UV: Which is Better?',
      type: 'Video',
      icon: Video,
      description: 'Comparison of Reverse Osmosis and UV purification technologies',
      date: 'Nov 10, 2023',
    },
    {
      category: 'Health',
      title: 'Benefits of Pure Water',
      type: 'Article',
      icon: FileText,
      description: 'Discover the health benefits of drinking purified water',
      date: 'Oct 5, 2023',
    },
    {
      category: 'Maintenance',
      title: 'Troubleshooting Common Issues',
      type: 'Guide',
      icon: BookOpen,
      description: 'Solutions to common water purifier problems',
      date: 'Sep 18, 2023',
    },
    {
      category: 'Technology',
      title: 'Smart Water Monitoring',
      type: 'Article',
      icon: FileText,
      description: 'How IoT is revolutionizing water quality monitoring',
      date: 'Aug 22, 2023',
    },
  ];

  const faqs = [
    {
      question: 'How often should I replace the water purifier filter?',
      answer: 'Typically, filters should be replaced every 6-12 months depending on usage and water quality.',
    },
    {
      question: 'What is the difference between a water purifier and softener?',
      answer: 'Water purifiers remove contaminants and bacteria, while softeners remove hardness-causing minerals like calcium and magnesium.',
    },
    {
      question: 'Do I need both a purifier and softener?',
      answer: 'It depends on your water quality. If your water is both contaminated and hard, you may benefit from both systems.',
    },
    {
      question: 'How much electricity does a water purifier consume?',
      answer: 'Most modern water purifiers are energy-efficient, consuming approximately 50-100 watts when in operation.',
    },
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-[#0077be] mb-4">Knowledge Center</h1>
          <p className="text-xl text-gray-600">
            Learn about water purification, maintenance tips, and best practices
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass-input w-full pl-12"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0077be] mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="product-card-bubble p-6 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                    <article.icon size={24} className="text-[#0077be]" />
                  </div>
                  <span className="px-2 py-1 rounded-full bg-[#0077be]/20 text-[#0077be] text-xs">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0077be] mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.type}</span>
                  <span>{article.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0077be] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="product-card-bubble p-6"
              >
                <h3 className="text-lg font-bold text-[#0077be] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div>
          <h2 className="text-3xl font-bold text-[#0077be] mb-6">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Product Catalog 2024',
              'Installation Guide PDF',
              'Maintenance Checklist',
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="product-card-bubble p-6 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0077be] mb-2">{resource}</h3>
                    <p className="text-sm text-gray-600">PDF Document</p>
                  </div>
                  <Download className="text-[#0077be]" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
