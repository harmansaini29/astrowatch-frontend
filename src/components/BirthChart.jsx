import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const BirthChart = () => {
  const [birthDate, setBirthDate] = useState('');
  const [birthChart, setBirthChart] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [userEnteredDate, setUserEnteredDate] = useState('');

  const handleChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleSubmit = () => {
    setUserEnteredDate(birthDate);  // Save the entered birthdate
    setBirthChart(`Your birth chart based on the date: ${birthDate}`);
    setSelectedOption('');
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const getOptionDetails = (option) => {
    switch (option) {
      case 'Sun Sign':
        return 'The Sun Sign represents your core identity, ego, and the essence of who you are. It governs your conscious mind and overall personality.';
      case 'Moon Sign':
        return 'The Moon Sign represents your inner emotions, feelings, and subconscious self. It influences how you react emotionally to the world.';
      case 'Ascendant':
        return 'The Ascendant (or Rising Sign) reflects how others perceive you. It governs your outward behavior and first impressions.';
      default:
        return '';
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 dark:from-indigo-700 dark:via-purple-900 dark:to-blue-800 rounded-3xl shadow-xl transition-all duration-500 ease-in-out max-w-3xl mx-auto">
      <h3 className="text-4xl font-extrabold text-white mb-6 text-center tracking-wide">
        Generate Your Birth Chart
      </h3>

      <input
        type="date"
        value={birthDate}
        onChange={handleChange}
        className="mt-4 p-4 w-full rounded-xl text-black dark:text-white bg-white dark:bg-gray-700 border dark:border-gray-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-300"
      />

      <button
        onClick={handleSubmit}
        className="mt-6 w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:bg-gradient-to-l transition duration-200 ease-in-out shadow-lg"
      >
        Generate Chart
      </button>

      {birthChart && (
        <>
          <div className="relative mt-8">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-md hover:bg-gradient-to-l transition-all duration-300 flex justify-between items-center"
            >
              <span className="capitalize text-lg">{selectedOption ? selectedOption : 'Chart Options'}</span>
              <Sparkles className="text-white" size={22} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 w-full mt-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-700 z-10"
                >
                  <div className="flex flex-col">
                    {['Sun Sign', 'Moon Sign', 'Ascendant'].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className="px-6 py-3 text-left text-gray-800 dark:text-gray-100 hover:bg-purple-100 dark:hover:bg-purple-600 rounded-xl transition-all duration-200 flex items-center gap-2"
                      >
                        <Sparkles className="text-purple-500" size={20} />
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl border border-purple-300 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:border-purple-500 dark:hover:border-purple-600">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-white" size={24} />
                <h4 className="text-2xl font-semibold tracking-wide">Your Birth Chart</h4>
              </div>
              <p className="text-lg">{birthChart}</p>
              {userEnteredDate && (
                <p className="mt-4 text-gray-200">
                  You entered the birthdate: {userEnteredDate}
                </p>
              )}
              {selectedOption && (
                <div className="mt-6">
                  <h5 className="text-xl font-semibold text-white">
                    {selectedOption} Details:
                  </h5>
                  <p className="mt-2 text-gray-200">{getOptionDetails(selectedOption)}</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default BirthChart;
