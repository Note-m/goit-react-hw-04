import axios from "axios";

export const featchPhotos = async (topic, currentPage) => {
  axios.defaults.baseURL = "https://api.unsplash.com";
  const accessKey = "pIrJJv1cBI5aC-XJQYFzwyN9SDhF8QZxyUgseZkKV-A";

  const response = await axios.get("/search/photos", {
    params: {
      client_id: accessKey,
      query: topic,
      page: currentPage,
      per_page: 10,
    },
  });

  return response.data;
};
