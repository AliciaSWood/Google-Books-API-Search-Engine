import React from 'react';
import BookCard from '../../components/Books/BookCard';
import styles from "./BookLibrary.module.scss"


const BookLibrary = ({bookData, query}) => {

console.log(bookData)


    return (
        <div className = {styles.BookCase}>
            { (bookData.length) &&
                bookData.map(book => {
                    console.log(book)
const bookInfo = {
    // authors: "",
    title: book.title,
    description: "",
    imageLinks: ""
}


if(book.authors== undefined){
    bookInfo.authors = "No Author Provided"}
    else if(book.authors.length <= 2) {
        bookInfo.authors = book.authors.join(' and ');
      } else if (book.authors.length > 2) {
        let lastAuthor = ' and ' + book.authors.slice(-1);
        book.authors.pop();
        bookInfo.authors = book.authors.join(', ');
        bookInfo.authors += lastAuthor;
      }
else bookInfo.authors = book.authors[0]

if(book.description && book.description.length >= 100){
    bookInfo.description = book.description.slice(0, 100) + "..."
} else bookInfo.description = book.description 

if(book.title && book.title.length >=50){
    bookInfo.title = book.title.slice(0, 50) + "..."
}else bookInfo.title = book.title

if(book.imageLinks == undefined){
    bookInfo.imageLinks = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
} else bookInfo.imageLinks = book.imageLinks.thumbnail

                    return (<BookCard bookInfo={bookInfo}/>)
                })
            }
            
        </div>
    );
};

export default BookLibrary;

