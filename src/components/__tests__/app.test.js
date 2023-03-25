import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Main } from '../../Main';
import store from '../../store';
import { Navbar } from '../navbar';
import Cart from '../cart';
import { App } from '../../App';
import { ItemsList } from '../itemsList';
import cartReducer from '../../app/cartItems/duck';

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
  it('should decrement counter', () => {
    const initialState = { list:[] };
    const action = {
      type: 'ADD_ITEM',
      title: 'Example Item',
      price: 10,
      thumbnail: 'http://example.com/image.jpg',
      ammount: 1,
    };


    const newState = cartReducer(initialState, action);


    console.log(newState)

    // expect(newState).toEqual(0);
  });

});