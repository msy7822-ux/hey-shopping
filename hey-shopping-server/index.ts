import express, { Application, Request, Response } from "express";

const app: Application = express();
// NOTE: Next.jsのために3000番PORTを空ける
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (_req: Request, res: Response) => {
  return res.status(200).json({
    message: "Hello World!",
  });
});

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
