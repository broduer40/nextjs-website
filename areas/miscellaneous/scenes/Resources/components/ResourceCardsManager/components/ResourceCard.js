import DefaultResource from "../../../../../../../public/images/DefaultResource.png";

import { useRef } from "react";

export default function FulfilledResourceCard({ resourceCardData }) {
  const { imageUrl, title, description, resourceUrl, resourceLinkText } =
    resourceCardData;

  const imageRef = useRef();

  return (
    <div className="w-full flex flex-col mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="relative" style={{ paddingBottom: "60%" }}>
        <a href={resourceUrl} target="_blank" rel="noopener noreferrer">
          <img
            className="absolute w-full h-full object-cover object-center"
            src={imageUrl}
            ref={imageRef}
            onError={() => {
              if (imageRef.current) {
                if (imageRef.current.src != DefaultResource.src)
                  imageRef.current.src = DefaultResource.src;
              }
            }}
          />
        </a>
      </div>
      <div className="w-full p-4 flex-grow flex flex-col bg-nanobloxGray text-white">
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-sm text-gray-300">{description}</div>
        <div className="flex flex-grow mt-4 font-bold">
          <a
            className="text-sm text-blue-300 mt-auto"
            href={resourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {resourceLinkText}
          </a>
        </div>
      </div>
    </div>
  );
}
