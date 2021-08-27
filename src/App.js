import React, { Component } from "react";

import classes from "./App.module.css";
import ProductDetails from "./ProductDetails";
import ProductPreview from "./ProductPreview";
import Topbar from "./Topbar";

function App() {  
  return (
    <div className="App">
        <Topbar />

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
