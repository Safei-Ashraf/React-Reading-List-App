
import React from 'react';
import BookList from './Components/BookList';
import Navbar from './Components/Navbar';
import NewBookForm from './Components/NewBookForm';
import BookContextProvider from './Context/BookContext';

function App() {
  return (
    <div className="App">
     <BookContextProvider>
      <Navbar/>
      <BookList/>
      <NewBookForm/>
     </BookContextProvider>
    </div>
  );
}

export default App;
