// 1. import libararies
const express = require("express")
const multer = require("multer")
const nedb = require("@seald-io/nedb")

// 2. variables/ initializing using libaries
const app = express()
const upload = multer({
    dest:"public/uploads"
})

// sets up normal database
let database = new nedb({
	filename: 'database.txt',
	autoload: true,
});
// sets up user database
const userdb = new nedb({
	filename: 'userdb.txt',
	autoload: true,
});

// 3. middleware
app.use(express.static("public")); //allow for front-end assets
app.use (express.urlencoded({extended:true})); //allows for request.body
app.set("view engine","ejs");
app.use(express.json());


// 4.routes
app.get("/",(req,res)=>{
    res.render("index.ejs")
})

// people type post
app.post('/save-observation', (req, res) => {
    const { personId, text } = req.body;
    
    database.insert({ personId, text }, (err, newDoc) => {
        if (err) return res.status(500).send(err);
        res.status(201).json(newDoc);
		// ?????????
    });
});

app.get('/get-observations', (req, res) => {
    database.find({}, (err, docs) => {
        if (err) return res.status(500).send(err);
        res.json(docs);
    });
});





// 5.serve the data using
app.listen(8000,()=>{
    console.log("server is running")
})