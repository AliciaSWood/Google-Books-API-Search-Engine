import React from 'react';
import { useState, useEffect } from 'react'
import styles from "./SearchSection.module.scss"
import searchicon from './searchicon.png'




const SearchSection = ({bookData, setBookData, query, setquery}) => {
  // Takes the search input, and how the user sets it by changing the value inside it
  const [searchInput, setSearchInput] = useState("")
    

         // Event handling for typing in search bar
    const handleChange = (event) => {
      event.preventDefault();
      setSearchInput(event.target.value)

    }

const onSubmitHandler = (event) => {
  // Prevent browser refreshing after form submission
  event.preventDefault()
  setquery(searchInput)
  //fetchBooks()
  // Call fetch books async function

}


// UseEffect which fetches our data, and returns an Object
useEffect(() => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=search+terms=${searchInput}`
  
  const fetchData = async () => {
    // if search term = nothing, return
    try {
      const response = await fetch(url);
      const json = await response.json();
      //console.log(json);
      const volumeInfo = json.items.map(book => 
        {
           return book.volumeInfo
        // is a function that runs on every item
        })
      setBookData(volumeInfo)
      
      // console.log(bookData.items)
      // console.log(bookData.items[0])
      // console.log(bookData.items[0].volumeInfo)
      // console.log(bookData.items[0].volumeInfo.title)
  } catch (error) {
      console.log("Error in async", error);
  }
  }
  fetchData()
  
  },[query])      

    return (
<div>
<form className = {styles.Form} onSubmit = {onSubmitHandler}>
<input className = {styles.SearchBar}type = "text" placeholder = "Enter book title, author, genre, etc..." onChange = {handleChange} value = {searchInput}></input>
<button className = {styles.SubmitButton}><img className = {styles.SubmitImage}src = {searchicon} /></button>

</form> 
  
</div>
    );
};

export default SearchSection;


