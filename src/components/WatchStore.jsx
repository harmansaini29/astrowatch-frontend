import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const WatchStore = () => {
  const navigate = useNavigate();

  const watches = [
    { name: 'Aquarius Timepiece', price: '₹ 11000', imageUrl: 'https://picsum.photos/300/200?random=1' },
    { name: 'Leo Luxury Watch', price: '₹ 21000', imageUrl: 'https://picsum.photos/300/200?random=2' },
    // Add more watches as needed
  ];

  const handleBuyNow = () => {
    // Navigate to the payment page
    navigate('/payment');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {watches.map((watch, index) => (
        <motion.div
          key={index}
          className="relative p-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:scale-105 transform transition-all"
          whileHover={{ scale: 1.05 }}
        >
          {/* Image */}
          <div className="relative w-full h-60 overflow-hidden rounded-xl">
            <img
              src={watch.imageUrl}
              alt={watch.name}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />
          </div>

          <h4 className="mt-4 text-xl font-semibold text-purple-800 dark:text-purple-300">{watch.name}</h4>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">{watch.price}</p>
          <button
            onClick={handleBuyNow}
            className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Buy Now
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default WatchStore;
