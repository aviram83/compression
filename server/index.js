import express from "express";
import bodyParser from "body-parser";

import { setTransactions } from "./data/DB.js";
import { getTransactions, addNewTransaction } from "./api/transactions.js";
import { initilData } from "./data/mockData.js";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded());
app.use(express.json());

setTransactions(initilData);

app.get("/api/transactions", getTransactions);

app.post("/api/transaction", addNewTransaction);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
