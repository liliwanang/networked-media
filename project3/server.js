const express = require("express");
const multer = require("multer");

const app = express();
const uploadProcessor = multer({ dest: "public/uploads/" });

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");




let sparks = [];
let sparkId = 0; 

// timeline! 

app.get("/",(request,response)=>{
    response.render("index.ejs",{allSparks: sparks});
});

// NEW SPARK
app.get("/new", (req, res) => {
  res.render("new.ejs");
});

// ADD SPARK
app.post("/addSpark", uploadProcessor.single("media"), (req, res) => {

  let newSpark = {
    id: sparkId,
    title: req.body.title,
    idea: req.body.idea,
    category: req.body.category,
    date: req.body.date
  };

  if (req.file) {
    newSpark.media = req.file.filename;
  }

  console.log(newSpark);
  sparkId++;
  sparks.push(newSpark);

  res.redirect("/");
});

app.listen(8080, () => {
  console.log("Server running on 5001");
});