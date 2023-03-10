import React from "react"
import { connect } from "react-redux"
import actions from "../duck/actions"
import { cartActions } from "../duck"

export const AddCartItem = (props) =>{

    const itemInput = React.createRef()

  
    const addItem = (e) =>{
        const item = props.items.list.find((item) => item.title === (props.title))
        item ? 
            item.ammount = (item.ammount+1) 
            :
            props.add(props.title, props.price, props.thumbnail, 1)
        props.update()        
    }

    return( 
        <button className="add-to-cart-btn" onClick={addItem}>
            Dodaj do koszyka
        </button>
 
    )
}

const mapDispatchToProps = dispatch =>({
    add: (cartItem, itemPrice, itemThumbnail, ammount) => dispatch(actions.add(cartItem, itemPrice, itemThumbnail, ammount)),
    update: ()=>dispatch(actions.componentUpdate())
})

const mapStateToProps = state => ({
    items: state.cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCartItem)