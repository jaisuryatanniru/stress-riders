import React, { useState } from 'react';
import { Smile, Meh, Frown } from 'lucide-react';

interface MoodTrackerProps {
  darkMode: boolean;
}

export default function MoodTracker({ darkMode }: MoodTrackerProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { icon: Smile, label: 'Good', color: 'text-green-500' },
    { icon: Meh, label: 'Okay', color: 'text-yellow-500' },
    { icon: Frown, label: 'Not Great', color: 'text-red-500' }
  ];

  return (
    <div className={`max-w-2xl mx-auto p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} mb-8`}>
      <h3 className="text-2xl font-semibold text-center mb-6">
        How are you feeling today?
      </h3>
      
      <div className="flex justify-center gap-8">
        {moods.map(({ icon: Icon, label, color }) => (
          <button
            key={label}
            onClick={() => setSelectedMood(label)}
            className={`flex flex-col items-center p-4 rounded-lg transition-all ${
              selectedMood === label
                ? `${color} scale-110`
                : 'opacity-50 hover:opacity-100'
            }`}
          >
            <Icon className="w-12 h-12 mb-2" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="mt-8 text-center animate-fade-in">
          <p className="text-lg mb-4">
            Thank you for sharing. Would you like to:
          </p>
          <div className="flex justify-center gap-4">
            <button className={`px-6 py-2 rounded-full ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
            } transition-colors`}>
              Talk About It
            </button>
            <button className={`px-6 py-2 rounded-full ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-gray-100 hover:bg-gray-200'
            } transition-colors`}>
              Try an Exercise
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
