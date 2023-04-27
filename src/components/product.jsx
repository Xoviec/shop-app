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

    const data = output.output.products

    const item = data?.find((data) => data.id === Number(id))


    console.log(output)


    return(
        <>
        <div data-testid="product-page-div" className='product-page'>
            <div className="product-container div1 " >
                <div className="img-container ">
                        <img className="" src={item.thumbnail} alt="e" />
                </div>
                <div className="product-right ">
                    <div className="product-info ">

                            <p className="product-title ">
                                {item.title}  
                            </p>
                            <span className="product-brand-category ">
                                {item.brand} - {item.category}
                            </span>
                            <div className='section-3rd'>
                                <span className="product-price">
                                    {item.price}$
                                </span>
                                <span className="">
                                    <a className={item.stock < 20  ?  'text-orange' : item.stock == 0 ? 'text-red' : 'text-green'}>
                                        {
                                            ` ${item.stock} `
                                        }
                                    </a>
                                    left in stock
                                </span>
                            </div>
                    
                            <span className='product-description'>
                                {item.description}
                            </span>
                    
                    </div>
                    <div>
                        <AddCartItem title={item.title} price={item.price} thumbnail={item.thumbnail}/>
                    </div>
                </div>

            </div>
        </div>
       
        </>
    )
}