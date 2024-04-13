//environment variables
import dotenv from "dotenv";
dotenv.config();

//packages
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import router from "./server/routes/main.js";
import admin from "./server/routes/admin.js";
import connectDB from "./server/config/db.js";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import session from "express-session";

const app = express();
const port = 3000 || process.env.PORT; //process.env.port is used when you want to publish your project online

//connect to db
connectDB();

//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser())

app.use(session({
  secret: "tomato grotesk",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI
  })

}))

app.use(express.static("public"));

//templating engine
app.use(expressEjsLayouts);
app.set("layout", "layouts/main");
app.set("view engine", "ejs");

app.use("/", router);
app.use("/", admin);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});