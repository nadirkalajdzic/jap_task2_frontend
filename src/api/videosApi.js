import axios from "axios";

export const getTopMovies = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/videos/top_movies`);
};

export const getTop10Movies = () => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/videos/top_movies/top_ten`
  );
};

export const getTopShows = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/videos/top_shows`);
};

export const getTop10Shows = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/videos/top_shows/top_ten`);
};

export const getVideo = (id) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/videos/item/${id}`);
};

export const getFilteredShows = (filter) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/videos?search=${
      filter == null ? "" : filter
    }`
  );
};
