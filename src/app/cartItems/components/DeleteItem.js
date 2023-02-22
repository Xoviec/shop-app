import React from "react"
import { connect } from "react-redux"
import actions from "../duck/actions"
import { cartActions } from "../duck"

export const DeleteItem = (props) =>{

    const itemInput = React.createRef()

    const deleteItem = (e) =>{
        props.delete(e.target.value)
    }

    return( 
        <button onClick={deleteItem} value={props.id} >
            X
        </button>
 
    )
}

const mapDispatchToProps = dispatch =>({
    delete: cartItem => dispatch(actions.deleteItem(cartItem))
})

export default connect(null, mapDispatchToProps)(DeleteItem)