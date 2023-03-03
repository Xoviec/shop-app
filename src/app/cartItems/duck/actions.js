import types from './types'


const add = (item, item2, thumbnail, ammount) =>({
    type: types.ADD_ITEM, item, item2, thumbnail, ammount
})

const reset = item => ({
    type: types.RESET_CART, item
})

const deleteItem = item => ({
    type: types.DELETE_ITEM, item
})

const componentUpdate = () =>({
    type: types.COMPONENT_UPDATE
})
export default {
    add,
    reset,
    deleteItem,
    componentUpdate
}