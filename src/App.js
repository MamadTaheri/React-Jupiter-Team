import React, { Component } from 'react'

import BlogHomePageCard from './BlogCard'
import { isArrayEmpty as isMyArrayEmpty } from './Utils'

import './App.css'

class App extends React.Component {
  state = {
    showBlogs: true
  }

   blogArray = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor ',
      likeCount: 0,
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor ',
      likeCount: 0,
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor ',
      likeCount: 0,
    }
  ]  

  onLikeBtnClick = () => {
    alert('like btn clicked')
  }

   blogCards = isMyArrayEmpty(this.blogArray) ? [] : this.blogArray.map((item, pos) => {

    return (
      <BlogHomePageCard 
        key={pos} 
        title={item.title} 
        description={item.description}
        id={item.id} 
        likeCount={item.likeCount}
        onLikeBtnClick={this.onLikeBtnClick}
      />
      // <div className="BlogCard" key={item.id}>
      //    <h3>{item.title}</h3>
      //    <p>{item.description}</p> 
      // </div> 
    ) 
  })
  
   onHideBtnClick = () => {
    //  let updatedState = !this.state.showBlogs
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    })

    console.log(this.state.showBlogs)
  }

  render() {
    console.log('Render')
    return(
      <div className="App">
      <button onClick ={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
      <br/>
      {
        this.state.showBlogs ? this.blogCards : null
      }
    </div>
    )
  } 
}

export default App;
