"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
// Assuming Loader is a component for showing loading state.
// For this self-contained example, we'll use a simple text loader.
// import Loader from "@/components/Common/Loader";
import Link from "next/link";
import Image from "next/image";

const ResetPassword = ({ token }: { token: string }) => {
  const [data, setData] = useState({
    newPassword: "",
    ReNewPassword: "",
  });
  const [loader, setLoader] = useState(false);

  const [user, setUser] = useState({
    email: "",
  });

  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        // This axios call would typically go to a backend API.
        // For a self-contained Canvas example, this API endpoint needs to be mocked or handled.
        const res = await axios.post(`/api/forgot-password/verify-token`, {
          token,
        });

        if (res.status === 200) {
          setUser({
            email: res.data.email,
          });
        }
      } catch (error: any) {
        toast.error(error?.response?.data || "Failed to verify token.");
        router.push("/forgot-password");
      }
    };

    verifyToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    if (data.newPassword === "" || data.ReNewPassword === "") {
      toast.error("Please enter and confirm your new password.");
      setLoader(false);
      return;
    }

    if (data.newPassword !== data.ReNewPassword) {
      toast.error("New password and confirm password do not match.");
      setLoader(false);
      return;
    }

    if (data.newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      setLoader(false);
      return;
    }

    try {
      // This axios call would typically go to a backend API to update the password.
      // For a self-contained Canvas example, this API endpoint needs to be mocked or handled.
      const res = await axios.post(`/api/forgot-password/update`, {
        email: user?.email,
        password: data.newPassword,
      });

      if (res.status === 200) {
        toast.success(res.data || "Password reset successfully!");
        setData({ newPassword: "", ReNewPassword: "" });
        router.push("/signin");
      }

      setLoader(false);
    } catch (error: any) {
      toast.error(error.response?.data || "Failed to reset password.");
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
            <h2 className="text-2xl font-bold text-dark dark:text-white">Reset your password</h2>
            <p className="text-sm text-body-color dark:text-dark-6 mt-1">Set a new password for your account.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Reset password form">
            <div className="text-left">
              <label htmlFor="newPassword" className="block text-sm font-medium text-dark dark:text-white mb-1">New password</label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-1 px-4 py-2 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                value={data.newPassword}
                onChange={handleChange}
                aria-required="true"
              />
            </div>
            <div className="text-left">
              <label htmlFor="ReNewPassword" className="block text-sm font-medium text-dark dark:text-white mb-1">Confirm new password</label>
              <input
                id="ReNewPassword"
                name="ReNewPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-1 px-4 py-2 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                value={data.ReNewPassword}
                onChange={handleChange}
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
                  Processing...
                </div>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-body-color dark:text-dark-6">
            Back to <Link href="/signin" className="text-primary hover:underline">Sign in</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
