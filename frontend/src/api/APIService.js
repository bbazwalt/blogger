import { API_URL } from "./apiURL";


export default class APIService {
  static InsertArticle(body, token) {
    return fetch(
      API_URL+ "articles/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body),
      }
    ).then((resp) => resp.json());
  }

  static RegisterUser(body) {
    return fetch(
      API_URL+"dj-rest-auth/registration/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    ).then((resp) => resp.json());
  }

  static UpdateArticle(article_slug, body, token) {
    return fetch(
      API_URL+`articles/${article_slug}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body),
      }
    ).then((resp) => resp.json());
  }

  static DeleteArticle(article_slug, token) {
    return fetch(
      API_URL+`articles/${article_slug}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
  }
}
