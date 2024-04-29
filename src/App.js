import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '20/02/2024',
      description: 'Sunglasses',
      category: 'Fashion',
      amount: '$20',
    },
    {
      id: 2,
      date: '25/02/2024',
      description: 'Birthday',
      category: 'Shopping',
      amount:'$500',
    },
  ]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <h1>The Royal Bank Of Flatiron</h1>
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar transactions={transactions} setTransactions={setTransactions} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App ;