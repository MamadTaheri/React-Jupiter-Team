import React from 'react'

import classes from './Topbar.module.css'

const Topbar = () => {
    return (
      <header>
        <nav className={classes.Topbar}>
        <img src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png" alt="Amazon Logo" />
        </nav>
      </header>
    )
}

export default Topbar