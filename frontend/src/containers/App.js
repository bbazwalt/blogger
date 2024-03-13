import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import ArticleList from "../pages/ArticleList";
import Login from "../pages/Login";
import ArticleDetails from "../pages/ArticleDetails";
import AddArticle from "../pages/AddArticle";
import Register from "../pages/Register";
import UpdateArticle from "../pages/UpdateArticle";

import Navbar from "../components/Navbar";


import "../styles/App.css";
import { API_URL } from "../api/apiURL";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditedArticle] = useState("");

  const token = localStorage.getItem("mytoken");

  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    } else {
      fetch(API_URL+"articles/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((result) => {
          setArticles(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    navigate("/articles");
  }, [token]);

  const insertedArticle = (article) => {
    const new_articles = [...articles, article];
    setArticles(new_articles);
  };

  const updatedData = (article) => {
    const new_articles = articles.map((myarticle) => {
      if (myarticle.slug === article.slug) {
        return article;
      } else {
        return myarticle;
      }
    });

    setArticles(new_articles);
  };

  const updateBtn = (article) => {
    setEditedArticle(article);
  };

  const deleteBtn = (article) => {
    const new_articles = articles.filter((myarticle) => {
      if (myarticle.slug === article.slug) {
        return false;
      }
      return true;
    });

    setArticles(new_articles);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/articles"
          element={<ArticleList articles={articles} />}
        ></Route>

        <Route
          path="/articles/:slug"
          element={
            <ArticleDetails updateBtn={updateBtn} deleteBtn={deleteBtn} />
          }
        ></Route>

        <Route
          path="/add"
          element={<AddArticle insertedArticle={insertedArticle} />}
        ></Route>

        <Route path="/register" element={<Register />}></Route>

        <Route
          path="/update"
          element={
            <UpdateArticle article={editArticle} updatedData={updatedData} />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
