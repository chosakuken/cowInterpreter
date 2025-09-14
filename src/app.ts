import express, { Application, Request, Response } from "express";
import nunjucks from "nunjucks";
const app: Application = express();
const port = 8080;

// nunjucks の設定
function setupNunjucks(): void {
  // 第一引数でパスの指定
  nunjucks.configure("views", {
    autoescape: true, // 自動エスケープ
    express: app, // エクスプレスインスタンスと結びつける
  });
}

setupNunjucks();

app.get("/", (req: Request, res: Response): void => {
  res.render("top.njk");
});

app.listen(port, (): void => {
  console.log("App listen at 8080");
});
