var express = require('express');
var router = express.Router();

var database = require('../database');




/* GET home page. */
router.get('/', function(req, res, next) {

  var query = "SELECT * FROM `librarymgm`.`media` LIMIT 1000;"

    database.query(query, function(error, data){
        if(error)
        {
            throw error;
        }
        else
        {
            res.render('index', {title:'CML Search',sampleData:data});
        }
    })
  


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




router.get("/sample_data/", function(request, response, next){

  var query = "SELECT * FROM `librarymgm`.`media` LIMIT 1000;"

  database.query(query, function(error, data){
      if(error)
      {
          throw error;
      }
      else
      {
          response.render('sample_data', {title:'CML Catalog', action:'list', sampleData:data});
      }
  })
});


/*   WIP Routing for Search selection
router.get('/get_isbn', function(request, response, next){
  var search_query = request.query.search_query;
  
  var query = `SELECT isbn FROM media WHERE title = '${search_query}'`;

  database.query(query, function(error,data){
    if(error){
      throw error;
    }
    else{
      response.json(data);
    }
  })
*/
module.exports = router;
