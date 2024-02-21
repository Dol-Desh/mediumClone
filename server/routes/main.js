import express from "express";
const router = express.Router();
import Post from "../models/post.js";

//routes
router.get("/", (req, res) => {
    const locals = {
        title: "nodeJS blog",
    };
    res.render("index.ejs", locals);
});

function insertPostData() {
    Post.insertMany([
        {
            title: "First backend",
            body: "This is my first dummy test",
        },

        {
            title: "second backend",
            body: "This is my second dummy test",
        },

        {
            title: "Third backend",
            body: "This is my third dummy test",
        }
    ], { timeout: 30000 }, { batchSize: 100 });
}


insertPostData();

router.get("/home", (req, res) => {
    res.render("home.ejs");
});

router.get("/article", (req, res) => {
    res.render("article.ejs");
});

router.get("/write", (req, res) => {
    res.render("write.ejs");
});

export default router;