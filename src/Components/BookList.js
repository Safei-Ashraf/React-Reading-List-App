import React,{ useContext } from 'react';
import { BookContext } from '../Context/BookContext';
import BookInfo  from '../Components/BookInfo';

const BookList = () => {
    const { books } = useContext(BookContext);

    return books.length ? ( 
        <div className="book-list">
            <ul>
                {books.map(book=>{return(<BookInfo book={book} key={book.id}/>)})}
            </ul>
        </div>
     ) :( <div className='empty'>
        You Have No Books To Read Currently!
    </div>)
}
 
export default BookList;

