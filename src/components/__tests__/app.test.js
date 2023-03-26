import { fireEvent, render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Main } from '../../Main';
import store from '../../store';
import { Navbar } from '../navbar';
import Cart from '../cart';
import { App } from '../../App';
import { ItemsList } from '../itemsList';
import cartReducer from '../../app/cartItems/duck';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '../../app/cartItems/duck/actions';
import types from '../../app/cartItems/duck/types';
import cart from '../cart';


// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);


describe('App', () => {
  it('Checks if cart updates properly', async () => {
    render(
       <Provider store={store}>
         <BrowserRouter>
          <Main>
            <Navbar>
              <Cart></Cart>
            </Navbar>
            <App>
              <ItemsList></ItemsList>
            </App>
          </Main>
        </BrowserRouter>
       </Provider>
    );

    const addToCartBtn = await screen.findAllByText("Dodaj do koszyka")
    const cartItemCounter = screen.getByText('Cart (0)')
    fireEvent.click(addToCartBtn[0])
    expect(cartItemCounter).toHaveTextContent('Cart (1)')

  });
  it('Checks if deleting item from cart works', async () => {
    render(
       <Provider store={store}>
         <BrowserRouter>
          <Main>
            <Navbar>
              <Cart></Cart>
            </Navbar>
            <App>
              <ItemsList></ItemsList>
            </App>
          </Main>
        </BrowserRouter>
       </Provider>
    );
    const deleteItemBtn = screen.getByText('x')
    expect(deleteItemBtn).toBeInTheDocument
    fireEvent.click(deleteItemBtn)
    expect(deleteItemBtn).not.toBeInTheDocument
  });
  it('should dispatch add item', async () => {
    

    render(
      <Provider store={store}>
        <BrowserRouter>
         <Main>
           <Navbar>
             <Cart></Cart>
           </Navbar>
           <App>
             <ItemsList></ItemsList>
           </App>
         </Main>
       </BrowserRouter>
      </Provider>
   )
    


    // const store = mockStore( { cart: []  });
    const cartItem = 'Example Item';
    const itemPrice = 10;
    const itemThumbnail = 'http://example.com/image.jpg';
    const ammount = 1;
    const id = 1;
    const expectedAction = {
      type: types.ADD_ITEM,
      item: cartItem,
      item2: itemPrice,
      thumbnail: itemThumbnail,
      ammount: ammount,
      id: id
    };
    const cartItemCounter = screen.getByText('Cart (0)')

    // store.dispatch({type: 'ADD_ITEM', item: cartItem, item2: itemPrice,thumbnail: itemThumbnail, ammount: ammount, id: id})
    act(() => 

    store.dispatch(actions.add(cartItem, itemPrice, itemThumbnail, ammount, id))

    )
    
    // const actionsList = store.getActions();
    // expect(actionsList).toEqual([expectedAction]);

    // console.log(actionsList)
    // await console.log(store.getState())
    
    console.log(cartItemCounter.textContent)

    // const addToCartBtn = await screen.findAllByText("Dodaj do koszyka")
    // fireEvent.click(addToCartBtn[0])
    console.log(store.getState())

    
    act(() => 

    store.dispatch(actions.deleteItem(cartItem))
    )

    console.log(cartItemCounter.textContent)


    // screen.debug()

    
    // expect(newState).toEqual(0);
  });

});