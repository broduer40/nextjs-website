import DefaultRobloxPlace from "../../../../../../../public/images/DefaultRobloxPlace.png";

import { useRef } from "react";

import numberFormatter from "../../../../../../../services/utilities/numberFormatter";

export default function FulfilledGameCard({ gameCardData }) {
  const {
    rootPlaceId,
    title,
    creatorId,
    creatorName,
    creatorType,
    onlinePlayers,
    totalFavorites,
    thumbnailUrl,
  } = gameCardData.data;

  const rootPlaceUrl = `https://www.roblox.com/games/${rootPlaceId}`;
  const creatorProfileUrl =
    creatorType === "Group"
      ? `https://www.roblox.com/groups/${creatorId}`
      : `https://www.roblox.com/users/${creatorId}`;

  const imageRef = useRef();

  return (
    <div className="w-full flex flex-col mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="relative" style={{ paddingBottom: "56%" }}>
        <a href={rootPlaceUrl} target="_blank" rel="noopener noreferrer">
          <img
            className="absolute w-full h-full object-cover object-center"
            src={thumbnailUrl}
            ref={imageRef}
            onError={() => {
              if (imageRef.current) {
                if (imageRef.current.src != DefaultRobloxPlace.src)
                  imageRef.current.src = DefaultRobloxPlace.src;
              }
            }}
          />
        </a>
      </div>
      <div className="w-full p-4 flex-grow flex flex-col bg-nanobloxGray text-white">
        <div className="text-xl font-semibold leading-tight">{title}</div>
        <div className="text-gray-400 text-sm">
          By{" "}
          <a href={creatorProfileUrl} target="_blank" rel="noopener noreferrer">
            {creatorName}
          </a>
        </div>
        <div className="mt-auto flex pt-4">
          <button
            className="px-8 my-1 rounded-lg text-xl text-white bg-gradient-to-r from-green-400 to-green-500 focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-green-400 focus:from-green-300 focus:to-green-400 hover:from-green-300 hover:to-green-400 active:from-green-500 active:to-green-600"
            onClick={() =>
              window.open(rootPlaceUrl, "_blank", "noopener,noreferrer")
            }
          >
            PLAY
          </button>
          <div className="flex flex-col pl-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-green-500 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
              {numberFormatter(onlinePlayers, 1)} Online
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-yellow-500 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
              {numberFormatter(totalFavorites)} Favorites
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
