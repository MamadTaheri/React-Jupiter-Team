import React, { Component } from 'react'

import classes from './App.module.css'
import ProductData from './ProductData';

function App() {  
    return(
      <div className="App">
        <header className="App-header">
          <nav className={classes.Topbar}>
            <img src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png" alt="Amazon Logo" />
          </nav>
        </header>

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />
          </div>

          <div className={classes.ProductData}>
            <h1>{ProductData.title}</h1>
          </div>
        </div>
      </div>
    ) 
}

export default App;
