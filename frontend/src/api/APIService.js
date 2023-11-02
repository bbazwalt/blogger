import { API_URL } from "./apiURL";

export const insertArticle = async(body, token) => {
  return fetch(API_URL + "articles/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(body),
  }).then((resp) => resp.json());
};

export const registerUser = async(body) => {
  return fetch(API_URL + "dj-rest-auth/registration/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((resp) => resp.json());
};

export const updateArticle = async(article_slug, body, token) => {
  return fetch(API_URL + `articles/${article_slug}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(body),
  }).then((resp) => resp.json());
};

export const deleteArticle = async(article_slug, token) => {
  return fetch(API_URL + `articles/${article_slug}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
};
