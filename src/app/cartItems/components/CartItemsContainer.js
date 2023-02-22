import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import cartReducer, { cartTypes } from "../duck";

const CartItemsContainer = (props) =>{

    console.log(props)
    return(
        <div>
        {
            props.items.list.map(item=>
                <div>
                    {item}
                </div>    
            )
        }
    </div>

    )
}

const mapStateToProps = state => ({
    items: state.cartItems
})

export default connect(mapStateToProps, {})(CartItemsContainer)