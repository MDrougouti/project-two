import React from "react";
import {AppBar} from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState();
    return(
        <div>
        <AppBar sx={{backgroundColor:'#232F3D'}} position="statick">
            <Toolbar>
            <Typography><BookIcon/></Typography>
            <Tabs
            sx={{ ml: "auto"}}
             textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={NavLink} to="/add" label='Add product' />
                <Tab LinkComponent={NavLink} to="/books" label='Books' />
                <Tab LinkComponent={NavLink} to="/about" label='About Us' />
            </Tabs>
            </Toolbar>
          
            
        </AppBar>
        </div>
    );
};

export default Header;