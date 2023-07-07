import React, { useEffect, useState } from "react";
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
        fetchHandler().then((data) => setBooks(data));
    });
    console.log(books);
    return <div>All Books are here</div>;
};

export default Books;