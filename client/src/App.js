import { useState, useEffect } from 'react';
import Table from './components/Table/Table';
import TransactionModal from './components/TransactionModal/TransactionModal';

import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [payingTransactions, setPayingTransactions] = useState([]);
  const [receivingTransactions, setReceivingTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const splitTransactions = (data) => {
    const paying = [];
    const receiving = [];

    data.forEach(transaction => {
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

  const fetchTransactions = () => {
    fetch('/api/transactions')
    .then(res => res.json())
    .then(data => {
      splitTransactions(data.data);
    });
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  const openTrasactionModal = () => {
    setShowModal(true);
  }

  const closeTrasactionModal = () => {
    setShowModal(false);
  }

  const addNewTransaction = (data) => {
    closeTrasactionModal();
    fetch('/api/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success) {
        fetchTransactions();
      }
    });
  }

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
          <button onClick={openTrasactionModal}>Add New Transaction</button>
          <button>Compress Transactions</button>
        </div>
      </div>
      <TransactionModal
        show={showModal}
        onClose={closeTrasactionModal}
        onSave={addNewTransaction}
      />
    </div>
  );
}

export default App;
