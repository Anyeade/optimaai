"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialSignIn from "../SocialSignIn"; // Assuming this component exists and is correctly implemented
// import SwitchOption from "../SwitchOption"; // Removed, as its usage was problematic and duplicated
// import MagicLink from "../MagicLink"; // Removed, as its usage was problematic and duplicated

const SignUp = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Renamed for clarity
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());
    const finalData = { ...value };

    // Basic validation
    if (!finalData.email || !finalData.password) {
      toast.error("Please enter both email and password.");
      setLoading(false);
      return;
    }
    if (typeof finalData.password === 'string' && finalData.password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to register.");
      }

      await res.json(); // Parse response if needed, but not strictly necessary for success message
      toast.success("Successfully registered");
      router.push("/signin");
    } catch (err: any) {
      console.error("Registration error:", err.message); // Use console.error for errors
      toast.error(err.message || "An unexpected error occurred during registration.");
    } finally {
      setLoading(false);
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
            <h2 className="text-2xl font-bold text-dark dark:text-white">Create your Optima AI account</h2>
            <p className="text-sm text-body-color dark:text-dark-6 mt-1">Sign up to get started with Trio Agent.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Sign up form">
            <div className="text-left">
              <label htmlFor="email" className="block text-sm font-medium text-dark dark:text-white mb-1">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-1 px-4 py-2 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                aria-required="true"
              />
            </div>
            <div className="text-left">
              <label htmlFor="password" className="block text-sm font-medium text-dark dark:text-white mb-1">Password</label>
              <input
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                autoComplete="new-password"
                required
                minLength={8}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-1 px-4 py-2 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                aria-required="true"
              />
              <button type="button" className="text-xs text-primary mt-1 hover:underline" onClick={() => setIsPasswordVisible(!isPasswordVisible)} aria-label="Toggle password visibility">
                {isPasswordVisible ? "Hide" : "Show"} password
              </button>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-2 font-semibold text-white shadow-md transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing Up...
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <div className="my-6 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-gray-300 dark:bg-gray-700" />
            <span className="text-xs text-gray-500 dark:text-gray-400">or sign up with</span>
            <span className="h-px w-10 bg-gray-300 dark:bg-gray-700" />
          </div>
          <SocialSignIn /> {/* This component is assumed to handle social logins */}
          <div className="mt-6 text-center text-sm text-body-color dark:text-dark-6">
            Already have an account? <Link href="/signin" className="text-primary hover:underline">Sign in</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
