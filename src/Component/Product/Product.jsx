import React from "react";
import "./Product.css";
const Product = ({ product, handleAddToCart }) => {
  //   console.log(props);
  

  
  const { name, price, stock, img, seller } = product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2 className="product-name">{name}</h2>
        <h2>Price : {price}</h2>
        <h3>Seller : {seller}</h3>
        <p>
          only <strong>{stock} </strong> left - order soon
        </p>
        {/* problem no 1 */}
        <button
          onClick={() => handleAddToCart(product)}
          className="btn-regular"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
