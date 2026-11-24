import React from "react";

// Child component receives product name and price through props.
function Product(props) {
  return (
    <div className="product">
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}

// Parent component passes details of four products.
function App() {
  return (
    <div className="container">
      <h1>UPI App Products</h1>
      <Product name="Mobile" price="15000" />
      <Product name="Laptop" price="45000" />
      <Product name="Headphones" price="2000" />
      <Product name="Smart Watch" price="3000" />
    </div>
  );
}

export default App;
