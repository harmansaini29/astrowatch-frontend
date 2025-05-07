import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_123456", // <-- Replace with your Service ID
        "template_123456",
        // "template_giazkq4", // <-- Replace with your Template ID
        form.current,
        "rFseXUPXn5g5UN0kP" // <-- Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset(); // clear the form
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-black">
      <motion.h2
        className="text-4xl font-bold mb-8 text-purple-700 dark:text-purple-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg backdrop-blur-md bg-opacity-80 dark:bg-opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            name="user_name"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-purple-400 dark:focus:ring-purple-600 transition-all duration-300"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-purple-400 dark:focus:ring-purple-600 transition-all duration-300"
            placeholder="john@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            rows="4"
            name="message"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-purple-400 dark:focus:ring-purple-600 transition-all duration-300"
            placeholder="How can we help you?"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="relative inline-block w-full overflow-hidden bg-purple-600 rounded-lg px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-700 hover:shadow-purple-500/50 group"
        >
          <span className="absolute inset-0 w-full h-full transition-transform duration-500 transform scale-0 group-hover:scale-100 bg-white/10 blur-sm"></span>
          <span className="relative z-10">Send Message</span>
        </button>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-green-500 mt-4 text-center"
          >
            Message sent successfully!
          </motion.div>
        )}
      </motion.form>
    </div>
  );
}
