import React from 'react';
import { User, Bell } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-blue-600">MoneyFlow</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
