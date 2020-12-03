import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    let booksWord = '';
    booksWord = books.length!== 1? 'books': 'book'; 

    return (  
        <div className='navbar'>
            <h1>Safei's Reading List</h1>
            <p>You have {books.length} {booksWord} left to read!</p>
        </div>
    );
}
 
export default Navbar
