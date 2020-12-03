import React,{ useContext } from 'react';
import { BookContext } from '../Context/BookContext';

const BookInfo = ({ book }) => {
const { removeBook } = useContext(BookContext);

    return (
        <li className="book-info">
            <div className='title'>📙 {book.title}</div>
            <div className='author'> 🌠{book.author}</div>
            <div onClick={()=>{removeBook(book.id)}} className='remove'>X</div>
        </li>
      );
}
 
export default BookInfo;