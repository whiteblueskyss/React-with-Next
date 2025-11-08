import React from "react";
import {
  FacebookIcon,
  GithubIcon,
  InstaIcon,
  TwitterIcon,
  UnkonwnIcon,
} from "../svgs/Svgs.jsx";
import Logo from "../utils/Logo.jsx";

function FooterText({ text }) {
  return (
    <a
      href="#"
      target="_blank"
      className="text-purple-600 hover:underline dark:text-purple-500"
    >
      {text}
    </a>
  );
}

function LowerFooter() {
  return (
    <>
      <div className="text-center">
        <div className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
          <Logo />
        </div>

        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2024-2025 Learn with Sumit. All Rights Reserved. Built with
          <FooterText text={" Flowbite "} />
          and
          <FooterText text={" Tailwind CSS "} />.
        </span>

        <ul className="flex justify-center mt-5 space-x-5">
          <FacebookIcon />
          <InstaIcon />
          <TwitterIcon />
          <GithubIcon />
          <UnkonwnIcon />
        </ul>
      </div>
    </>
  );
}

export default LowerFooter;
