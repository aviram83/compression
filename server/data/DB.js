var data = {
    transactions: []
};

const setTransactions = (transactions) => {    
    console.log('DB - Set New Transactions');
    data = {
        ...data,
        transactions: [
            ...data.transactions,
            ...transactions
        ]
    }
}

const setTransaction = (transaction) => {    
    console.log('DB - Add New Transaction');
    data.transactions.push(transaction);    
}

export {
    data,
    setTransactions,
    setTransaction
};
