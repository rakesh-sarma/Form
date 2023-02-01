// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [Name, setName]= useState("")
  function handleName(e) {
    setName(e.target.value)
    console.log("Name:",Name);
  }
  function handleEmail(e) {
    setName(e.target.value)
    console.log("Email:",Name);
  }
  function handlePsw(e) {
    setName(e.target.value)
    console.log("Password:",Name);
  }
  return (
    <div className="App">
      <form>
        <label>Name:</label>
        <input type="text" name="name" required onChange={handleName} />
        <br />
        <label>Email: </label>
        <input type="text" name="email" required onChange={handleEmail}/>
        <br />
        <label>Password: </label>
        <input type="password" name="password" required onChange={handlePsw}/>

        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
