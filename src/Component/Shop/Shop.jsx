import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  // state for showing data after searching
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  // useEffect for getStoredCart
  useEffect(() => {
    // console.log(savedCart);
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        // console.log(key, savedCart);

        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          // console.log(addedProduct);
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product.key);
  };
  // searching Handler
  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayProducts(matchedProducts);
    // console.log(matchedProducts.length);
  };
  return (
    <>
      {/* Search field */}
      <div className="search-container">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="search product"
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              handleAddToCart={handleAddToCart}
              product={product}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
    </>
  );
};

export default Shop;
