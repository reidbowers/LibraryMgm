var express = require('express');
var router = express.Router();

var database = require('../database');
/* Retrieve login */ 

router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express', session : req.session });
  });


router.post('/login', function(request, response, next){
    var username = request.body.username;
    var user_password = request.body.user_password;
    
    if(username && user_password){
        query = `
        SELECT * FROM user_login
        WHERE username = "${username}"
        `;

        database.query(query, function(error,data){

            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++){
                    if(data[count].user_password == user_password){
                        request.session.user_id = data[count].user_id;
                        response.redirect("/catalog");
                    }
                    else{
                        response.send('Incorrect Password');
                    }

                }
            }
            else{
                response.send('Username not found');
            }
            response.end();
        });
    }
    else{
        response.send('Please enter username and password')
        response.end();
    }

});


router.get('/logout', function(request, response, next){
    request.session.destroy();
    response.redirect("/");
});

module.exports = router;