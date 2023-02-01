// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <form>
        <label for="name">
          Name:
          <input type="text" name="name" required/>
        </label>
        <br/>
        <label for="email">
          Email:
          <input type="text" name="email" required/>
        </label>
        <br/>
        <label for="password">
          Password:
          <input type="password" name="password" required />
        </label>
        <br/>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
