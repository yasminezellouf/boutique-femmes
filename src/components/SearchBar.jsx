import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Rechercher un produit..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "10px",
        width: "100%",
        maxWidth: "400px",
        margin: "20px auto",
        display: "block",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "16px",
      }}
    />
  );
};

export default SearchBar;
