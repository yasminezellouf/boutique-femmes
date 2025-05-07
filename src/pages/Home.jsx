  // src/pages/Home.jsx
import React from "react";
import productsData from "../data/data";
import ItemCard from "../components/ItemCard";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Produits pour Femmes</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {productsData.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
