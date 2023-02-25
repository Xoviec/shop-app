import { useState } from "react"
import CartItemsContainer from "../app/cartItems/components/CartItemsContainer"

export const Cart = () =>{

    const [visible, setVisible] = useState(true)
    
    return(
        <>
        <div className="cart">
            <div className="cart-btn-div">
                <button onClick={()=>setVisible(!visible)} className="cart-button">Cart</button>
            </div>
            <CartItemsContainer visible={visible}/>
        </div>
        </>
    )
}