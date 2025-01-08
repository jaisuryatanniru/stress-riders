const API_URL = 'http://localhost:5000/api';

export const api = {
  // Journal entries
  createJournalEntry: async (userId: string, content: string, mood: string) => {
    const response = await fetch(`${API_URL}/journal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: userId, content, mood }),
    });
    return response.json();
  },

  getJournalEntries: async (userId: string) => {
    const response = await fetch(`${API_URL}/journal/${userId}`);
    return response.json();
  },

  // Resources
  getResources: async () => {
    const response = await fetch(`${API_URL}/resources`);
    return response.json();
  },

  // User profile
  getProfile: async (userId: string) => {
    const response = await fetch(`${API_URL}/profile/${userId}`);
    return response.json();
  },

  updateProfile: async (userId: string, updates: any) => {
    const response = await fetch(`${API_URL}/profile/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    return response.json();
  },
};