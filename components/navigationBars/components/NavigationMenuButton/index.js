export default function NavigationMenuButton({
  className,
  isNavigationMenuOpen,
  setIsNavigationMenuOpen,
}) {
  return (
    <button
      className={`text-white sm:hidden ${className}`}
      onClick={() => setIsNavigationMenuOpen((value) => !value)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${isNavigationMenuOpen ? "hidden" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${!isNavigationMenuOpen ? "hidden" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
