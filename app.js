//backend
import dotenv from "dotenv";
dotenv.config();

//middleware
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import router from "./server/routes/main.js";
import connectDB from "./server/config/db.js";

const app = express();
const port = 3000 || process.env.PORT; //process.env.port is used when you want to publish your project online

//connect to db
connectDB();

app.use(express.static("public"));

//templating engine
app.use(expressEjsLayouts);
app.set("layout", "layouts/main");
app.set("view engine", "ejs");

app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});