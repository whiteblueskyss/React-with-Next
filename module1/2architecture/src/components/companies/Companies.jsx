import React from "react";
import {
  Airbnb,
  Google,
  Mailchimp,
  Mashable,
  Microsoft,
  Spotify,
} from "./CopaniesUtils";

function Companies() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <Airbnb />
            <Google />
            <Microsoft />
            <Spotify />
            <Mailchimp />
            <Mashable />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Companies;
