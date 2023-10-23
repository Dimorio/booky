import React, { useState } from "react";
import "./Front.css";
import Card from "../card/Card";
import axios from "axios";

export default function Front() {
  const [search, SetSearch] = useState("");
  const [bookData, setData] = useState([]);
  const maxResults = 40;
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          `
          https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${maxResults}&key=AIzaSyC8OtP5Fm2OHIGerOnVxZj5InrCQ8cfiOs
          `
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row-1">
          <h1>
            A room without books is ike <br /> a body without a soul
          </h1>
        </div>
        <div className="row-2">
          <h2>Search For a Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => SetSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <img src="../images/01.png" alt="" />
        </div>
      </div>

      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
}
