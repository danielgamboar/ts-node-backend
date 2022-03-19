// import express from 'express';

// const app = express();
// app.listen(4000, () => {
//   console.log('server running on port 4000');
// });

import express, { Application } from "express";
import morgan from "morgan";
import Router from "./routes";

// const PORT = process.env.PORT || 4000;
const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));

app.use(Router);

// app.listen(PORT, () => {
//   console.log(`Serving on port ${PORT}`);
// });

export default app;
