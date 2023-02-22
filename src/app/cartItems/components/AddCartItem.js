import React from "react"
import { connect } from "react-redux"
import actions from "../duck/actions"
import { cartActions } from "../duck"

export const AddCartItem = (props) =>{

    const itemInput = React.createRef()

    const addItem = (e) =>{
        // e.preventDefault()
        // console.log(e.target.value)
        // console.log(props.add('elo'))
        // console.log(cartActions)
        props.add(e.target.value)
    }

    return( 
        <button onClick={addItem} value={props.title} >
            Dodaj do koszyka
        </button>
 
    )
}

const mapDispatchToProps = dispatch =>({
    add: cartItem => dispatch(actions.add(cartItem))
})

export default connect(null, mapDispatchToProps)(AddCartItem)