const express = require("express");
const app = express();
const fs = require("fs");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use("/data", express.static(__dirname + "/data"));

const quizFileDir = fs
  .readdirSync("./data")
  .filter((name) => name.endsWith(".js"));

const quizzes = [];

for (const file of quizFileDir) {
  const quizFile = require(`./data/${file}`);
  quizzes.push({
    title: quizFile.quizData.title,
    slug: file.replace(".js", "")
  });
}

// Routes
app.get("/", (req, res) => {
  res.render("index", { quizzes });
});

app.get("/quiz", (req, res) => {
  res.render("quiz", { query: req.query.name });
});

const port = 3000;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;