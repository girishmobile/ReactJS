import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const handleSave = () => {
    // Navigate to /products
    navigate("/products");
  };
  const navigate = useNavigate();

  return (
    <div>
      <h1>Product Details - </h1>
      <button onClick={handleSave}>Go back</button>
    </div>
  );

}

export default ProductDetails;
