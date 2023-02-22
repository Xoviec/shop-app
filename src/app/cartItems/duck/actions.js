import types from './types'


const add = item =>({
    type: types.ADD_ITEM, item
})

const reset = item => ({
    type: types.RESET_CART, item
})

const deleteItem = item => ({
    type: types.DELETE_ITEM, item
})

export default {
    add,
    reset,
    deleteItem
}