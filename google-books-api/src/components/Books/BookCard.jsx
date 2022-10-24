import React from 'react';
import styles from "./Books.module.scss"
import book from "./bookeg.png"


const BookCard = (props) => {
    return (
        <div className = {styles.Card}>
            <img className = {styles.BookImage} src = {props.image}/>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default BookCard;
