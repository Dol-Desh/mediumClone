import express from "express";
const router = express.Router();
import Post from "../models/post.js";

//routes
router.get("/", async (req, res) => {
  const locals = {
    title: "nodeJS blog",
  };

  try {
    const data = await Post.find();
    res.render("index.ejs", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

function insertPostData() {
  Post.insertMany(
    [
      {
        name: "Mark Humphries",
        location: "The Spike",
        title: "2023: A Review of the Year in Neuroscience",
        body: "Dopamine is not the only fruit",
        duration: "6 min read",
        category: "Psychology"
      },

      {
        name: "Cassie Kozyrkov",
        title: "Willpower Is Not The Solution",
        body: "For this year’s round of New Year's Resolutions, try brainpower instead of willpower",
        duration: "6 min read",
        category: "Motivation"
      },
    ],
  );
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
