export const NORMA_API = "https://norma.nomoreparties.space/api";
export const INGREDIENTS = `${NORMA_API}/ingredients`;
export const AUTH_LOGIN = `${NORMA_API}/auth/login`;
export const AUTH_REGISTER = `${NORMA_API}/auth/register`;
export const AUTH_LOGOUT = `${NORMA_API}/auth/logout`;
export const AUTH_TOKEN = `${NORMA_API}/auth/token`;
export const AUTH_USER = `${NORMA_API}/auth/user`;

export const PASSWORD_RESET = `${NORMA_API}/password-reset`;
export const PASSWORD_RESET_RESET = `${NORMA_API}/password-reset/reset`;

export const checkResponse = (response) => {
  return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
};

export const getIngredients = () => {
  return fetch(`${NORMA_API}/ingredients`)
    .then(checkResponse)
    .catch((error) => {});
};

export const refreshToken = () => {
  return fetch(AUTH_TOKEN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse);
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const response = await fetch(url, options);
    return await checkResponse(response);
  } catch (error) {
    if (error.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const response = await fetch(url, options);
      return await checkResponse(response);
    } else {
      return Promise.reject(error);
    }
  }
};

export const setUser = (form) => {
  return fetchWithRefresh(AUTH_USER, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("accessToken"),
    },
    body: JSON.stringify(form),
  });
};
export const getUser = () => {
  return fetchWithRefresh(AUTH_USER, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("accessToken"),
    },
  });
};

export const authRegister = (name, email, password) => {
  return fetch(AUTH_REGISTER, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ name: name, email: email, password: password }),
  })
    .then(checkResponse)
    .catch((error) => {
      console.log(error);
    });
};

export const authLogin = (values) => {
  return fetch(AUTH_LOGIN, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(values),
  })
    .then(checkResponse)
    .catch((error) => {
      console.log(error);
    });
};

export const passwordReset = (values) => {
  return fetch(PASSWORD_RESET, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(values),
  }).then(checkResponse);
};

export const passwordChange = (values) => {
  return fetch(PASSWORD_RESET_RESET, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(values),
  })
    .then(checkResponse)
    .catch((error) => {
      console.log(error);
    });
};

export const authLogout = () => {
  return fetch(AUTH_LOGOUT, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  })
    .then(checkResponse)
    .catch((error) => {
      console.log(error);
    });
};
