import useAsync from "../../../../../../services/hooks/useAsync";
import { useState, useEffect, useRef } from "react";

import GameCard from "./components/GameCard";

import getGameCardsData from "./services/getGameCardsData";
import getGameCardsUrl from "./services/getGameCardsUrl";
import hasScrolledToBottom from "../../../../../../services/utilities/hasScrolledToBottom";

export default function GameCardsManager({ className, searchFilter }) {
  const [gameCardsData, setGameCardsData] = useState([]);

  const noMorePagesRef = useRef(false);
  const loadMorePagesDivRef = useRef();

  const [initiate, status, response, error] = useAsync(
    ({ searchFilter, gameCardsData }) =>
      getGameCardsData(getGameCardsUrl(searchFilter, gameCardsData))
  );

  useEffect(() => {
    setGameCardsData([]);
    noMorePagesRef.current = false;
    initiate({ searchFilter, gameCardsData: [] });
  }, [searchFilter]);

  useEffect(() => {
    if (response) {
      if (response.length === 0) {
        noMorePagesRef.current = true;
      } else {
        setGameCardsData((value) => [...value, ...response]);
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
          initiate({ searchFilter, gameCardsData });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
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
        gameCardsData.length === 0 && (
          <div className="mt-16 w-full text-center text-gray-200 text-xl">
            Search result returned nothing
          </div>
        )}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}
      >
        {gameCardsData.map((gameCardData, gameCardIndex) => (
          <GameCard key={gameCardIndex} gameCardData={gameCardData} />
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
