import { useState, useEffect, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiSelector, HiCheck } from "react-icons/hi";
import {
  FaSun, FaMars, FaWater, FaGem, FaArrowAltCircleRight
} from "react-icons/fa";
import {
  GiWaterDrop, GiTrophyCup, GiEternalLove, GiTornado, GiSpiderWeb
} from "react-icons/gi";

const zodiacSigns = [
  { name: 'aries', icon: <FaMars /> },
  { name: 'taurus', icon: <FaGem /> },
  { name: 'gemini', icon: <GiSpiderWeb /> },
  { name: 'cancer', icon: <GiWaterDrop /> },
  { name: 'leo', icon: <FaSun /> },
  { name: 'virgo', icon: <FaGem /> },
  { name: 'libra', icon: <GiTrophyCup /> },
  { name: 'scorpio', icon: <GiTornado /> },
  { name: 'sagittarius', icon: <FaArrowAltCircleRight /> },
  { name: 'capricorn', icon: <GiEternalLove /> },
  { name: 'aquarius', icon: <GiSpiderWeb /> },
  { name: 'pisces', icon: <FaWater /> },
];

export default function HoroscopeWidget() {
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[4]); // Default to Leo
  const [horoscope, setHoroscope] = useState(null);

  useEffect(() => {
    const fetchHoroscope = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/horoscope", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sign: selectedSign.name, day: "today" }),
        });

        const data = await response.json();
        setHoroscope(data.description);
      } catch (error) {
        console.error("Error fetching horoscope:", error);
        setHoroscope("Failed to fetch horoscope.");
      }
    };

    fetchHoroscope();
  }, [selectedSign]);

  return (
    <div className="relative z-10 p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-3xl shadow-2xl mt-10 w-full max-w-3xl mx-auto transition-all duration-500 ease-in-out transform hover:scale-105">
      <h3 className="text-4xl font-extrabold text-white dark:text-gray-300 mb-8 text-center transition-all duration-300">
        ✨ Your Daily Horoscope
      </h3>

      <div className="w-full max-w-sm mx-auto mb-6">
        <Listbox value={selectedSign} onChange={setSelectedSign}>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 py-3 pl-5 pr-10 text-left text-white shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 transition-all transform hover:scale-105">
              <span className="flex items-center gap-2">
                {selectedSign.icon}
                <span className="capitalize">{selectedSign.name}</span>
              </span>
              <span className="absolute inset-y-0 right-3 flex items-center">
                <HiSelector className="w-5 h-5" />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute mt-2 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black/10 focus:outline-none z-50 max-h-60"
                style={{ top: '100%', left: 0, zIndex: 100, maxHeight: '300px', overflowY: 'auto', marginTop: '8px' }}
              >
                {zodiacSigns.map((sign, idx) => (
                  <Listbox.Option
                    key={idx}
                    value={sign}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 transition-all duration-300 ease-in-out ${
                        active
                          ? "bg-purple-100 dark:bg-purple-600 text-purple-900 dark:text-white"
                          : "text-gray-900 dark:text-gray-100"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span className="flex items-center gap-2 capitalize">
                          <span className="absolute left-3">{sign.icon}</span>
                          {sign.name}
                        </span>
                        {selected && (
                          <span className="absolute right-4 text-purple-600 dark:text-white">
                            <HiCheck className="w-5 h-5" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      <div className="flex justify-center items-start gap-4 mt-6">
        <div className="text-4xl text-purple-300 dark:text-purple-500">
          {selectedSign.icon}
        </div>
        <p className="text-lg text-white dark:text-gray-300 leading-relaxed transition-all duration-300 ease-in-out">
          {horoscope || 'Loading...'}
        </p>
      </div>
    </div>
  );
}
