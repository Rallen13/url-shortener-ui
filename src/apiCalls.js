export const getUrls = async () => {
  const URL = "http://localhost:3001/api/v1/urls";

  const response = await fetch(URL);
  return await response.json();
};
