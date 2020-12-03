import React, { useContext, useState} from 'react';
import { BookContext } from '../Context/BookContext';

const NewBookForm = () => {
    const { addBook } = useContext(BookContext);
    
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, author);
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return (  
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Add Title...'
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                required
            />
            <input
                type='text'
                placeholder='Add Author...'
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}
                required
            />
            <input
                type='submit'
                value='Add Book'
                className='btn'
            />
        </form>
    );
}
 
export default NewBookForm;