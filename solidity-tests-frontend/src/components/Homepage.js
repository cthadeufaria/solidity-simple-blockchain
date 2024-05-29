import logo from '../logo.svg';
import React from 'react';


const Homepage = () => {
    const handleSubmit = () => {
        
    }
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <input type="text" placeholder="Enter your input" />
            <button onClick={handleSubmit}>Submit</button>        
          </header>
        </div>
      );
}


export default Homepage;