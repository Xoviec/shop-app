import '../index.css'
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Cart } from './cart';


import { ItemsLIst } from './itemsList';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { cartActions } from '../app/cartItems/duck';

const store = createStore(rootReducer, composeWithDevTools())


window.store = store



// store.dispatch(cartActions.add('sokoloko', 'dupa'))
// store.dispatch(cartActions.deleteItem('iphone'))


// console.log(cartActions.add)

export const Navbar = ({cart}) =>{
    
    const location = useLocation();

    const [active, setActive] = useState(location.pathname)

  
    useEffect(() => {
        setActive(location.pathname)
      });

    return(
        <div className='navbar'>
                <div className='nav-buttons'>
                        <Link  to='/'>
                            <button className={`${active==='/' ? `active` : 'non-active'} nav-btn`}>
                                Home
                            </button>
                        </Link>
                        <Link to='/contact'>
                            <button className={`${active==='/contact' ? `active` : 'non-active'} nav-btn`}>
                                Contact
                            </button>
                        </Link>

                    <div className='nav-item'>
                        <Cart/>
                    </div>
                </div>

        
        </div>
    )
}