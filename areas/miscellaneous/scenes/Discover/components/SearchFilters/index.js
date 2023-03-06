export default function SearchFilters({ searchFilter, setSearchFilter }) {
  return (
    <div className="m-4 flex flex-col sm:flex-row sm:items-baseline">
      <div className="justify-evenly sm:justify-start lg:flex-1 flex">
        <button
          className="sm:mr-4 px-4 py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-450 focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-blue-400 focus:from-blue-400 focus:to-blue-350 hover:from-blue-400 hover:to-blue-350 active:from-blue-600 active:to-blue-550"
          onClick={() => setSearchFilter({ type: "mostPopular" })}
        >
          Most Popular
        </button>
        <button
          className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-450 focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-blue-400 focus:from-blue-400 focus:to-blue-350 hover:from-blue-400 hover:to-blue-350 active:from-blue-600 active:to-blue-550"
          onClick={() => setSearchFilter({ type: "recentlyAdded" })}
        >
          Recently Added
        </button>
      </div>
      <div className="lg:flex-1 mt-4 sm:mt-0 px-4 py-2 sm:mx-4 rounded-lg text-white text-center bg-gray-500 select-none">
        Search Results for "
        <span className="select-all">
          {searchFilter.type === "mostPopular"
            ? "Most Popular"
            : searchFilter.type === "recentlyAdded"
            ? "Recently Added"
            : searchFilter.type === "search" && searchFilter.value}
        </span>
        "
      </div>
      <div className="lg:flex-1 hidden lg:block"></div>
    </div>
  );
}
