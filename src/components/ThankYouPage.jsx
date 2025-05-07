import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ThankYouPage() {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-blue-900 text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-2xl w-full text-center">
        <CheckCircle size={64} className="text-green-400 mx-auto mb-6" />
        <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300">
          Thank You for Your Payment!
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          We've successfully received your payment. We'll be reaching out shortly with the next steps.
        </p>
        <button
          onClick={handleBackHome}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg rounded-lg shadow-md hover:scale-105 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
