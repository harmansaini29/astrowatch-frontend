import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";  // To handle exit animations when routing
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Store from "./components/Store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition"; // Import PageTransitionSSS
import PaymentPage from "./components/PaymentPage";
import PaymentConfirmation from "./components/PaymentConfirmation";
import ThankYouPage from "./components/ThankYouPage";
import { Toaster } from 'react-hot-toast';

function AppContent() {
  const location = useLocation();  // Get current location object for routing

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      <Header />
      
      <main className="flex-grow pt-20">
      <Toaster position="top-center" reverseOrder={false} />
        {/* AnimatePresence to handle exit animations when route changes */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            {/* Other routes */}
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="/store"
              element={
                <PageTransition>
                  <Store />
                </PageTransition>
              }
            />

            {/* New Payment Routes */}
            <Route
              path="/payment"
              element={
                <PageTransition>
                  <PaymentPage />
                </PageTransition>
              }
            />
            <Route
              path="/payment-confirmation"
              element={
                <PageTransition>
                  <PaymentConfirmation />
                </PageTransition>
              }
            />
            <Route
              path="/thank-you"
              element={
                <PageTransition>
                  <ThankYouPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent /> {/* Moved the app content into a separate component */}
    </Router>
  );
}

export default App;
