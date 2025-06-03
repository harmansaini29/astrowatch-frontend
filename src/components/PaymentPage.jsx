import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import upiQrCode from '../assets/upiQrcode.jpg';
import toast from 'react-hot-toast';

export default function PaymentPage() {
  const navigate = useNavigate();
  const [upiClicked, setUpiClicked] = useState(false);

  useEffect(() => {
    const attemptedPayment = localStorage.getItem('attemptedPayment');
    if (attemptedPayment === 'true') {
      toast.error("Your payment is incomplete. Please finish the payment process.");
    }

    const timer = setTimeout(() => {
      setUpiClicked(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

const handleUPIPaymentClick = (e) => {
  e.preventDefault();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Minimal UPI URL for normal account, no amount param
  const upiURL = "upi://pay?pa=hermansinghsaini-1@okhdfcbank";

  localStorage.setItem('attemptedPayment', 'true');

  if (isMobile) {
    toast.success("Redirecting to your UPI app... Please enter amount manually.");
    window.location.href = upiURL;
  } else {
    toast("Please scan the QR code using your mobile UPI app and enter the amount manually.");
  }
};


  const handleConfirmPayment = () => {
    toast.success("Thank you! Redirecting...");
    localStorage.removeItem('attemptedPayment');
    navigate('/payment-confirmation');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-blue-900 text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        Complete Your Payment
      </h1>

      <p className="text-lg sm:text-xl text-center max-w-2xl mb-8 text-gray-200">
        Pay securely using UPI by scanning the QR code or tapping the button below.
      </p>

      <div className="bg-white rounded-lg shadow-xl p-6 mb-6 w-full max-w-xs">
        <img
          src={upiQrCode}
          alt="UPI QR Code"
          className="w-60 h-60 mx-auto rounded-md shadow-md mb-4"
        />
      </div>

      <div className="text-center">
        <button
          onClick={handleUPIPaymentClick}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-medium rounded-lg shadow-lg hover:bg-gradient-to-l transition transform hover:scale-105"
        >
          Pay via UPI
        </button>

        <p className="mt-4 text-sm text-gray-300">
          Works on mobile UPI apps like Google Pay, PhonePe, etc. You'll be asked to enter the amount.
        </p>

        {upiClicked && (
          <div className="mt-6">
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
        )}

        <button
          onClick={handleGoBack}
          className="mt-4 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-md transition transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
