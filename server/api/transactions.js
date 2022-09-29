import { initilData } from "../data/transactions.js";

export const getTransactions = (req, res) => {
    const date = Date.now();
    console.log(`${date} Fetch data from service "/api/transactions"`);
    res.json({ data: initilData });
}
