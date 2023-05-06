// const API_URL = "https://norma.nomoreparties.space/api";
export const NORMA_API = "https://norma.nomoreparties.space/api";

export const checkResponse = (response) => {
  return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
};

// export const getIngredients = () => {
//   console.log("START FETCH");
//   return fetch(`${NORMA_API}/ingredients`)
//     .then(checkResponse)
//     .then((data) => {
//       if (data?.success) return data.data;
//       return Promise.reject(data);
//     });
// };

export const getIngredients = () => {
  return fetch(`${NORMA_API}/ingredients`)
    .then(checkResponse)
    .catch((error) => {
      console.log(error);
    });
};
