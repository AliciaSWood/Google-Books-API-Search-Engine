import { useState } from 'react'
import { useEffect} from 'react'
import SearchSection from './components/SearchSection/SearchSection';
import BookLibrary from './containers/BookLibrary/BookLibrary';
import HeaderSection from './containers/HeaderSection/HeaderSection';





function App() {
  
  const [theData, setData] = useState({items: []});
    
  return (
    <div className="App">
      <HeaderSection />
      <SearchSection theData={theData} setData ={setData}/>
      <BookLibrary />
    </div>
  );
}

export default App;
