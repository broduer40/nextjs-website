export default async function getGameCardsData(gameCardsUrl) {
  const response = await fetch(gameCardsUrl, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  return data.payload;
}
