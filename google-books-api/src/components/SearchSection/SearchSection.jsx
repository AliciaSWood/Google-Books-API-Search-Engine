import React from 'react';
import { useState, useEffect } from 'react'
import styles from "./SearchSection.module.scss"
import searchicon from './searchicon.png'



const SearchSection = ({theData, setData}) => {
  // Takes the search input, and how the user sets it by changing the value inside it
    const [searchInput, setSearchInput] = useState("");

         // Event handling for typing in search bar
    const handleChange = (event) => {
      event.preventDefault();
      setSearchInput(event.target.value)

    }

    // useState to change once useEffect fetches our Google Books data


const onSubmitHandler = (event) => {
  // Prevent browser refreshing after form submission
  event.preventDefault()
  //fetchBooks()
  // Call fetch books async function

}

// UseEffect which fetches our data, and returns an Object
useEffect(() => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=search+terms=${searchInput}`
  
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      //console.log(json);
      setData(json)
      console.log(theData)
  } catch (error) {
      console.log("Error in async", error);
  }
  }
  fetchData()
  
  },[searchInput])


// const fetchBooks = async () => {
//   const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`

// const fetchData = async () => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     // console.log(json)
// } catch (error) {
//     console.log("Error in async", error);
// }
// }
// fetchData()
// }
// data([0].volumeinfo.title, .volumeinfo.authors, volumeinfo.description, volumeinfo.)




      

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



{/* <div className={styles.search}>
<input type="text" className={styles.searchTerm} placeholder="Enter book title, author, genre, etc..."></input>
<button type="submit" className={styles.searchButton}>
  <img src = {searchicon}/>
</button> </div> */}



