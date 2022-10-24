import { useState } from 'react'
import { useEffect} from 'react'
import SearchSection from './components/SearchSection/SearchSection';
import BookLibrary from './containers/BookLibrary/BookLibrary';
import HeaderSection from './containers/HeaderSection/HeaderSection';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <SearchSection />
      <BookLibrary />
    </div>
  );
}

export default App;
