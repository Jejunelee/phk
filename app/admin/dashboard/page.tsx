'use client';

import Link from 'next/link';
import { useAuth } from '@/app/lib/auth/AuthContext';

export default function AdminDashboard() {
  const { user } = useAuth();

  const sections = [
    {
      title: 'PHK Section 4',
      description: 'Calendar of Events - Manage events, colors, and content',
      href: '/admin/phk/section4',
      icon: '📅',
      color: 'bg-amber-50 border-amber-200'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.email}</h1>
        <p className="text-gray-500 mt-1">Manage your content sections below</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className={`block p-6 rounded-lg border ${section.color} hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{section.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900">{section.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{section.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {sections.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No sections available yet. Add your first section to start managing content.</p>
        </div>
      )}
    </div>
  );
}