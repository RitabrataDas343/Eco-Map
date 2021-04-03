import React from 'react';
import SendTransferForm from './components/SendTransferForm';

import './css/normalize.css';
import './css/skeleton.css';
import './App.css';

export default function App() {
   return (
      <div className="App container">
         <header>
            <h1>Ethereum Transfer</h1>
         </header>
         <SendTransferForm />
      </div>
   );
}
