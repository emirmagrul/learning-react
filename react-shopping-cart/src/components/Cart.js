import React from 'react';
import './Cart.css';

function Cart({cartItems, dispatch}) {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <aside className='cart-container'>
            <h2>Sepet</h2>
            {cartItems.length === 0 ? (
                <p>Sepetiniz Boş.</p>
            ) : (
                <>
                    <ul className='cart-items'>
                        {cartItems.map((item) => (
                            <li key={item.id} className='cart-item'>
                                <img src={item.image} alt={item.title} className='cart-item-image' />
                                <div className='cart-item-details'>
                                    <span>{item.title}</span>
                                    <span>${item.price}</span>
                                </div>
                                <button
                                    className='remove-btn'
                                    onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: item})}
                                >
                                    &times; {/* Bu bir çarpı işareti (X) */}
                                </button>
                            </li>
                            ))}
                    </ul>
                    <div>
                        <strong>Toplam: ${totalPrice.toFixed(2)}</strong>
                    </div>
                </>
            )} 
        </aside>
    )
}

export default Cart;