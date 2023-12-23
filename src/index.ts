import express, { Request, Response } from "express";

import createError from "http-errors";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const result = { id: "ini id", name: "ini nama" };
  res.json(result);
});

app.use((req: Request, res: Response, next: Function) => {
  next(createError(404));
});

app.listen(3000, () =>
  console.log(`⚡ [server]: Server is running at https://localhost:3000`)
);
