import types from './types'


// const INITIAL_STATE = {
//     listName: 'Favourite',
//     list: [
//         'iphone',
//         'iphoneX',
//         'iphone 11'
//     ]
// }


const INITIAL_STATE = {
  listName: 'Favourite',
  list: [
      {
        title: 'iphone',
        price: 720,
        thumbnail: '',
        ammount: 1
      },
      {
        title: 'iphonex',
        price: 900,
        thumbnail: '',
        ammount: 1
      }
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
      
      default:
      return state
    }
}

export default cartReducer