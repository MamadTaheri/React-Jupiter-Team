import logo from './logo.svg';
import './App.css'

function App() {

  const blogObj = {
    title: 'Blog Title 1',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor '
  } 

  return (
    <div className="App">
      <div className="BlogCard">
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p> 
      </div>
      <div className="BlogCard">
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p> 
      </div>
      <div className="BlogCard">
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p> 
      </div> 

    </div>
  );
}

export default App;
