import express from "express";

import { getTransactions } from "./api/transactions.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/transactions", getTransactions);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
