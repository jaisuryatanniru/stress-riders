import React from 'react';
import { Link } from 'react-router-dom';
import { User, Edit, LogOut } from 'lucide-react'; // Import relevant icons

const Profile = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 flex items-center space-x-6">
          <User className="w-20 h-20 text-teal-500" /> {/* Profile icon */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Jai surya</h2>
            <p className="text-gray-500 dark:text-gray-400">Joined: January 2025</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-300">Email:</span>
              <span className="text-gray-900 dark:text-gray-200">sunnytan4825@example.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-300">Phone:</span>
              <span className="text-gray-900 dark:text-gray-200">+91 9392125469</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-300">Location:</span>
              <span className="text-gray-900 dark:text-gray-200">bhimavaram</span>
            </div>
          </div>
        </div>

        {/* Profile Actions */}
        <div className="flex justify-end space-x-4">
          <Link to="/settings" className="flex items-center text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
            <Edit className="w-5 h-5 mr-2" />
            Edit Profile
          </Link>
          <button className="flex items-center text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300">
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
