import Link from "next/link";

export default function NavigationMenu({ className }) {
  return (
    <div className={`px-4 flex flex-col text-white sm:hidden ${className}`}>
      <Link href="/">
        <a className="p-1 text-left hover:text-gray-300 active:text-gray-400">
          Home
        </a>
      </Link>
      <Link href="/discover">
        <button className="p-1 text-left hover:text-gray-300 active:text-gray-400">
          Discover
        </button>
      </Link>
      <Link href="/resources">
        <button className="p-1 mb-1 text-left hover:text-gray-300 active:text-gray-400">
          Resources
        </button>
      </Link>
    </div>
  );
}
