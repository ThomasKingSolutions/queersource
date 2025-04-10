"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Image
          src="/logo.svg"
          alt="Queersource Logo"
          width={120}
          height={120}
          className="mb-6"
        />
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Queersource</h1>
        <p className="text-lg sm:text-xl mb-8">
          A safe space for queer teens & adults to find resources, support, and
          community. 🌈
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-lg font-medium mb-4">
            We&apos;re launching soon! Stay tuned.
          </p>
          <form className="flex flex-col items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-800 bg-white w-full sm:w-auto shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition shadow-md"
              onClick={async (e) => {
                e.preventDefault();
                const emailInput = (e.target as HTMLElement)
                  .closest("form")
                  ?.querySelector('input[type="email"]') as HTMLInputElement;
                if (emailInput && emailInput.value) {
                  try {
                    const response = await fetch("/api/notify", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ email: emailInput.value }),
                    });
                    if (response.ok) {
                      alert("Thank you! You will be notified.");
                    } else {
                      alert("Something went wrong. Please try again.");
                    }
                  } catch (error) {
                    alert("An error occurred. Please try again.");
                  }
                } else {
                  alert("Please enter a valid email address.");
                }
              }}
            >
              Notify Me
            </button>
          </form>
        </motion.div>
      </motion.div>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 text-center text-sm"
      >
        <p>© {new Date().getFullYear()} Thomas King. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
