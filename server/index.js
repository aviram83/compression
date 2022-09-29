import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

import { setTransactions } from "./data/DB.js";
import { getTransactions, addNewTransaction } from "./api/transactions.js";
import { initilData } from "./data/mockData.js";

const PORT = process.env.PORT || 3001;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));

setTransactions(initilData);

app.get("/api/transactions", getTransactions);

app.post("/api/transaction", addNewTransaction);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
