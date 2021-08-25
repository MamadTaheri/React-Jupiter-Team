import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'Mohammad'
  const lastName = 'Taheri'
  const age = 32
  const job = 'Web Developer'
  const inputPlaceHolder = 'Enter Your Details'
  
  const detailsInputBox = <input placeholder={inputPlaceHolder}/>

  const mArr = [1, 2, 3, 4, 5]

  const mObj = {
    name: 'Todo',
    age: 30
  }

  const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }

  return (
    <div className="App">
      <h3>Full Name: {firstName} {lastName} </h3>
      <h3>Full Name: {firstName + ' ' + lastName} </h3>
      <h3>Full Name: {`${firstName} ${lastName}`} </h3>
      <h3>Full Name: {getFullName(firstName, lastName)} </h3>
      <p>Age: 20</p>
      <p>Age: {mObj.age}</p>
      <p>Job: web Developer</p>
      <p>Job: {job}</p>

      <input placeholder={inputPlaceHolder}/>
      <br/>

      {detailsInputBox}
      <br/>

      {
        mArr.map((item) => {
          return (<span>{item + ' - '}</span>)
        })
      }
      <br/>

      {
        mArr[0] ? 'Exist' : 'Not Exist'
      }



    </div>
  );
}

export default App;
