export default class APIService {
  static InsertArticle(body, token) {
    return fetch(
      "https://blogrestapione-62340a74dd4b.herokuapp.com/articles/",
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
      "https://blogrestapione-62340a74dd4b.herokuapp.com/dj-rest-auth/registration/",
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
      `https://blogrestapione-62340a74dd4b.herokuapp.com/articles/${article_slug}/`,
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
      `https://blogrestapione-62340a74dd4b.herokuapp.com/articles/${article_slug}/`,
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
