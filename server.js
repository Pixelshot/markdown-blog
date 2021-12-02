const express = require("express");
// import articleRouter from "./routes/articles.js";
const articleRouter = require("./routes/articles");

const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "Test Article 2",
      createdAt: new Date(),
      description: "Test description 2",
    },
  ];

  res.render("articles/index", { articles: articles });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
