import { Link } from 'react-router-dom';
import  AddCartItem from '../app/cartItems/components/AddCartItem';


  export const ItemsList = (props) =>{

    return(
        <>
        <div key={props.id} className="product-container-landing div1 " >
            <div className='product-top'>
                <div className="img-container-landing ">
                    <Link data-testid="img-link" key={props.title} to={`/${props.id}`}>
                        <img className="" src={props.thumbnail} alt="e" />
                    </Link>
                </div>
                <p className=" ">
                    {props.title}  
                </p>
                
                <span className="product-price-landing ">
                    {props.price}$
                </span>
            </div>
 
            <div>
                <AddCartItem title={props.title} price={props.price} thumbnail={props.thumbnail} id={props.id}/>
            </div>

        </div>

        </>
    )
}