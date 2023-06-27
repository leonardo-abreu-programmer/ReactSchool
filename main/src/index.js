import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar';

export default function App() {
  return (
    <main className="App">
      <Navbar/>
      <div className='p-4 pt-16'>
        <header className="App-header space-y-4">
          <h1>
            Hello World!
          </h1>
          <p>
            This is my React app.
          </p>
        </header>
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App/> );
