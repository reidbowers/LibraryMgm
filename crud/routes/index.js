var express = require('express');
var router = express.Router();

var database = require('../database');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });


});

router.get('/get_data', function(request,response, next){

    var search_query = request.query.search_query;

    var query = `
    SELECT title FROM media
    WHERE title LIKE '%${search_query}%'
    LIMIT 10
    `;

    database.query(query, function(error,data){

      if(error){
        throw error;
      }
      else{
        response.json(data);
      }
      
      

    })
});

module.exports = router;
