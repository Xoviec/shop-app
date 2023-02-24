import React from "react"
import { connect } from "react-redux"
import actions from "../duck/actions"
import { cartActions } from "../duck"

export const AddCartItem = (props) =>{

    const itemInput = React.createRef()

    const addItem = (e) =>{
        props.add(props.title, props.price, props.thumbnail)
    }

    return( 
        <button onClick={addItem}>
            Dodaj do koszyka
        </button>
 
    )
}

const mapDispatchToProps = dispatch =>({
    add: (cartItem, itemPrice, itemThumbnail) => dispatch(actions.add(cartItem, itemPrice, itemThumbnail))
})

export default connect(null, mapDispatchToProps)(AddCartItem)