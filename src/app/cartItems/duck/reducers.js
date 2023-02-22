import types from './types'


const INITIAL_STATE = {
    listName: 'Favourite',
    list: [
        'iphone',
        'iphoneX',
        'iphone 11'
    ]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
      case types.ADD_ITEM:
        return{
          ...state, list: [...state.list, action.item]
        }
      case types.RESET_CART:
        return{ 
          ...state, list: []
        }
      
      default:
            return state
    }
}

export default cartReducer