import { setTransaction, data } from "../data/DB.js";

export const getTransactions = (req, res) => {
    const date = new Date();
    console.log(`${date.toLocaleString('en-GB')} - Fetch data from service "/api/transactions"`);
    res.json({ data: data.transactions });
}

export const addNewTransaction = (req, res) => {    
    const date = new Date();
    console.log(`${date.toLocaleString('en-GB')} - Add new transaction with service "/api/transaction"`);
    setTransaction(req.body);

    res.json({ success: true });
}