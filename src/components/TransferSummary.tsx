import React from 'react';
import { ArrowRight, DollarSign, Clock, ArrowLeft, Shield } from 'lucide-react';
import CurrencyBadge from './ui/CurrencyBadge';
import AnimatedNumber from './ui/AnimatedNumber';

interface TransferSummaryProps {
  amount: number;
  fee: number;
  exchangeRate: number;
  recipientGets: number;
  onConfirm: () => void;
  onBack: () => void;
}

export default function TransferSummary({
  amount,
  fee,
  exchangeRate,
  recipientGets,
  onConfirm,
  onBack
}: TransferSummaryProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Transfer Summary</h2>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center py-4 border-b border-gray-100">
            <div className="text-gray-600">You send</div>
            <div className="text-xl font-semibold">
              <AnimatedNumber value={amount} />
              <span className="ml-1">USD</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-gray-600">Exchange rate</div>
              <div className="font-medium">
                1 USD = <AnimatedNumber value={exchangeRate} /> AZN
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-gray-600">Transfer fee</div>
              <div className="font-medium text-blue-600">
                -$<AnimatedNumber value={fee} />
              </div>
            </div>
            <div className="pt-4 border-t border-blue-100">
              <div className="flex items-center text-sm text-blue-700">
                <Shield className="w-4 h-4 mr-2" />
                Protected by bank-level security
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center py-4 border-t border-gray-100">
            <div className="text-gray-600">Recipient gets</div>
            <div className="text-2xl font-bold text-green-600">
              $<AnimatedNumber value={recipientGets} />
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
            <Clock className="w-4 h-4 mr-2" />
            Estimated arrival: 1-2 business days
          </div>

          <div className="flex gap-4">
            <button
              onClick={onBack}
              className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center group hover:-translate-x-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group hover:translate-x-1"
            >
              Confirm Transfer
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
