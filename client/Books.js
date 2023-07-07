import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
const URL = "http://localhost:5000/books";


const fetchHandler = async() =>{
    return await axios.get(url, {
        params: {
            id:paramId
        }
    })
    .then(function (response) {
    })
    .catch(function (error) {
    })
}
const Books = () => {
    const [books, setBooks] = useState();   useEffect(() =>{
        fetchHandler().then((data) => setBooks(data.books));
    }, []);
    console.log(books);
    return <div>
        <ul>
            {books && books.map((book, i)=>(
                <li className="book" key={i}>
                    <Book book={book} />

                </li>
            ))}
        </ul></div>;
};

export default Books;