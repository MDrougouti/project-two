import React from "react";
import { Box, TextField, Button, };
import { FormLabel, FormControlLabel, Checkbox } from "@material-ui/core";
import { useState } from "react";
import {useNvigate} from 'react-router-dom';
const AddBook = () => {
    const history = useNvigate();
    const [inputs, setfirst] = useState({
        name: "",
        description: "",
        price: "",
        aurthor: "",
        available: false,
        image: "",
    });
    const handelChange = (e) => {
        setInputs((prevState) =>{
            ...prevState,
            [e.target.name]: e.target.value
         // console.log(e.target.name, "Value", e.target.value);
        });
    };

    const sendRequest = async() =>{
       await axios.post("http://localhost:5000/books", {
            name:String(inputs.name),
            aurthor: String(inputs.aurthor),
            description: String(inputs.description),
            price: String(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked)
        }).then(res=>res.data);
    };
    const handelSumbmit = (e) =>{
        e.preventDefault();
        console.log(inputs, checked);
        sendRequest().then(()=> history("/books"));
    };
    return ( <form onSubmit={handelSumbmit}>
        <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
        >
       <FormLabel>Name</FormLabel> 
        <TextField value={inputs.name} onChange={handelChange} type="number"  margin="normal" fullWidth variant="outlined" name="name" />
        <FormLabel>Author</FormLabel> 
        <TextField value={inputs.aurthor} onChange={handelChange} margin="normal" fullWidth variant="outlined" name="author" />
        <FormLabel>Description</FormLabel> 
        <TextField value={inputs.description} onChange={handelChange} margin="normal" fullWidth variant="outlined" name="description" />
        <FormLabel>Price</FormLabel> 
        <TextFieldvalue={inputs.price} onChange={handelChange}  type="number" margin="normal" fullWidth variant="outlined" name="price" />
        <FormLabel>Image</FormLabel>
        <TextFieldvalue={inputs.image} onChange={handelChange}  margin="normal" fullWidth variant="outlined" name="image"/>
        <FormControlLabel control={<Checkbox checked={inputs.available} />} label="Available"/>
        <Button variant="contained" type="submit">Add Book</Button>
        

        </Box>
    </form>
    );
};

export default AddBook;