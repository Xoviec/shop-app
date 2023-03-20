import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Main } from '../../Main';
import store from '../../store';
import { Navbar } from '../navbar';
import Cart from '../cart';
import { App } from '../../App';
import { ItemsList } from '../itemsList';

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

});