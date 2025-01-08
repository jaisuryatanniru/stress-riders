import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, BookOpen, BookMarked, MessageCircle, Settings, Moon, Sun, Menu, Brain, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Heart },
    { path: '/chat', label: 'Chat Support', icon: MessageCircle },
    { path: '/resources', label: 'Resources', icon: BookOpen },
    { path: '/journal', label: 'Journal', icon: BookMarked },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <nav
      className={`sticky top-0 z-50 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } backdrop-blur-md shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Brain className="w-6 h-6 text-teal-600" /> {/* Peace icon */}
            <h1 className="text-xl font-bold">Stress Riders</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === path
                    ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                    : 'border-transparent text-gray-500 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Link>
            ))}

            

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Profile Link */}
            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="inline-flex items-center text-gray-500 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400"
              >
                <User className="w-5 h-5" /> {/* Profile icon */}
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === path
                    ? 'bg-teal-500 text-white dark:bg-teal-400'
                    : 'text-gray-500 hover:bg-teal-500 hover:text-white dark:text-gray-300 dark:hover:bg-teal-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="w-4 h-4 mr-2 inline-block" />
                {label}
              </Link>
            ))}
            {/* Profile Link in Mobile Menu */}
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm font-medium text-gray-500 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="w-4 h-4 mr-2 inline-block" />
              Profile
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
