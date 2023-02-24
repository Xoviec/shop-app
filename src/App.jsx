import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from "react";
import { ItemsLIst } from './components/itemsList';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { cartActions } from './app/cartItems/duck';
import CartItemsContainer from './app/cartItems/components/CartItemsContainer';
import AddCartItem  from './app/cartItems/components/AddCartItem';



const store = createStore(rootReducer, composeWithDevTools())




export const App = (data) =>{


  


  const products = data.output.products


  // console.log(products)

  return (
    <div className="App">
      <div>
        {/* <CartItemsContainer/> */}
        {/* <AddCartItem title={'eesadas'}/> */}
      </div>
      {
        products ? 
          (
            products.map((product)=>
              <ItemsLIst
              title={product.title} 
              id={product.id} 
              brand={product.brand} 
              category={product.category} 
              thumbnail={product.thumbnail} 
              price={product.price} 
              stock={product.stock} 
              description={product.description}
              />      
            )
          )
        :
          <div>

          </div>
      }
    </div>
  );
}

