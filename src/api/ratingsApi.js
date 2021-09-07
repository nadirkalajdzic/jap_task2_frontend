import axios from "axios";

export const addRating = (rating, videoId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("session")).token
      }`,
    },
  };

  const params = {
    value: rating,
    VideoId: videoId,
  };

  return axios.post(
    `${process.env.REACT_APP_API_URL}/ratings/add`,
    params,
    config
  );
};
