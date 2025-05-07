// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      background: "#f8f8f8",
      borderBottom: "1px solid #ccc"
    }}>
      <Link to="/" style={{ fontWeight: "bold", fontSize: "20px", textDecoration: "none" }}>Boutique Femmes</Link>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        🛒 Panier ({itemCount})
      </Link>
    </nav>
  );
};

export default Navbar;
