import { useContext } from "react";
import { SearchContext } from "../context";
import { CartIcon, ProfileIcon, SearchIcon } from "./svgs/svgs";

export default function Header() {
  function NavItem({ name }) {
    return (
      <>
        <a href="#" className="hover:text-gray-500 transition-colors">
          {name}
        </a>
      </>
    );
  }

  const { setSearchKey } = useContext(SearchContext);

  return (
    <>
      <header className="border-b border-gray-200 py-4 px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            LWS.SHOP
          </a>

          <nav className="hidden md:flex space-x-6">
            <NavItem name="Shop" />
            <NavItem name="On Sale" />
            <NavItem name="New Arrivals" />
            <NavItem name="Brands" />
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block w-64">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <span className="absolute right-3 top-2">
                <SearchIcon />
              </span>
            </div>
            <a href="#" className="hover:text-gray-500 transition-colors">
              <CartIcon />
            </a>{" "}
            <a href="#" className="hover:text-gray-500 transition-colors">
              <ProfileIcon />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
