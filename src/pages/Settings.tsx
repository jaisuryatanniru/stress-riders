import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Moon, Volume2 } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    sound: true,
    fontSize: 'medium',
  });

  const handleChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mb-12"> {/* Added mb-12 for bottom margin */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Settings</h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Moon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
              <label className="text-gray-700 dark:text-gray-200">Dark Mode</label>
            </div>
            <button
              onClick={() => handleChange('darkMode', !settings.darkMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.darkMode ? 'bg-teal-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
              <label className="text-gray-700 dark:text-gray-200">Notifications</label>
            </div>
            <button
              onClick={() => handleChange('notifications', !settings.notifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications ? 'bg-teal-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Volume2 className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
              <label className="text-gray-700 dark:text-gray-200">Sound Effects</label>
            </div>
            <button
              onClick={() => handleChange('sound', !settings.sound)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.sound ? 'bg-teal-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.sound ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Font Size
            </label>
            <select
              value={settings.fontSize}
              onChange={(e) => handleChange('fontSize', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;
