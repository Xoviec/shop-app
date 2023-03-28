import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import cartReducer, { cartTypes } from "../duck";
import DeleteItem from "./DeleteItem";

const CartItemsContainer = (props) =>{

    let totalPrice = 0;

    return(
        <div className={`${props.visible ? `` : 'hidden'}`}>
            <div className="cart-component">
            {
            props.items.list.map(item=>
                (   
                    totalPrice+=item.price*item.ammount,

                    <div className="cart-item" key={item.id}>
                    <div className="cart-image">
                        <img src={item.thumbnail} alt="e" />
                    </div>
                    <div className="cart-item-container">
                        <div className="cart-item-info">
                            <p className="item-title">{item.title}</p>
                            <p className="item-price">{item.price}$</p>
                        </div>
                        <div className="cart-item-delete">
                            <DeleteItem id={item.title}/>
                            <p>{item.ammount}</p>
                        </div>
                    </div>
                </div>    
                )
            )}
            </div>

        {
            props.items.list.length > 0 ? 

            <div className="cart-total">
                <p>Do zapłaty:</p>
                <p>{totalPrice}$</p>
            </div> :

            <div className="cart-total">
                <p>Koszyk jest pusty</p>
            </div>
        }
 




    </div>

    )
}

const mapStateToProps = state => ({
    items: state.cartItems,
})

export default connect(mapStateToProps, {})(CartItemsContainer)