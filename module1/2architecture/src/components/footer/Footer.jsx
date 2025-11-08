import React from "react";
import UpperFooter from "./UpperFooter.jsx";
import LowerFooter from "./LowerFooter.jsx";

function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-800">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          {/* <!-- Sub Footer 1 --> */}

          <UpperFooter />

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          {/* <!-- Sub Footer 2 --> */}
          <LowerFooter />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
