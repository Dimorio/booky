import "./Card.css";
import Modal from "../modal/Modal";
import React, { useState } from "react";

export default function Card({ book }) {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();
  return (
    <>
      {book.map((bk) => {
        let thumbnail =
          bk.volumeInfo.imageLinks && bk.volumeInfo.imageLinks.smallThumbnail;
        let amount = bk.saleInfo.listPrice && bk.saleInfo.listPrice.amount;
        let title = bk.volumeInfo.title;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  setShow(true), setBookItem(bk);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{title}</h3>
                  <p className="amount">${amount}</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
}
