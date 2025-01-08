import React from 'react';
import { Activity, BookOpen, MessageCircle, Trophy } from 'lucide-react';

export function Features() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Take Care of Your Mental Health</h2>
          <p className="text-xl text-gray-600">Track your progress, learn new skills, and connect with others</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Activity />}
            title="Mood Tracking"
            description="Monitor your emotional well-being with our interactive mood tracker"
          />
          <FeatureCard
            icon={<MessageCircle />}
            title="Group Support"
            description="Join moderated group discussions with people who understand"
          />
          <FeatureCard
            icon={<BookOpen />}
            title="Learning Center"
            description="Access evidence-based resources and self-help guides"
          />
          <FeatureCard
            icon={<Trophy />}
            title="Achievement System"
            description="Earn badges and track your progress on your wellness journey"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-teal-400 transition-all hover:shadow-lg">
      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
        <div className="text-teal-600">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}