"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
// Assuming Loader is a component for showing loading state.
// For this self-contained example, we'll use a simple text loader.
// import Loader from "@/components/Common/Loader";
import Link from "next/link";
import Image from "next/image";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoader(true);

    try {
      // This axios call would typically go to a backend API to send a reset link.
      // For a self-contained Canvas example, this API endpoint needs to be mocked or handled.
      const res = await axios.post("/api/forgot-password/reset", {
        email: email.toLowerCase(),
      });

      if (res.status === 404) {
        toast.error("User not found.");
        setLoader(false); // Ensure loader is turned off on error
        return;
      }

      if (res.status === 200) {
        toast.success(res.data || "Password reset link sent to your email!");
        setEmail(""); // Clear email field on success
      }

      setLoader(false);
    } catch (error: any) {
      toast.error(error?.response?.data || "Failed to send reset link.");
      setLoader(false);
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-gray-900 to-primary-900 py-14 lg:py-20">
        <div className="w-full max-w-md mx-auto rounded-2xl shadow-2xl bg-white/90 dark:bg-dark-2/95 px-8 py-12 sm:px-10 md:px-12">
          <div className="mb-8 flex flex-col items-center">
            {/* Image components for logo, assuming these paths are correct in the Next.js project */}
            <Image src="/logo_transparent.png" alt="Optima AI Logo" width={120} height={32} className="mb-2 dark:hidden" />
            <Image src="/logo_transparent.png" alt="Optima AI Logo" width={120} height={32} className="mb-2 hidden dark:block" />
            <h2 className="text-2xl font-bold text-dark dark:text-white">Forgot your password?</h2>
            <p className="text-sm text-body-color dark:text-dark-6 mt-1">Enter your email and we’ll send you a reset link.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Forgot password form">
            <div className="text-left">
              <label htmlFor="email" className="block text-sm font-medium text-dark dark:text-white mb-1">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-1 px-4 py-2 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                value={email}
                onChange={e => setEmail(e.target.value)}
                aria-required="true"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-2 font-semibold text-white shadow-md transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={loader}
              aria-busy={loader}
            >
              {loader ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                "Send reset link"
              )}
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-body-color dark:text-dark-6">
            Remembered your password? <Link href="/signin" className="text-primary hover:underline">Sign in</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
