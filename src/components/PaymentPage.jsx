import React from 'react';
import { useNavigate } from 'react-router-dom';
import upiQrCode from '../assets/upiQrcode.jpg';
import toast from 'react-hot-toast';

export default function PaymentPage() {
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    toast.success("Thank you! Redirecting...");
    localStorage.removeItem('attemptedPayment');
    navigate('/payment-confirmation');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  // Download QR code image
  const handleDownloadQr = () => {
    const link = document.createElement('a');
    link.href = upiQrCode;
    link.download = 'AstroWatch_UPI_QR_Code.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('QR code image downloaded!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-blue-900 text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        Complete Your Payment
      </h1>

      <p className="text-lg sm:text-xl text-center max-w-2xl mb-8 text-gray-200">
        Pay securely using UPI by scanning the QR code below.
      </p>

      <div className="bg-white rounded-lg shadow-xl p-6 mb-6 w-full max-w-xs">
        <img
          src={upiQrCode}
          alt="UPI QR Code"
          className="w-60 h-60 mx-auto rounded-md shadow-md mb-4"
        />
        <button
          onClick={handleDownloadQr}
          className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition transform hover:scale-105"
        >
          Download QR Code
        </button>
      </div>

      <div className="text-center space-y-4">
        <p className="text-lg font-semibold text-yellow-300">
          Pay via UPI will be available soon.
        </p>

        <div>
          <p className="mb-2 text-sm text-green-200">
            After completing the payment, click below:
          </p>
          <button
            onClick={handleConfirmPayment}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition transform hover:scale-105"
          >
            I Have Completed the Payment
          </button>
        </div>

        <button
          onClick={handleGoBack}
          className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-md transition transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
