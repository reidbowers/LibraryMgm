var express = require('express');
var router = express.Router();

var database = require('../database');
/* Retrieve login */ 

//Render login page
router.get("/", function(req, res, next) {
    res.render('login', { title: 'Express', session : req.session });
  });

//Take form data, and validate login info
router.post('/login', function(request, response, next){
    var username = request.body.username;
    var user_password = request.body.user_password;
    
    //Check if forms are filled
    if(username && user_password){
        query = `
        SELECT * FROM user_login
        WHERE username = "${username}"
        `;

        database.query(query, function(error,data){

            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++){ //match password with stored password
                    if(data[count].user_password == user_password){
                        request.session.user_id = data[count].user_id;
                        response.redirect("/");
                    }
                    else{
                        response.send('Incorrect Password'); //Display error to user
                    }

                }
            }
            else{
                response.send('Incorrect Username'); //Display Error
            }
            response.end();
        });
    }
    else{
        response.send('Please enter username and password') // Neither field has been entered
        response.end();
    }

});


module.exports = router;