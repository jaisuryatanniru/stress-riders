import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, ArrowRight, BookOpen, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Mock user for the sake of this example
  const user = null; // Set this to a user object if authenticated

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Your Journey to <span className="text-teal-600">Mental Wellness</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Find peace, support, and understanding in a safe, anonymous environment.
              Start your journey to better mental health today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {!user ? (
                <Link
                  to="/chat"
                  className="bg-teal-500 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-colors flex items-center"
                >
                  Start Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              ) : (
                <Link
                  to="/journal"
                  className="bg-teal-500 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-colors flex items-center"
                >
                  Continue Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              )}
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MessageCircle,
                title: '24/7 Anonymous Support',
                description: 'Connect with caring professionals anytime, anywhere, completely anonymously.',
                color: 'bg-blue-500',
              },
              {
                icon: BookOpen,
                title: 'Guided Self-Help',
                description: 'Access evidence-based resources and exercises for your mental wellness journey.',
                color: 'bg-teal-500',
              },
              {
                icon: Users,
                title: 'Supportive Community',
                description: 'Join a community of people who understand and support each other.',
                color: 'bg-purple-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 2) }}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out p-6"
              >
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="bg-white rounded-2xl shadow-xl p-10 mb-16">
            <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
              What Our Community Says
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  quote: "This platform helped me find peace when I needed it most. The anonymous support made all the difference.",
                  author: "Nivas, community member",
                },
                {
                  quote: "The guided exercises and resources have become an essential part of my daily wellness routine.",
                  author: "Jaisurya, community member",
                },
                {
                  quote: "Finding others who understand exactly what I'm going through has been incredibly healing.",
                  author: "Gnaneshwar, random user",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * (index + 5) }}
                  className="bg-blue-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-gray-700 italic text-lg mb-6">"{testimonial.quote}"</p>
                  <p className="text-gray-500 text-sm font-semibold">- {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
