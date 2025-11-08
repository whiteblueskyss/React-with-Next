import React from "react";
import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <>
      <a href="#" className="flex items-center">
        <img src={logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Learn with Sumit
        </span>
      </a>
    </>
  );
}
