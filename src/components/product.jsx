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

    console.log(item.thumbnail)

    return(
        <>
        <div className="product-container div1 flex items-center justify-between p-10 bg-[#ecf3fd] my-3 animate-show-up h-[400px] w-[800px] rounded-sm shadow-3xl text-[#282828] mb-10 lg:w-[600px] lg:h-[300px] md:w-[400px] md:h-[200px] sm:w-[300px] sm:h-[150px]" >
            <div className="img-container flex justify-center items-center mx-auto bg-red-200 max-h-[300px] max-w-[300px]  overflow-hidden rounded-xl lg:max-h-[180px] lg:max-w-[180px] md:rounded-md md:max-w-[120px] md:max-h-[120px] sm:rounded-sm sm:max-w-[90px] sm:max-h-[90px]">
                    <img className="cursor-pointer object-contain hover:object-cover max-h-[300px] max-w-[300px] lg:max-w-[180px] lg:max-h-[180px] md:max-w-[120px] md:max-h-[120px] sm:max-w-[90px] sm:max-h-[90px]" src={item.thumbnail} alt="e" />
            </div>
            <div className="product-right flex flex-col justify-between items-centera h-[300px] w-[300px]  bg-green-300/  lg:ml-10 lg:h-[180px] md:h-[120px] md:w-[180px] md:ml-3 sm:h-[90px] sm:w-[120px]">
                <div className="product-info flex justify-between">

                        <p className="font-bold text-[1.8rem] lg:text-[1.2rem] md:text-[0.8rem] sm:text-[0.6rem]">
                            {item.title}  
                        </p>
                        <span className="product-brand-category opacity-50 lg:text-[0.7rem] md:text-[0.5rem] sm:text-[0.4rem] z-0">
                            {item.brand} - {item.category}
                        </span>
                        <span className="product-price font-bold text-[2rem] mt-5 mb-1 lg:text-[1.6rem] md:text-[1rem] md:mt-2 sm:text-[0.75rem]">
                            {item.price}$
                        </span>
                        <span className="lg:text-[0.7rem] md:text-[0.5rem]">
                            <a className={item.stock < 20  ?  'text-orange' : item.stock == 0 ? 'text-red' : 'text-green'}>
                                {
                                    ` ${item.stock} `
                                }
                            </a>
                            left in stock
                        </span>
                 
                </div>
                <div>
                    <AddCartItem title={item.title} price={item.price} thumbnail={item.thumbnail}/>
                </div>
            </div>

        </div>
        </>
    )
}