import { Link } from 'react-router-dom';
import  AddCartItem from '../app/cartItems/components/AddCartItem';


  export const ItemsList = (props) =>{

    return(
        <>
        <div className="product-container-landing div1 flex items-center justify-between p-10 bg-[#ecf3fd] my-3 animate-show-up h-[400px] w-[800px] rounded-sm shadow-3xl text-[#282828] mb-10 lg:w-[600px] lg:h-[300px] md:w-[400px] md:h-[200px] sm:w-[300px] sm:h-[150px]" >
            <div className='product-top'>
                <div className="img-container-landing flex justify-center items-center mx-auto bg-red-200 max-h-[300px] max-w-[300px]  overflow-hidden rounded-xl lg:max-h-[180px] lg:max-w-[180px] md:rounded-md md:max-w-[120px] md:max-h-[120px] sm:rounded-sm sm:max-w-[90px] sm:max-h-[90px]">
                    <Link key={props.title} to={`/${props.id}`}>
                        <img className="cursor-pointer object-contain hover:object-cover max-h-[300px] max-w-[300px] lg:max-w-[180px] lg:max-h-[180px] md:max-w-[120px] md:max-h-[120px] sm:max-w-[90px] sm:max-h-[90px]" src={props.thumbnail} alt="e" />
                    </Link>
                </div>
                <p className=" font-bold text-[1.8rem] lg:text-[1.2rem] md:text-[0.8rem] sm:text-[0.6rem]">
                    {props.title}  
                </p>
                
                <span className="product-price-landing font-bold text-[2rem] mt-5 mb-1 lg:text-[1.6rem] md:text-[1rem] md:mt-2 sm:text-[0.75rem]">
                    {props.price}$
                </span>
            </div>
 
            <div>
                <AddCartItem title={props.title} price={props.price} thumbnail={props.thumbnail}/>
            </div>

        </div>

        </>
    )
}