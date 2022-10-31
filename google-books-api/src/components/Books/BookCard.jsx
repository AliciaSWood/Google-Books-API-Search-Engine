import React from 'react';
import styles from "./Books.module.scss"
import book from "./bookeg.png"


const BookCard = (props) => {


    return (
        <div className = {styles.Card}>
            <img className = {styles.BookImage} src = {props.bookInfo.imageLinks}/>
            <h2>{props.bookInfo.title}</h2>
            <h3>{props.bookInfo.authors}</h3>
            <p className = {styles.Desc}>{props.bookInfo.description}</p>
        </div>
    );
};

export default BookCard;


