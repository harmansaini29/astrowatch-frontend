// // src/components/RazorpayPayment.jsx
// import React from 'react';

// const RazorpayPayment = () => {
//   const loadRazorpay = () => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.onerror = () => {
//       alert('Razorpay SDK failed to load. Are you online?');
//     };
//     script.onload = async () => {
//       const options = {
//         key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
//         amount: 50000, // amount in paisa (₹500)
//         currency: 'INR',
//         name: 'AstroWatch',
//         description: 'Astrology Consultation',
//         image: '/logo.png', // Optional: add your logo in public folder
//         handler: function (response) {
//           alert(`Payment successful! ID: ${response.razorpay_payment_id}`);
//           // You can also POST the response to your backend for verification
//         },
//         prefill: {
//           name: 'Customer Name',
//           email: 'customer@example.com',
//           contact: '9999999999',
//         },
//         theme: {
//           color: '#6B46C1',
//         },
//       };
//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();
//     };
//     document.body.appendChild(script);
//   };

//   return (
//     <button
//       onClick={loadRazorpay}
//       className="px-6 py-3 bg-purple-700 text-white font-semibold rounded hover:bg-purple-800 transition"
//     >
//       Pay Now
//     </button>

//   );
// };

// export default RazorpayPayment;
