import express from "express";
import { client } from "./db.js";
const app = express();

// middleware

app.use((req, res, next) => {
  if (req.url === "/bagas") {
    console.log("Bagas");
  }
  console.log(req.url);
  next();
});

// route
app.get("/api/romi", (_req, res) => {
  res.send("romi");
});
app.get("/api/mahasiswa",async (_req,res)=>{
  const result = await client.query("SELECT * FROM mahasiswa");
  res.send(result.rows);
});
app.listen(3000, () => {
  console.log("gassss");
});
