import React from "react";
import { PricingCard } from "./PricingUtils.jsx";

function Pricing() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Landwind we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>

          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <PricingCard
              pack={"Starter"}
              desc={"Best option for personal use & for your next project."}
              price={29}
              size={"1"}
              support={6}
              update={6}
            />
            <PricingCard
              pack={"Company"}
              desc={"Relevant for multiple users, extended & premium support."}
              price={99}
              size={"10"}
              support={24}
              update={24}
            />
            <PricingCard
              pack={"Enterprise"}
              desc={
                "Best for large scale uses and extended redistribution rights."
              }
              price={499}
              size={"100+"}
              support={36}
              update={36}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
