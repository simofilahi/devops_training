const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const todoController = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://mongo/todo_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((e) => console.error("Unable to connect to MongoDB", e));

app.get("/todos", todoController.getTodos);
app.post("/todo", todoController.createTodo);

app.get("/test", (req, res) => {
  res.send("It's working");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
