import Link from "next/link";

export default function Brand({ className }) {
  return (
    <div className={className}>
      <Link href="/">
        <a>
          <div className="flex flex items-center">
            <svg
              className="w-10 h-10 bg-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              stroke="currentColor"
            >
              <path d="M0 0h100v100H0z" />
              <path
                d="M33.5 28.479h9.924l16.026 32.999-.711.77v-33.77h7.761v43.041h-9.983L40.55 39.025l.711-.77v33.266H33.5z"
                fill="#fff"
              />
            </svg>
            <div className="ml-2 text-white font-bold text-lg">Nanoblox</div>
          </div>
        </a>
      </Link>
    </div>
  );
}
