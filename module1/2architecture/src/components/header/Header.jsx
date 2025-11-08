import React from "react";
import Button from "../utils/Button.jsx";
import Logo from "../utils/Logo.jsx";
import { Item } from "./HeaderUtils.jsx";
function Header() {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Logo />

          <div className="flex items-center lg:order-2">
            <Button text={"Download"} target="_blanck" />
          </div>

          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <Item name={"Home"} />
              <Item name={"Company"} />
              <Item name={"Marketplace"} />
              <Item name={"Features"} />
              <Item name={"Team"} />
              <Item name={"Contact"} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
