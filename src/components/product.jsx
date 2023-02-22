import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AddCartItem from '../app/cartItems/components/AddCartItem';

export const Product = (output) =>{

    // const [output, setOutput] = useState([])
    // const [data, setData] = useState([])
    // const [item, setItem] = useState()
    // const [error, setHasError] = useState(false)

    // useEffect(() =>{
    //     fetch('https://dummyjson.com/products')
    //     .then(response => response.json())
    //     .then(res => setOutput(res))
    //     .then(()=>setData(output.products))
    //     .then(()=>setItem(data.find((data) => data.id === Number(id))))
    //     .catch(error => setHasError(true))
    // }, [])

    // console.log(output.products)

    const {id} = useParams();

    console.log(output.output.products)
    const data = output.output.products

    const item = data?.find((data) => data.id === Number(id))

    console.log(item)


    return(
        <div className='product-page'>
            {item?.title}
            <AddCartItem title={item.title}/>
        </div>
    )
}