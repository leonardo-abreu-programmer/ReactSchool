import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar';

export default function App() {
  return (
    <main className="App">
      <Navbar/>
      <header className="App-header">
        <h1>
          Hello World!
        </h1>
        <p>
          This is my React app.
        </p>
      </header>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App/> );
