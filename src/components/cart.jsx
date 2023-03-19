import { useState } from "react"
import CartItemsContainer from "../app/cartItems/components/CartItemsContainer"
import { connect } from "react-redux"


const Cart = (props) =>{

    const [visible, setVisible] = useState(false)

    const itemsNumber = props.items.list.map((item)=>item.ammount).reduce(function(a, b) { return a + b; }, 0);

    
    
    return(
        <>
        <div className="cart">
            <div className="cart-btn-div">
                <button onClick={()=>setVisible(!visible)} className={`cart-button nav-btn ${visible ? 'btn-active' : ''}`}>Cart ({itemsNumber})</button>
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