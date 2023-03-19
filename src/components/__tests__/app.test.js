import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Main } from '../../Main';
import store from '../../store';
import { Navbar } from '../navbar';
import Cart from '../cart';
import { App } from '../../App';

describe('App', () => {
  it('should render without throwing an error', () => {
    render(
       <Provider store={store}>
         <BrowserRouter>
          <Main>
            <Navbar>
              <Cart></Cart>
            </Navbar>
            <App></App>
          </Main>
        </BrowserRouter>
       </Provider>
    );
    // screen.debug()
      expect(screen.getByText('Koszyk jest pusty')).toBeInTheDocument();

  });

  // it('should display the correct text', () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <App />
  //       </BrowserRouter>
  //     </Provider>
  //   );
  //   expect(screen.getByText('Hello World!')).toBeInTheDocument();
  // });
});