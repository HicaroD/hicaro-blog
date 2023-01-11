import express from 'express';

const app = express()
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");

app.get("/", (_, res) => {
    res.render("pages/index")
});

app.get("/blog", (_, res) => {
    res.render("pages/blog.ejs.html")
});

app.get("/contact", (_, res) => {
    res.render("pages/contact")
});

app.listen(PORT);

