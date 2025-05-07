import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PaymentConfirmation = () => {
  const [transactionId, setTransactionId] = useState('');
  const [senderName, setSenderName] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const attemptedPayment = localStorage.getItem('attemptedPayment');
    if (attemptedPayment === 'true') {
      toast.error("Payment not done. Please complete the payment process.");
      localStorage.removeItem('attemptedPayment');
    }
  }, []);

  const handleScreenshotUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setScreenshot(file);
    } else {
      toast.error("Please upload a valid image file (JPEG/PNG)");
      setScreenshot(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedId = transactionId.trim();
    const trimmedName = senderName.trim();

    if (!trimmedId || !trimmedName || !screenshot) {
      toast.error("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("transactionId", trimmedId);
    formData.append("senderName", trimmedName);
    formData.append("screenshot", screenshot);

    // Fetch the server URL from environment variable
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;

    if (!SERVER_URL) {
      toast.error("Server URL is not defined. Please check the environment settings.");
      return;
    }

    try {
      const response = await fetch(`${SERVER_URL}/api/submit-transaction`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Submission failed");
      }

      toast.success("Payment submitted successfully!");
      navigate("/thank-you");
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    }
  };

  const goBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-blue-900 text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-xl bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          Confirm Your Payment
        </h1>
        <p className="text-md sm:text-lg text-center mb-8 text-gray-200">
          Enter your <strong>Transaction ID</strong>, <strong>Sender's Name</strong>, and upload your <strong>Payment Screenshot</strong>.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Sender's Full Name"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            className="w-full px-5 py-4 rounded-lg text-gray-800 border border-gray-300 focus:ring-4 focus:ring-purple-400 focus:outline-none text-base"
            required
          />
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="e.g., UPI123456789XYZ"
            className="w-full px-5 py-4 rounded-lg text-gray-800 border border-gray-300 focus:ring-4 focus:ring-purple-400 focus:outline-none text-base"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleScreenshotUpload}
            className="w-full px-5 py-3 bg-white rounded-lg text-gray-700 border border-gray-300"
            required
          />
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gradient-to-l transition transform hover:scale-105"
          >
            Confirm Payment
          </button>
        </form>

        <button
          onClick={goBack}
          className="mt-6 w-full py-3 bg-white/10 text-white font-medium rounded-lg border border-purple-500 hover:bg-white/20 transition-all duration-300"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
