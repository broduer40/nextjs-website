import { useState } from "react";

import Brand from "../components/Brand";
import NavigationMenuButton from "../components/NavigationMenuButton";
import NavigationLinks from "../components/NavigationLinks";
import NavigationMenu from "../components/NavigationMenu";

export default function NavigationBarWithSearchBar() {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  return (
    <div className="w-full bg-nanobloxGray select-none">
      <div className="w-full px-4 py-2 flex items-center justify-between">
        <Brand />
        <NavigationMenuButton
          isNavigationMenuOpen={isNavigationMenuOpen}
          setIsNavigationMenuOpen={setIsNavigationMenuOpen}
        />
        <NavigationLinks />
      </div>
      <NavigationMenu
        className={`${isNavigationMenuOpen ? "block" : "hidden"}`}
      />
    </div>
  );
}
