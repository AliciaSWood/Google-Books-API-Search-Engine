import React from 'react';
import styles from "./Books.module.scss"
import book from "./bookeg.png"


const BookCard = (props, bookData, setBookData) => {


    return (
        <div className = {styles.Card}>
            <img className = {styles.BookImage} src = {props.bookInfo.imageLinks}/>
            <h2>{props.bookInfo.title}</h2>
            <h3>{props.bookInfo.authors}</h3>
            <p>{props.bookInfo.description}</p>
        </div>
    );
};

export default BookCard;

// bookData.items.volumeInfo.title

// const tidyBookInfo = (itemEntry) => {
//   const { id, volumeInfo, selfLink } = itemEntry;
//   const { title, authors, imageLinks } = volumeInfo;

//   return {
//     id,
//     selfLink,
//     title,
//     authors: authors.join(', '),
//     img: imageLinks.thumbnail,
//   };
// };

// const getBookData = async (bookData) => {
//   const bookInfo = bookData.items.map(tidyBookInfo());
//   return bookInfo;
// };

