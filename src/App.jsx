import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from "react";
import { ItemsLIst } from './components/itemsList';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { cartActions } from './app/cartItems/duck';
import CartItemsContainer from './app/cartItems/components/CartItemsContainer';
import AddCartItem  from './app/cartItems/components/AddCartItem';
import BrandSelect from './components/brandSelect';
import CategorySelect from './components/categorySelect';


const store = createStore(rootReducer, composeWithDevTools())




export const App = (data) =>{




  const [brand, setBrand] = useState('')
  const [hasError, setHasError] = useState(false)
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(() =>{
    fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(res => setCategories(res))
    .catch(error => setHasError(true))
  }, [])


  console.log(categories)

  const categoryChange = (categoryName) =>{
    setCategory(categoryName)
  }

  const brandChange = (brandName) =>{
    setBrand(brandName)
  }

  const products = data.output.products


  const brandFilter = products?.filter((products)=> products.brand.includes(brand))
  const categoryFilter = brandFilter?.filter((products)=> products.category.includes(category))

  console.log(products?.filter((products)=> products.brand.includes(brand)))






  return (
    <div className="App">
      <div className='filtering'>
        <BrandSelect brandChange={brandChange}></BrandSelect>
        <CategorySelect categories={categories} categoryChange={categoryChange}></CategorySelect>
      </div>

      <div className="products-container">
      {
        products ? 
          (
            categoryFilter.map((product)=>
              <ItemsLIst
              title={product.title} 
              id={product.id} 
              brand={product.brand} 
              category={product.category} 
              thumbnail={product.thumbnail} 
              price={product.price} 
              stock={product.stock} 
              description={product.description}
              />      
            )
          )
        :
          <div>

          </div>
      }
      </div>
      
    </div>
  );
}

