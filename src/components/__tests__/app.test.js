import { fireEvent, render, screen, act, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
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

    const cartItemCounter = screen.getByText('Cart (0)')
    const cartItem = 'Example Item';
    const itemPrice = 10;
    const itemThumbnail = 'http://example.com/image.jpg';
    const ammount = 1;
    const id = 1;

    act(() => 
      store.dispatch(actions.add(cartItem, itemPrice, itemThumbnail, ammount, id))
    )
    
    expect(cartItemCounter.textContent).toBe('Cart (1)')

  });


  it('should dispatch delete item', async () => {
    

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

    const cartItemCounter = screen.getByText('Cart (1)')
    const cartItem = 'Example Item';

    act(() => 
      store.dispatch(actions.deleteItem(cartItem))
    )

    expect(cartItemCounter.textContent).toBe('Cart (0)')

  });

  it('checks if product page works', async () => {
    

    render(
      <Provider store={store}>
        <BrowserRouter initialEntries={["/:id"]} >
          <Main>
            <App>
              <ItemsList></ItemsList>
            </App>
          </Main>
        </BrowserRouter>
      </Provider>
   )

  //  await waitFor(() => expect(getAllByTestId('img-link')).toBeVisible());

   
    const productImg = await screen.findAllByTestId('img-link')

    fireEvent.click(productImg[1])

    console.log(productImg[1])

    screen.debug()




    const productPage = await screen.findAllByTestId('product-page-div')

    expect(productPage).toBeInTheDocument

    screen.debug()

  });

});