const express = require("express");
const userRouter = require("./router/userRouter");
const postRouter = require("./router/postRouter");
const requestRouter = require("./router/requestRouter");
const authRouter = require("./router/authRouter");
const cors = require('cors')
let passport = require("passport");
let cookie = require("cookie-session");
const app = express();

app.use(require('cookie-parser')());

app.use(cors(
    {
      origin: 'https://pepgram.netlify.app',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
  ));
  
  app.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
  })
  

app.use(express.json());
app.use(express.static("public"));
app.use(cookie({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["askjdbajsbvfwfbha"],
    httpOnly:false
}))

app.use(passport.initialize());
app.use(passport.session());



// for google auth
app.use("/api/auth" , authRouter);

//Users =>
//get all users , get a user , create a user ,  update a user , delete a user 
app.use("/api/user" , userRouter);
//POSTS ->
//get all posts , get a post , create a post , update a post , delete a post 
app.use("/api/post" , postRouter);
// REQUESTS ->
app.use("/api/request" , requestRouter);
 

const port = process.env.PORT || 3000;
app.listen(port , function(){
    console.log("app is listeningg at 3000 port !!");
})