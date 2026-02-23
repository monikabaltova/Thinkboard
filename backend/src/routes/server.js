import express from "express";
import notesRouter from "./notesRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api/notes", notesRouter);

connectDB();

app.listen(PORT, () => {
  console.log("Server is listening on PORT:", PORT);
});
