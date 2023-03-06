export default function SearchBar({
  className,
  searchValue,
  setSearchValue,
  searchCallback,
}) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-lg flex items-center bg-nanobloxGray-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-2 my-1"
          style={{ color: "rgb(240, 240, 240)" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          className="w-full flex-grow bg-nanobloxGray-dark text-white outline-none"
          type="text"
          value={searchValue}
          placeholder="Search"
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" && searchCallback(searchValue)
          }
        ></input>
      </div>
    </div>
  );
}
