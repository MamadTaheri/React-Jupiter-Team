import React, { Component } from "react";

import classes from "./App.module.css";
import ProductDetails from "./ProductDetails";
import ProductPreview from "./ProductPreview";

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img
            src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png"
            alt="Amazon Logo"
          />
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
            <ProductPreview />
        </div>

        <div className={classes.ProductData}>
            <ProductDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
