import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar';
import Count from './components/count';
import Game from './components/game';

/**
 * <Person name="John" age={20}/>
 * let: Poderá receber um novo valor, mas age como uma constante.
 */

export default function App() {
  return (
    <main className="App p-4 pt-16 space-y-4">
      <Navbar/>
      <div className='space-y-4 p-4 rounded border-2 border-black'>
        <header className="App-header space-y-4">
          <h1>
            Hello World!
          </h1>
          <p>
            This is my React app.
          </p>
        </header>
      </div>
      <div className='space-y-4'>
        <Count/>
        <Game/>
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App/> );
