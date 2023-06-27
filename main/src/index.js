import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar';
import Count from './components/count';

export default function App() {
  return (
    <main className="App">
      <Navbar/>
      <div className='p-4 pt-16 space-y-4'>
        <header className="App-header space-y-4">
          <h1>
            Hello World!
          </h1>
          <p>
            This is my React app.
          </p>
        </header>
        <Count/>
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App/> );
