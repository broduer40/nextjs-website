import { useState } from "react";

import Brand from "../components/Brand";
import NavigationMenuButton from "../components/NavigationMenuButton";
import SearchBar from "./components/SearchBar";
import NavigationLinks from "../components/NavigationLinks";
import NavigationMenu from "../components/NavigationMenu";

export default function NavigationBarWithSearchBar({ searchCallback }) {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-full bg-nanobloxGray select-none">
      <div className="w-full px-4 py-2 flex items-center justify-between">
        <Brand />
        <NavigationMenuButton
          isNavigationMenuOpen={isNavigationMenuOpen}
          setIsNavigationMenuOpen={setIsNavigationMenuOpen}
        />
        <SearchBar
          className="hidden sm:block px-4 flex-grow mx-8"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchCallback={searchCallback}
        />
        <NavigationLinks />
      </div>
      <NavigationMenu
        className={`${isNavigationMenuOpen ? "block" : "hidden"}`}
      />
      <SearchBar
        className="w-full pt-1 pb-4 px-4 sm:hidden"
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchCallback={searchCallback}
      />
    </div>
  );
}
