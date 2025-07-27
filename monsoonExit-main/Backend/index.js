const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const BlogModel = require("./models/Blog"); 

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here
// Missing database connection
mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));
//Write your POST API here
// Missing POST API
app.post("/create", async (req, res) => {
  try {
    const newBlog = new BlogModel(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).send(savedBlog);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Missing PUT (Update) API
app.put("/update/:id", async (req, res) => {
  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updatedBlog);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Missing DELETE API
app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findByIdAndDelete(req.params.id);
    res.send(deletedBlog);
  } catch (error) {
    res.status(400).send(error);
  }
});


app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
