import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Resources from './pages/Resources';
import Journal from './pages/Journal';
import Settings from './pages/Settings';
import { Features } from './components/features';
import MoodTracker from './components/moodtracker';
import Profile from './components/profile'; // Import Profile component


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // Now this is inside the Router context

  console.log(location.pathname); // Debug log to check the current path
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} /> {/* Profile route */}

        </Routes>
      </AnimatePresence>

      {/* Only render Features and MoodTracker on the homepage */}
      {isHomePage && (
        <>
          <Features />
          <section className="mt-16">
            <MoodTracker darkMode={false} />
          </section>
        </>
      )}

      {/* Footer is rendered on all pages */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Stress Riders</h3>
              <p className="text-gray-400">-go to place for mental wellness and support.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-teal-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency</h3>
              <p className="text-gray-400">If you're in crisis, please call:</p>
              <p className="text-teal-400 font-semibold">988 - Suicide & Crisis Lifeline</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Stress Riders. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
