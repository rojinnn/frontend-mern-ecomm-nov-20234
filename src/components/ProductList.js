import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        Content_Type: "application/json",
      },
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      alert(`The item with id ${id} has been deleted`);
      getProducts();
    }
  };
  return (
    <div className="product-list">
      <h3>Product List</h3>
      <ul>
        <li>S.No</li>
        <li>Brand</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>operation</li>
      </ul>
      {products.length > 0 ? (
        products.map((e, i) => (
          <ul key={e._id}>
            <li>{i + 1}</li>
            <li>{e.brand}</li>
            <li>{e.name}</li>
            <li>{e.price}</li>
            <li>{e.category}</li>
            <li>
              <button
                className="operation-button"
                onClick={() => deleteProduct(e._id)}
              >
                <MdDelete />
              </button>
              <Link to={`/update/${e._id}`} className="operation-button">
                <MdEdit />
              </Link>
            </li>
          </ul>
        ))
      ) : (
        <h1 className="invalid-search">No product found!</h1>
      )}
    </div>
  );
};
export default ProductList;
