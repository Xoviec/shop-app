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
        <button className="button-delete-from-cart" onClick={deleteItem} value={props.id} >usuń
           {/* <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(204, 204, 204)"  viewBox="0 0 24 24" width="20px" height="20px">    <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 7 5 L 17 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 22 L 19 22 L 19 7 L 5 7 z"/></svg> */}
        </button>
 
    )
}

const mapDispatchToProps = dispatch =>({
    delete: cartItem => dispatch(actions.deleteItem(cartItem))
})

export default connect(null, mapDispatchToProps)(DeleteItem)