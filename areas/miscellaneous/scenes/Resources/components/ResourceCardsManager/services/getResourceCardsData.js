import { BACKEND_SERVER_URL } from "../../../../../../../services/utilities/constants";

export default async function getResourceCardsData(resourceCardsData) {
  const isFirstPage = resourceCardsData.length === 0;
  const lastResourceCard =
    !isFirstPage && resourceCardsData[resourceCardsData.length - 1];
  const resourceCardsUrl = isFirstPage
    ? `${BACKEND_SERVER_URL}/api/resources/page`
    : `${BACKEND_SERVER_URL}/api/resources/page/${lastResourceCard._id}`;

  const response = await fetch(resourceCardsUrl, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  return data.payload;
}
