/*import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

const Chat = () => {

  
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", isBot: true },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages(prev => [...prev, { id: Date.now(), text: newMessage, isBot: false }]);
    setNewMessage('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: "I understand you're going through a difficult time. I'm here to listen and support you.",
        isBot: true
      }]);
    }, 1000);
  };

  return (


    
    <div className="pt-16 h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="h-full max-w-3xl mx-auto px-4 py-6 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm flex-1 flex flex-col overflow-hidden"
        >
          <div className="p-4 border-b dark:border-gray-700">
            <div className="flex items-center">
              <MessageCircle className="w-6 h-6 text-teal-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Anonymous Chat Support</h2>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[80%] rounded-lg p-3 ${
                  message.isBot 
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200' 
                    : 'bg-teal-500 text-white'
                }`}>
                  {message.text}
                </div>
              </motion.div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-teal-500 focus:border-teal-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors flex items-center"
              >
                <Send className="w-4 h-4 mr-1" />
                Send
              </button>
            </div>
          </form>
        </motion.div>
        
<section className="mt-16 text-center">
<h2 className="text-3xl font-semibold mb-8">
  You're Not Alone
</h2>
<p className="max-w-2xl mx-auto text-lg opacity-90">
  Join thousands of others who have found support and guidance through our platform. 
  Your journey to better mental health starts here, in a safe and judgment-free space.
</p>
</section>
      </div>
    </div>

  );
};

export default Chat;*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Mic, MicOff } from 'lucide-react'; // Import Mic and MicOff icons

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', isBot: true },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false); // State for recording
  const [isAudioRecording, setIsAudioRecording] = useState(false); // Manage audio recording state

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages(prev => [...prev, { id: Date.now(), text: newMessage, isBot: false }]);
    setNewMessage('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          text: "I understand you're going through a difficult time. I'm here to listen and support you.",
          isBot: true,
        },
      ]);
    }, 1000);
  };

  const handleToggleRecording = () => {
    setIsRecording(prev => !prev); // Toggle recording status
    if (!isRecording) {
      setIsAudioRecording(true); // Start the audio recording animation
    } else {
      setIsAudioRecording(false); // Stop the audio recording animation
    }
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setIsAudioRecording(false); // Stop recording animation
  };

  return (
    <div className="pt-16 h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="h-full max-w-3xl mx-auto px-4 py-6 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm flex-1 flex flex-col overflow-hidden"
        >
          <div className="p-4 border-b dark:border-gray-700">
            <div className="flex items-center">
              <MessageCircle className="w-6 h-6 text-teal-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Anonymous Chat Support</h2>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isBot
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      : 'bg-teal-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t dark:border-gray-700">
            <div className="flex space-x-2">
              {/* Conditionally render either input box or recording animation */}
              {isRecording ? (
                <div className="flex-1 flex items-center justify-center">
                  {/* Recording animation */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="w-10 h-10 bg-teal-400 rounded-full" // Changed to teal color
                  />
                  <span className="text-gray-500 dark:text-white ml-4">Recording...</span>
                  <button
                    onClick={handleStopRecording}
                    className="ml-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                  >
                    End Recording
                  </button>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-teal-500 focus:border-teal-500"
                  />
                  <button
                    type="button"
                    onClick={handleToggleRecording} // Handle click to toggle recording
                    className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors flex items-center"
                  >
                    {isRecording ? (
                      <MicOff className="w-4 h-4 mr-1" /> // Show MicOff icon while recording
                    ) : (
                      <Mic className="w-4 h-4 mr-1" /> // Show Mic icon when not recording
                    )}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors flex items-center"
                  >
                    <Send className="w-4 h-4 mr-1" />
                    Send
                  </button>
                </>
              )}
            </div>
          </form>
        </motion.div>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-8">You're Not Alone</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Join thousands of others who have found support and guidance through our platform.
            Your journey to better mental health starts here, in a safe and judgment-free space.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Chat;
