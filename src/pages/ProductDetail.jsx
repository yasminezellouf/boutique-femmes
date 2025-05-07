// src/pages/ProductDetail.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/data";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = productsData.find((item) => item.id.toString() === id);

  useEffect(() => {
    if (product) {
      product.views += 1;
    }
  }, [product]);

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Aucun produit trouvé</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.name} width="300" />
      <h2>{product.name}</h2>
      <p>Prix : {product.price} DZD</p>
      <p>Vues : {product.views}</p>
      <p>Vendu : {product.sold}</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>

      <h3>Commentaires :</h3>
      {product.reviews.length === 0 ? (
        <p>Aucun avis pour ce produit</p>
      ) : (
        product.reviews.map((review, index) => (
          <div key={index}>
            <strong>{review.user}</strong> - ⭐ {review.rating}
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductDetail;




