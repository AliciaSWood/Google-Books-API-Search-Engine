import React from 'react';
import BookCard from '../../components/Books/BookCard';
import styles from "./BookLibrary.module.scss"

const BookLibrary = () => {
    return (
        <div className = {styles.BookCase}>
            <BookCard image = {"https://storage.googleapis.com/webdesignledger.pub.network/LaT/edd/2016/02/black-bumpy-old-book-cover-texture-3-780x1113.jpg"} title = {"Title"} author = {"Author"} description = {"Description..."}/>
            <BookCard />
            <BookCard />
            <BookCard />
        </div>
    );
};

export default BookLibrary;

