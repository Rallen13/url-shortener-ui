export const getUrls = async () => {
  const URL = "http://localhost:3001/api/v1/urls";

  const response = await fetch(URL);
  return await response.json();
};

export const postUrls = async (newUrl) => {
  const URL = "http://localhost:3001/api/v1/urls";
  const postInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUrl),
  };
  await fetch(URL, postInfo);
};

export const deleteUrls = async (id) => {
  const URL = `http://localhost:3001/api/v1/urls/${id}`;
  const deleteInfo = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  await fetch(URL, deleteInfo);
};
