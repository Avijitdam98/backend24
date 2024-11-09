import dotenv from "dotenv";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("This is a twitter");
});
app.get("/login", (req, res) => {
  res.send("<h1>Log in Please</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h3>YouTube</h3>");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${port}`);
});
