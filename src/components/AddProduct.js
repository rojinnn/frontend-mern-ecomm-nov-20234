import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [error, setError] = useState(false);
  const refresh = () => {
    setName("");
    setBrand("");
    setCategory("");
    setError(false);
    setPrice("");
  };
  const addProduct = async () => {
    if (!name || !price || !category || !brand) {
      setError(true);
      return false;
    } else {
      let result = await fetch("http://localhost:5000/add-product", {
        method: "post",
        body: JSON.stringify({ name, price, category, brand }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      if (result) {
        alert("Added Product Succesfully");
        refresh();
      } else {
        alert("Failed to add product");
      }
    }
  };
  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter Product Brand"
        className="inputBox"
        onChange={(e) => {
          setBrand(e.target.value);
        }}
        value={brand}
      />
      {error && !brand && (
        <span className="invalid-input">Enter valid brand!</span>
      )}
      <input
        type="text"
        placeholder="Enter Product Name"
        className="inputBox"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      {error && !name && (
        <span className="invalid-input">Enter valid name!</span>
      )}
      <input
        type="text"
        placeholder="Enter Product Price"
        className="inputBox"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      {error && !price && (
        <span className="invalid-input">Enter valid price!</span>
      )}
      <input
        type="text"
        placeholder="Enter Product Category"
        className="inputBox"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      {error && !category && (
        <span className="invalid-input">Enter valid category!</span>
      )}

      <button className="appButton" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
