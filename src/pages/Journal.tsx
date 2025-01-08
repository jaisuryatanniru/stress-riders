import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { api } from '../lib/api'; // Assuming your backend API calls are handled here
import { Calendar, Edit3 } from 'lucide-react';

const Journal = ({ userId }: { userId: string }) => {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState('');
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      loadEntries();
    }
  }, [userId]);

  const loadEntries = async () => {
    try {
      const data = await api.getJournalEntries(userId); // Fetch journal entries from your backend
      setEntries(data);
    } catch (error) {
      console.error('Error loading entries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!entry.trim() || !mood) return;

    try {
      await api.createJournalEntry(userId, entry, mood); // Create journal entry via your backend
      setEntry('');
      setMood('');
      loadEntries(); // Reload entries after adding a new one
    } catch (error) {
      console.error('Error saving entry:', error);
    }
  };

  const moods = [
    { label: 'Happy', color: 'bg-yellow-500' },
    { label: 'Calm', color: 'bg-blue-500' },
    { label: 'Anxious', color: 'bg-purple-500' },
    { label: 'Sad', color: 'bg-gray-500' },
    { label: 'Energetic', color: 'bg-green-500' },
  ];

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* New Entry Form */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">New Journal Entry</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How are you feeling?
              </label>
              <div className="flex flex-wrap gap-2">
                {moods.map((m) => (
                  <button
                    key={m.label}
                    type="button"
                    onClick={() => setMood(m.label)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      mood === m.label
                        ? `${m.color} text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="entry"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Write your thoughts
              </label>
              <textarea
                id="entry"
                rows={6}
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="What's on your mind today?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors flex items-center justify-center"
            >
              <Edit3 className="w-5 h-5 mr-2" />
              Save Entry
            </button>
          </form>
        </div>

        {/* Entries List */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Previous Entries</h2>

          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : entries.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No entries yet. Start journaling to see your entries here.
            </div>
          ) : (
            <div className="space-y-4">
              {entries.map((entry: any) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">
                        {new Date(entry.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        moods.find((m) => m.label === entry.mood)?.color
                      } text-white`}
                    >
                      {entry.mood}
                    </span>
                  </div>
                  <p className="text-gray-700">{entry.content}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Journal;
