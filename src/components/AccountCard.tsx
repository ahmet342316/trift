import React from 'react';
import { Wallet, Mail, ArrowRight } from 'lucide-react';
import CurrencyBadge from './ui/CurrencyBadge';

interface AccountCardProps {
  onTransfer: () => void;
}

export default function AccountCard({ onTransfer }: AccountCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Account Balance</h2>
          <div className="mt-2">
            <CurrencyBadge amount={1234.56} />
          </div>
        </div>
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <Wallet className="w-6 h-6 text-blue-500" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
          <Mail className="w-4 h-4 mr-2 text-gray-400" />
          <span>john.doe@gmail.com</span>
        </div>
        <button 
          onClick={onTransfer}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center group"
        >
          Send Money
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
