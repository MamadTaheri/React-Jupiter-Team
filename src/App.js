import React from 'react'

import BlogCard from './BlogCard'

import './App.css'

function App() {

  const blogArray = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor '
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor '
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor '
    }
  ] 

  const blogCards = blogArray.map((item, pos) => {

    return (
      <BlogCard key={pos} />
      // <div className="BlogCard" key={item.id}>
      //    <h3>{item.title}</h3>
      //    <p>{item.description}</p> 
      // </div> 
    )

  })

  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
