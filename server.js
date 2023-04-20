const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const ejs = require("ejs");
const port = process.env.PORT || 3000;




// old code

app.use(express.json());

app.set("views", path.join("views"));

app.set("view engine", "ejs");

app.use('/static', express.static(path.join(__dirname, 'routes')));




//  routing 




app.get('/', (req, res) => {
  console.log("inside home page 0");
  res.render("index");
});

app.get('/login', (req, res) => {
  console.log("inside login page");
  res.render("index");
});



// app.get('/dashboard', (req, res) => {
//     console.log("inside dashboard page 1");
//     res.render('dashboard');

// })





















app.use(express.urlencoded({ extended: true }));


app.post("/admin", (req, res) => {
  const userData = JSON.parse(fs.readFileSync("login-data.json"));

  const user = userData.users.find(
    (u) => u.username === req.body.username && u.password === req.body.password
  );

  if (!user) {
    res.status(401).json({ error: "Invalid credentials" });
  } else {
    let userData = {};
    if (user.username === "paras@example.com") {
      userData = JSON.parse(fs.readFileSync("user1.json"));
      // console.log(userData);
    } else if (user.username === "pranshu@example.com") {
      userData = JSON.parse(fs.readFileSync("user2.json"));
    } else if (user.username === "nikhil@example.com") {
      userData = JSON.parse(fs.readFileSync("user3.json"));
    }

    res.render("dashboard", { data: userData.data });
  }
});






app.get('/dashboard', (req, res) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    res.render('dashboard');

  } else {
    res.redirect('/');
  }
})

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
