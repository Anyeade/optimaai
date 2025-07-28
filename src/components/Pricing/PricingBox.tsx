import axios from "axios";
import React from "react";
import OfferList from "./OfferList";
import { Price } from "@/types/price";

const PricingBox = ({ product }: { product: Price }) => {
  // POST request
  const handleSubscription = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: product.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    window.location.assign(data);
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        {product.nickname === "Premium" && (
          <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
            Recommended
          </p>
        )}
        <span className="mb-2 block text-xl font-semibold text-primary">
          {product.nickname}
        </span>
        <span className="mb-5 block text-base font-normal text-dark dark:text-white opacity-80">
          {product.nickname === "Personal (Free)"
            ? "Start building apps & websites by chatting with AI—no cost, no credit card."
            : product.nickname === "Pro"
            ? "Unlock advanced AI features, 2M context, and real-time collaboration."
            : "For teams who want to build together with AI—manage, collaborate, and scale."}
        </span>
        <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
          {product.unit_amount === 0 ? (
            <>
              <span className="text-xl font-medium">$ </span>
              <span className="-ml-1 -tracking-[2px]">0</span>
              <span className="text-base font-normal text-body-color dark:text-dark-6"> Free Forever</span>
            </>
          ) : (
            <>
              <span className="text-xl font-medium">$ </span>
              <span className="-ml-1 -tracking-[2px]">{(product.unit_amount / 100).toLocaleString("en-US", { currency: "USD" })}</span>
              <span className="text-base font-normal text-body-color dark:text-dark-6"> Per Month</span>
            </>
          )}
        </h2>

        <div className="mb-[50px]">
          <h3 className="mb-5 text-lg font-medium text-dark dark:text-white">
            Features
          </h3>
          <div className="mb-10">
            {product?.offers.map((offer, i) => (
              <OfferList key={i} text={offer} />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          {product.unit_amount === 0 ? (
            <a
              href="/trio-download"
              className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Download the free Trio Agent app"
            >
              Download Free App
            </a>
          ) : (
            <button
              onClick={handleSubscription}
              className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90"
            >
              Purchase Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
