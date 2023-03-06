import Link from "next/link";

export default function NavigationLinks({ className }) {
  return (
    <div className={`text-white hidden sm:block ${className}`}>
      <Link href="/">
        <a className="px-4 text-left hover:text-gray-300 active:text-gray-400">
          Home
        </a>
      </Link>
      <Link href="/discover">
        <a className="px-4 text-left hover:text-gray-300 active:text-gray-400">
          Discover
        </a>
      </Link>
      <Link href="/resources">
        <a className="px-4 text-left hover:text-gray-300 active:text-gray-400">
          Resources
        </a>
      </Link>
    </div>
  );
}
