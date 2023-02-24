import types from './types'


const add = (item, item2, thumbnail) =>({
    type: types.ADD_ITEM, item, item2, thumbnail
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