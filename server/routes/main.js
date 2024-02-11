import express from "express";
const router = express.Router();

//routes
router.get("/", (req, res) =>{
    const locals={
        title: "nodeJS blog"
    }
    res.render("index.ejs", locals);
});

router.get("/home", (req, res) =>{
    res.render("home.ejs");
});

router.get("/article", (req, res) =>{
    res.render("article.ejs");
});

export default router;