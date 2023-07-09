import {Button} from "@mui/material";
import React from "react";
import "./Book.css";


const Book = (props) => {
    const {_id, name, aurthor, description, price, image} = props.book;
    return <div className="card">
       <img src={image} alt={name} />
       <article>By {aurthor}</article>
       <h3>{name}</h3>
       <p>{description}</p> 
       <h3>Rs {price}</h3>
       <Button LinkComponent={Link} to={'/books/${_id}'} sx={{mt:'auto'}}>Update</Button>
       <Button sx={{mt: 'auto'}}>Delete</Button>
        </div>;
};

export default Book;