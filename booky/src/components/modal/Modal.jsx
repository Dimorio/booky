import React from "react";
import "./Modal.css";

export default function Modal({ show, item, onClose }) {
  if (!show) {
    return null;
  }

  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close">
            <i className="fa-solid fa-xmark" onClick={onClose}></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publishers}{" "}
                <span>{item.volumeInfo.publishedDate}</span> <br />
              </h4>
              <a href={item.volumeInfo.previewLink} target="_blank">
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
}
