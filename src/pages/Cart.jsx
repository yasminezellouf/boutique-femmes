// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Votre panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />
            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p>{item.price} DZD</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
            </div>
          </div>
        ))
      )}
      <div className="cart-total">
        <h3>Total: {total} DZD</h3>
      </div>
    </div>
  );
};

export default Cart;

 
 