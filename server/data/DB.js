var data = {
    transactions: []
};

const setTransactions = (transactions) => {    
    console.log('Set New Transactions');
    data = {
        ...data,
        transactions: [
            ...data.transactions,
            ...transactions
        ]
    }
}

const setTransaction = (transaction) => {    
    console.log('Add New Transactions');
    data.transactions.push(transaction);
    console.log(data);
}

export {
    data,
    setTransactions,
    setTransaction
};
