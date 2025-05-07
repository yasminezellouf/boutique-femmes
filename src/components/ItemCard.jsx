// src/components/ItemCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ItemCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      position: "relative"
    }}>
      {/* Badge NEW if views < 10 */}
      {product.views < 10 && (
        <div style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "#ff4757",
          color: "white",
          padding: "5px 10px",
          fontSize: "12px",
          fontWeight: "bold",
          borderRadius: "5px"
        }}>
          🆕 New Arrival
        </div>
      )}

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
      </Link>
      <h3>{product.name}</h3>
      <p>{product.price} DZD</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Ajouter au panier
      </button>
    </div>
  );
};

export default ItemCard;




