import React from "react";
import Header from "./componets/Header";
import {Routes} from 'react-router-dom';


function App() {
    return (
        <React.Fragment>
            <headr>
                <Header/>
            </headr>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/add" element={<AddBook />} exact />
                    <Route path="/books" element={<Books />} exact />
                    <Route path="/about" element={<Books />} exact />  
                    <Route path="/about" element={<Books />} exact />  
                    </Routes>
            </main>
        </React.Fragment>
    )
}

export default App; 