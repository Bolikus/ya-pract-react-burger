const API_URL = "https://norma.nomoreparties.space/api";

const checkResponse = (response) => {
  return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
};

export const getIngredients = () => {
  return fetch(`${API_URL}/ingredients`)
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data.data;
      return Promise.reject(data);
    });
};
