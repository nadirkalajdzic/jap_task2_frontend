import axios from "axios";

export const loginUser = (email, password) => {
  const params = JSON.stringify({
    email: email,
    password: password,
  });

  return axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, params, {
    headers: {
      "content-type": "application/json",
    },
  });
};

export const registerUser = (name, surname, email, password) => {
  const params = JSON.stringify({
    name: name,
    surname: surname,
    email: email,
    password: password,
  });

  return axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, params, {
    headers: {
      "content-type": "application/json",
    },
  });
};
