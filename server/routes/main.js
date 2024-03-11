import express from "express";
const router = express.Router();
import Post from "../models/post.js";
// import EditorJS from '@editorjs/editorjs';

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

router.get("/home", (req, res) => {
  res.render("home.ejs");
});

router.get("/article", (req, res) => {
  res.render("article.ejs");
});

router.get("/write", (req, res) => {
  res.render("write.ejs");
});

router.get("/image", (req, res) => {
  res.render("image.ejs");
});

//article route
//GET Post:id
router.get("/article/:id", async (req, res) => {

  try {
    let slug = req.params.id;
    const data = await Post.findById({_id: slug});

    const locals = {
      title: data.title,
    };

    res.render("article.ejs", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

//search route
//POST searchTerm
router.post("/search", async (req, res) => {

  try {
    const locals = {
      title: "Search"
    };

    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "");
    const data = await Post.findById({
      $or: [
        {title: {$regex: new RegExp(searchNoSpecialChar, "i")}},
        {title: {$regex: new RegExp(searchNoSpecialChar, "i")}}
      ]
    });

    res.render("search", {
      data,
      locals
    });
  } catch (error) {
    console.log(error);
  }
});

//editorjs
// router.post('/save', async (req, res) => {
//   try {
//     const editorjsData = req.body;
//     const content = new Content({ data: editorjsData });
//     await content.save();
//     res.status(201).send('Content saved successfully');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error saving content');
//   }
// });

// router.get('/content', async (req, res) => {
//   try {
//     const content = await Content.findOne().sort({ _id: -1 });
//     res.json(content.data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error fetching content');
//   }
// });

// mongoose.connect('mongodb://localhost:27017/editorjs', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

export default router;
