function checkAuth(req , res){
    if(req.user){
        // user is logged in
        console.log("Inside if req.user exist");
        console.log(req);
        console.log(req.user);
        res.json({
            isAuth: true ,
            user : req.user
        })
    }else{
        console.log("Inside if req.user dont exist");
        console.log(req.user);
        console.log(req);
        res.json({
            isAuth:false
        })
    }   
}

function googleAuth(req , res){
    res.send("<h1>GOOGLE CONSENT FORM !!</h1>")
}

function callbackAuth(req , res){
    res.redirect("https://pepgram.netlify.app/");
}

module.exports.checkAuth = checkAuth;
module.exports.googleAuth = googleAuth;
module.exports.callbackAuth = callbackAuth;