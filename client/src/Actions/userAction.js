import axios from 'axios';

export function getLogin(email, password) {
  let user = {
    email: email,
    password: password,
  };
  return axios
    .post(`${process.env.REACT_APP_API_URL}user/login`, user)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error.message);
      return error;
    });
}

export function getRegister(email, password, firstName, lastName) {
  let user = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  };

  return axios
    .post(`${process.env.REACT_APP_API_URL}user/signup`, user)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function getUser(id, token) {
  return axios
    .get(`${process.env.REACT_APP_API_URL}user/`+ id, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error.message);
      return error;
    });
}

