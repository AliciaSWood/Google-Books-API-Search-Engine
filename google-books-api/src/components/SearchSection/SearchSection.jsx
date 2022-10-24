import React from 'react';
import { useState } from 'react'
import styles from "./SearchSection.module.scss"
import searchicon from './searchicon.png'

const SearchSection = () => {
    const [searchInput, setSearchInput] = useState("");

      

    return (
<div>
<form className = {styles.Form}>
<input className = {styles.SearchBar}type = "text" placeholder = "Enter book title, author, genre, etc..."></input>
<button className = {styles.SubmitButton}><img className = {styles.SubmitImage}src = {searchicon}/></button>

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