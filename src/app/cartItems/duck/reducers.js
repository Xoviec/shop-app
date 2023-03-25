import types from './types'



const INITIAL_STATE = {
  // listName: 'Favourite',
  list: [
  ]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
      case types.ADD_ITEM:
        return{
          ...state, list: [...state.list, {title: action.item, price: action.item2, thumbnail: action.thumbnail, ammount: action.ammount}]
        }
      case types.RESET_CART:
        return{ 
          ...state, list: []
        }
      case types.DELETE_ITEM:
        return{
          ...state, list:[...state.list.filter((item)=> action.item !== item.title)]
        }
      case types.COMPONENT_UPDATE:
        return{
          ...state, list:[...state.list]
        }
      
      default:
      return state
    }
}

export default cartReducer