import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setBrand(result.brand);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
  };

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, brand, category }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    navigate("/");
  };

  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        type="text"
        placeholder="Enter Product Brand"
        className="inputBox"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Name"
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Price"
        className="inputBox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Category"
        className="inputBox"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="appButton" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
