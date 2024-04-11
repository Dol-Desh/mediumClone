import express from "express";
const router = express.Router();
import Post from "../models/post.js";

router.get("/admin", async (req, res) => {
  try {
    const locals = {
      title: "Admin",
    };

    const data = await Post.find();
    res.render("admin/index.ejs", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

export default router;
