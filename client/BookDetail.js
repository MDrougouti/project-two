import React, { useEffect, useState } from "react";
import axios from "axios";
import {Box, Button, Checkbox, FormControlLabel, FormLabel, TextField} from "@mui/material";
import {useParams} from "react-router-dom";

const BookDetail = () => {
    const[inputs, setInputs] = useState({});
    const id = useParams().id;
    const [checked,setChected]= useState(false);
    console.log(id);
    useEffect(() => {
        const fetchHandler = async () =>{
            await axios
            .get('http://localhost:5000/books/${id}')
            .then((res) => res.data).then(data=>setInputs(data.book));
        };
        fetchHandler()
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handelChange = (e) =>{
        console.log(e);
    };
    return ( <div>
        {inputs && (
        <form onSubmit={handleSubmit}>
        <Box
        display = "flex"
        flexDirection = "column"
        justifyContent = {"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}
        >}
            <FormLabel>Name</FormLabel>
            <TextField
             value={inputs.name}
             onChange={(e)=>setInputs({...inputs, name: e.target.value})}
             margin="normal"
             fullWidth
             variant="outlined"
             name="name"
             />
             <FormLabel>Aurthor</FormLabel>
 
        <TextField value={inputs.aurthor} onChange={handelChange} margin="normal" fullWidth variant="outlined" name="author" />
        <FormLabel>Description</FormLabel> 
        <TextField value={inputs.description} onChange={handelChange} margin="normal" fullWidth variant="outlined" name="description" />
        <FormLabel>Price</FormLabel> 
        <TextFieldvalue={inputs.price} onChange={handelChange}  type="number" margin="normal" fullWidth variant="outlined" name="price" />
        <FormLabel>Image</FormLabel>
        <TextFieldvalue={inputs.image} onChange={handelChange}  margin="normal" fullWidth variant="outlined" name="image"/>
        <FormControlLabel 
          control={
          Checkbox 
           checked={checked}
        onChange={() => setChected(!checked)}}></FormControlLabel>
        

        
    </div>


export default BookDetail