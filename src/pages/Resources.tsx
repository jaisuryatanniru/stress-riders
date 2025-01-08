import React from 'react';
import { motion } from 'framer-motion';
import { Book, Brain, Heart } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: 'Mental Health Basics',
      description: 'Learn about common mental health conditions and their symptoms.',
      icon: Brain,
      category: 'Education'
    },
    {
      title: 'Self-Care Techniques',
      description: 'Discover practical techniques for maintaining mental wellness.',
      icon: Heart,
      category: 'Self-Help'
    },
    {
      title: 'Recommended Reading',
      description: 'Curated list of books and articles about mental health.',
      icon: Book,
      category: 'Reading'
    }
  ];

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12"> {/* Added mb-12 for bottom margin */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900">Mental Health Resources</h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore our collection of resources to support your mental health journey
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <resource.icon className="h-6 w-6 text-teal-600" />
              </div>
              <span className="ml-3 text-sm font-medium text-teal-600">
                {resource.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {resource.title}
            </h3>
            <p className="text-gray-600">
              {resource.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
