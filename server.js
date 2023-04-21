const express = require("express");
const session  = require("express-session");
var cookieParser = require('cookie-parser');
const path = require("path");
const app = express();
const fs = require("fs");
const ejs = require("ejs");
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');



// old code

app.use(express.json());

app.set("views", path.join("views"));

app.set("view engine", "ejs");

app.use('/static', express.static(path.join(__dirname, 'routes')));




app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//  routing 
app.use(cookieParser());

// app.use(express.urlencoded({ extended: true }));
// app.set('trust proxy', 1) // trust first proxy

app.use(session({
  secret: 'keyboard cat',
  
}))




app.get('/', (req, res) => {
  console.log("inside home page 0");
  res.render("index");
});

// app.get('/login', (req, res) => {
//   console.log("inside login page");
//   res.render("index");
// });



app.get('/dashboard', function(req, res, next) {
  // let userData = {};
    userdata={};
    console.log("inside dashboard page 1");
    console.log(req.session.data)
    data = req.session.data
    data = JSON.parse(data)
    // userdata.append(data)
    // console.log(req.session.data)
    // var data = req.session.data;
    // console.log("Priti",data)
    // // userData = JSON.parse(fs.readFileSync("user1.json"));
    // data = data.data
    // data=[];
    res.render('dashboard',{data:data});

})





















app.post("/admin", (req, res, next) => {
  const userData = JSON.parse(fs.readFileSync("login-data.json"));
  console.log("body",req.body)
  console.log(userData)
  const user = userData.users.find(
    (u) => u.username === req.body.username && u.password === req.body.password
  );
  console.log("user",user)
  if (!user) {
      console.log("error")
    res.status(401).json({ error: "Invalid credentials" });
    res.redirect("/");
  }
  else {

    console.log("success")
    let userData = {};
    console.log("dstgh",req.session);
    if (user.username === "paras@example.com") {
      userData = JSON.parse(fs.readFileSync("user1.json"));
      // console.log(userData);
    } else if (user.username === "pranshu@example.com") {
      userData = JSON.parse(fs.readFileSync("user2.json"));
    } else if (user.username === "nikhil@example.com") {
      userData = JSON.parse(fs.readFileSync("user3.json"));
    }
    req.session.data = JSON.stringify(userData.data);
    console.log("Guru"+ req.session.data);
    res.render("dashboard",{data : userData.data});


    // res.status(200).json({ success: "login success" });
  }
});






// app.get('/dashboard', (req, res) => {
//   const isLoggedIn = true;
//   if (isLoggedIn) {
//     res.render('dashboard');

//   } else {
//     res.redirect('/');
//   }
// })

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
