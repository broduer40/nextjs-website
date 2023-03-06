import useAsync from "../../../../../../services/hooks/useAsync";
import { useState, useEffect, useRef } from "react";

import ResourceCard from "./components/ResourceCard";

import getResourceCardsData from "./services/getResourceCardsData";
import hasScrolledToBottom from "../../../../../../services/utilities/hasScrolledToBottom";

export default function ResourceCardsManager({ className }) {
  const [resourceCardsData, setResourceCardsData] = useState([]);

  const noMorePagesRef = useRef(false);
  const loadMorePagesDivRef = useRef();

  const [initiate, status, response, error] = useAsync((resourceCardsData) =>
    getResourceCardsData(resourceCardsData)
  );

  useEffect(() => {
    initiate(resourceCardsData);
  }, []);

  useEffect(() => {
    if (response) {
      if (response.length === 0) {
        noMorePagesRef.current = true;
      } else {
        setResourceCardsData((value) => [...value, ...response]);
      }
    }
  }, [response]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (
          entry.isIntersecting &&
          status === "fulfilled" &&
          !noMorePagesRef.current
        ) {
          initiate(resourceCardsData);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (loadMorePagesDivRef.current)
      observer.observe(loadMorePagesDivRef.current);

    return () => {
      if (loadMorePagesDivRef.current)
        observer.unobserve(loadMorePagesDivRef.current);
    };
  }, [status, loadMorePagesDivRef]);

  return (
    <>
      {(status === "fulfilled" || status === "rejected") &&
        resourceCardsData.length === 0 && (
          <div className="mt-16 w-full text-center text-gray-200 text-xl">
            No Resources Found
          </div>
        )}
      <div
        className={`${className} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}
      >
        {resourceCardsData.map((resourceCardData, resourceCardIndex) => (
          <ResourceCard
            key={resourceCardIndex}
            resourceCardData={resourceCardData}
          />
        ))}
      </div>
      <div className="w-full h-8" ref={loadMorePagesDivRef}></div>
      {status === "pending" && (
        <div className="flex my-16">
          <div className="loader mx-auto ease-linear rounded-full border-8 border-gray-200 h-16 w-16"></div>
        </div>
      )}
    </>
  );
}
