import { useState, useEffect } from 'react';
import Table from './components/Table/Table';

import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [payingTransactions, setPayingTransactions] = useState([]);
  const [receivingTransactions, setReceivingTransactions] = useState([]);

  const splitTransactions = (data) => {
    const paying = [];
    const receiving = [];

    data.map(transaction => {
      if (transaction.amount < 0) {
        paying.push(transaction)
      } else {
        receiving.push(transaction);
      }      
    });

    setTransactions(data);
    setPayingTransactions(paying);
    setReceivingTransactions(receiving);
  }

  useEffect(() => {
    fetch('/api/transactions')
      .then(res => res.json())
      .then(data => {
        splitTransactions(data.data);
      });
  },[]);

  return (
    <div className="App">
      <div className="workspace">
        <div className="content">
          <Table 
            label="Paying"
            rows={payingTransactions}
          />
          <Table
            label="Receiving"
            rows={receivingTransactions}
          />
        </div>
        <div className="actions">
          <button>Add New Transaction</button>
          <button>Compress Transactions</button>
        </div>
      </div>
    </div>
  );
}

export default App;
