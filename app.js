import express from 'express';

const app = express()
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");

app.get("/", (_, res) => {
    res.render("pages/index.html.ejs")
});

app.get("/blog", (_, res) => {
    res.render("pages/blog.html.ejs")
});

app.get("/contact", (_, res) => {
    res.render("pages/contact.html.ejs")
});

app.listen(PORT);

