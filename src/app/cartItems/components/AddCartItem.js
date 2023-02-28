import React from "react"
import { connect } from "react-redux"
import actions from "../duck/actions"
import { cartActions } from "../duck"
import { useReducer } from "react"

export const AddCartItem = (props) =>{

    const itemInput = React.createRef()
    const [, forceUpdate] = useReducer(x => x + 1, 0);

  
    const addItem = (e) =>{
        const item = props.items.list.find((item) => item.title === (props.title))

        item ? 
            item.ammount = (item.ammount+1) 
            :
            props.add(props.title, props.price, props.thumbnail, 1)
            
        props.update()        



        // console.log(props.items.list)
        // console.log(props.items)       
        // console.log(item)
        // console.log(props.items.list[0].title)
        // props.items.list[0].title = 'chuj'
        // props.add(props.title, props.price, props.thumbnail)
    }

    return( 
        <button onClick={addItem}>
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