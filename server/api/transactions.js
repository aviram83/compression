import { setTransaction, data } from "../data/DB.js";

export const getTransactions = (req, res) => {
    const date = Date.now();
    console.log(`${date} Fetch data from service "/api/transactions"`);
    res.json({ data: data.transactions });
}

export const addNewTransaction = (req, res) => {    
    const date = Date.now();
    console.log(`${date} Add new transaction with service "/api/transaction"`);
    setTransaction(req.body);

    res.json({ success: true });
}