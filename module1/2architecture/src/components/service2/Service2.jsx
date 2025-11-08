import React from "react";
import { Heading } from "../utils/ServiccUtils";
import {
  Card,
  ColorText,
  Para,
  ColorTextWithArrow,
  UptimeSVG,
  UserSVG,
  TranjactionSVG,
  ArrowSVG,
  CountrySVG,
} from "./Service2Utils.jsx";
function Service2() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div className="col-span-2 mb-8">
            <ColorText text={"Trusted Worldwide"} />

            <Heading
              text={"Trusted by over 600 million users and 10,000 teams"}
            />
            <Para
              text={
                "Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers."
              }
            />

            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <ColorTextWithArrow text={" Explore Legality Guide"} />
              <ColorTextWithArrow text={" Visit the Trust Center"} />
            </div>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <UptimeSVG />
              <Card
                boldText={"99.99% uptime"}
                text={"For Landwind, with zero maintenance downtime"}
              />
            </div>

            <div>
              <UserSVG />
              <Card
                boldText={"600M+ Users"}
                text={"Trusted by over 600 milion users around the world"}
              />
            </div>

            <div>
              <CountrySVG />
              <Card
                boldText={"100+ countries"}
                text={" Have used Landwind to create functional websites"}
              />
            </div>
            <div>
              <TranjactionSVG />
              <Card boldText={"5+ Million"} text={"Transactions per day"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service2;
