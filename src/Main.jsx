import React, { useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

import { App } from "./App"
import { Navbar } from "./components/navbar"
import { Product } from "./components/product"
import { Contact } from "./components/contact"
import './index.css';


export const Main = () =>{

    const [output, setOutput] = useState([])
    const [hasError, setHasError] = useState(false)
    useEffect(() =>{
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(res => setOutput(res))
        .catch(error => setHasError(true))
    }, [])


    return(
        <>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route path='/' element={<App output={output}/>}/>
                <Route path='/contact' element={<Contact/>}/>
                {/* <Route path='/users' element={<Users data={data} handleAddData={addData}/>}/> */}
                <Route path='/:id' element={<Product output={output}/>}/>
            </Routes>
        </div>

        </>


    )
}