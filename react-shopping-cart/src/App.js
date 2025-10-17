import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Cart from './components/Cart';

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id != action.payload.id
        ),
      };
    default:
      return state;
  }
};

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const fetchProducts = () => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
          setProducts(data);
          setLoading(false);
        })
        .catch(error => {
          console.log("Ürünler çekilirken hata oluştu:", error);
          setLoading(false);
        });
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className='App'><h1>Ürünler Yükleniyor...</h1></div>;
  }

  return (
    <div className='App'>
      <header>
        <h1>Mini E-Ticaret</h1>
      </header>
      <div className='app-layout'>
        <main className='product-grid'>
        {products.map(product => (
          <div key={product.id} className='product-card'>
            <img src={product.image} alt={product.title} className='product-image' />
            <h2 className='product-title'>{product.title}</h2>
            <h2 className='product-price'>${product.price}</h2>
            <button 
              className='add-to-cart-btn'
              onClick={() => dispatch({type: 'ADD_TO_CART', payload: product})}
            >
              Sepete Ekle
            </button>
          </div>
        ))}
      </main>
      <Cart cartItems={cartState.cartItems} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;