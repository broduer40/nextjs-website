import { useState } from "react";

import NavigationBarWithSearchBar from "../../../../components/navigationBars/NavigationBarWithSearchBar";
import GameCardsManager from "./components/GameCardsManager";
import SearchFilters from "./components/SearchFilters";
import Head from "next/head";

export default function Discover() {
  const [searchFilter, setSearchFilter] = useState({
    type: "mostPopular",
    value: "",
  });

  if (searchFilter.type === "search" && searchFilter.value === "")
    setSearchFilter({ type: "mostPopular" });

  return (
    <div className="w-full min-h-screen flex flex-col bg-nanobloxGray-light">
      <Head>
        <title>Nanoblox</title>
        <meta
          name="description"
          content="Discover popular games that use Nanoblox and enjoy your perks."
        />
      </Head>
      <NavigationBarWithSearchBar
        searchCallback={(searchValue) =>
          setSearchFilter({ type: "search", value: searchValue })
        }
      />
      <div className="container mx-auto my-2 flex-grow">
        <SearchFilters
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <GameCardsManager className="px-4 pt-4" searchFilter={searchFilter} />
      </div>
    </div>
  );
}
