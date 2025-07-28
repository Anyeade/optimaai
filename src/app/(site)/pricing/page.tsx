import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing Page | Optima AI Solutions - Your Partner in Intelligent Innovation 🚀",
  description: "Optima AI Solutions Pricing: Discover our transparent and flexible pricing models to unlock the full potential of intelligent innovation for your business.",
};


import Link from "next/link";

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pricing" />
      <div className="container mx-auto mb-10 mt-8 max-w-2xl text-center">
        <h1 className="mb-3 text-3xl font-bold text-dark dark:text-white">Simple, Transparent Pricing</h1>
        <p className="text-lg text-body-color dark:text-dark-6">
          Unlock the full power of Trio Agent and Optima AI—local-first, privacy-first, and built for developers who demand control. Choose the plan that fits your workflow and scale as you grow.
        </p>
      </div>
      <Pricing />
      <div className="container mx-auto my-10 flex flex-col items-center">
        <Link
          href="mailto:hello@optimaai.cc"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white duration-300 hover:bg-primary/90 mb-4"
        >
          Get Started with Trio Agent
        </Link>
        <span className="text-sm text-body-color dark:text-dark-6">Questions about pricing or need a custom plan? <a href="mailto:hello@optimaai.cc" className="underline">Contact us</a>.</span>
      </div>
      <Faq />
    </>
  );
};

export default PricingPage;
