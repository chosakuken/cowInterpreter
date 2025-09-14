import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 8080;

app.get("/", (req: Request, res: Response): void => {
  res.send("hello world");
});

app.listen(port, (): void => {
  console.log("App listen at 8080");
});
