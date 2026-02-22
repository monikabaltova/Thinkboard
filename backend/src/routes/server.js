import express from "express";
import notesRouter from "./notesRoutes.js";

const app = express();

app.use("/api/notes", notesRouter);

app.listen(8000, () => {
  console.log("Server is listening on PORT: 8000");
});
