import Table from './components/Table/Table';

import './App.css';

const transactions = [
  { tradingParty: "me", counterparty: "you", amount: -400 },
  { tradingParty: "me", counterparty: "you", amount: 500 },
  { tradingParty: "me", counterparty: "someone_else", amount: 100 },
]


function App() {
  return (
    <div className="App">
      <div className="workspace">
        <div className="content">
          <Table 
            label="Paying"
            rows={transactions}
          />
          <Table
            label="Receiving"
            rows={transactions}
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
