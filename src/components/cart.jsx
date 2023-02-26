import { useState } from "react"
import CartItemsContainer from "../app/cartItems/components/CartItemsContainer"
import { connect } from "react-redux"


const Cart = (props) =>{

    const [visible, setVisible] = useState(false)


    const itemCounter = props.items.list.length
    
    
    return(
        <>
        <div className="cart">
            <div className="cart-btn-div">
                <button onClick={()=>setVisible(!visible)} className={`cart-button nav-btn ${visible ? 'btn-active' : ''}`}>Cart ({itemCounter})</button>
            </div>
            <CartItemsContainer visible={visible}/>
        </div>
        </>
    )
}

const mapStateToProps = state => ({
    items: state.cartItems
})

export default connect(mapStateToProps, {})(Cart)