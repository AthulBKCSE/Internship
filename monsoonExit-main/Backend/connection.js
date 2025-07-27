const mongoose = require("mongoose");
//using local MongoDB...
mongoose
  .connect(
    "mongodb://localhost:27017/blogDB",  
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("DB Connection Error:", error);
  });