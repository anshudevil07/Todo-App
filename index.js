const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = 8000;

const db = require("./config/mongoose");
const Task = require("./models/task");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("assets")); //middleware


app.get("/", function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log("Error in fetching tasks");
      return;
    }

    return res.render("home", {
      title: "ToDo List",
      current_tasks: tasks,
    });
  });
});

app.post("/create-task", function (req, res) {
  Task.create(req.body);

  return res.redirect("/");
});

app.get("/update-tasks/", function (req, res) {
  var updateThisArray = req.query.updateArray.split(",");

  for (let i of updateThisArray) {
    Task.findByIdAndUpdate(i, { completionStatus: true }, function (err) {
      if (err) {
        console.log("Error in updating the task");
        return;
      }
      res.redirect;
    });
  }

  return res.redirect("/");
});

app.get("/delete-tasks/", function (req, res) {
  var deleteThisArray = req.query.deleteArray.split(",");

  for (let i of deleteThisArray) {
    Task.findByIdAndDelete(i, function (err) {
      if (err) {
        console.log("Error in deleting the task");
        return;
      }
      res.redirect;
    });
  }

  return res.redirect("/");
});

app.listen(port, function (err) {
  if (err) {
    console.log("There is an error launching the site: ", err);
  }

  console.log(`The express server is running on port: ${port}`);
});
