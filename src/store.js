import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { cartActions } from './app/cartItems/duck';



const store = createStore(rootReducer, composeWithDevTools())


// window.store = store

export default store