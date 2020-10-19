import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from 'react-hook-form'

// Run => npm install react-hook-form
// If you find error Warning: Function components cannot be given refs. To solve this error try "innerRef" instead of ref on form fields. e.g line 23 and 24

const onSubmit = data => {
  console.log(data);
}
function App() {
  const { register , handleSubmit , errros} = useForm();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" name="email" ref={register} />
          <input type="checkbox" name="contact[]" id="contact-one" value="1" ref={register} /> <label htmlFor="contact-one">One</label>
          <input type="checkbox" name="contact[]" id="contact-two" value="2" ref={register} /> <label htmlFor="contact-two">Two</label>
          <button type="submit">Submit</button>
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
