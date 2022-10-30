import { useState } from 'react'
import { useEffect} from 'react'
import SearchSection from './components/SearchSection/SearchSection';
import BookLibrary from './containers/BookLibrary/BookLibrary';
import HeaderSection from './containers/HeaderSection/HeaderSection';





function App() {
  
  const [bookData, setBookData] = useState({items: []});
  const [query, setquery] = useState("")
  
    
  return (
    <div className="App">
      <HeaderSection />
      <SearchSection bookData={bookData} setBookData ={setBookData} setquery = {setquery} query = {query}/>
      <BookLibrary bookData = {bookData} query = {query}/>
    </div>
  );
}

export default App;
