import { BACKEND_SERVER_URL } from "../../../../../../../services/utilities/constants";

const commonUrl = `${BACKEND_SERVER_URL}/api/games/verified/page`;

export default function getGameCardsUrl(searchFilter, gameCardsData) {
  const isFirstPage = gameCardsData.length === 0;
  const lastGameCard = !isFirstPage && gameCardsData[gameCardsData.length - 1];

  return searchFilter.type === "mostPopular"
    ? isFirstPage
      ? `${commonUrl}/mostpopular`
      : `${commonUrl}/mostpopular/${lastGameCard.data.onlinePlayers}`
    : searchFilter.type === "recentlyAdded"
    ? isFirstPage
      ? `${commonUrl}/recentlyadded`
      : `${commonUrl}/recentlyadded/${lastGameCard.verifiedDate}`
    : searchFilter.type === "search" &&
      `${commonUrl}/search/${searchFilter.value}/${Math.ceil(
        gameCardsData.length / 8
      )}`;
}
