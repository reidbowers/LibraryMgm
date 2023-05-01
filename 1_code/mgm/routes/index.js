/* Dependencies    */
var express = require('express');
var router = express.Router();
var database = require('../database');




/* GET home page. */
router.get('/', function(req, res, next) {

  /* Load Data  */
  var query = "SELECT * FROM `librarymgm`.`media` LIMIT 1000;"

    database.query(query, function(error, data){
        if(error)
        {
            throw error;
        }
        else
        {
            /* Render and Display Data    */
            res.render('index', {title:'CML Search',sampleData:data});
        }
    })
  


});

/* Retrieve Autocomplete data from DB   */
router.get('/get_data', function(request,response, next){

    var search_query = request.query.search_query;

    //Search DB for titles and authors that match the search query
    var query = `
    SELECT title,author FROM media
    WHERE title LIKE '%${search_query}%' OR author LIKE '%${search_query}%'
    LIMIT 10
    `;

    database.query(query, function(error,data){

      if(error){
        throw error;
      }
      else{
        /* Return Results  */
        response.json(data);
      }
      
      

    })
});

//Take search query, send to catalog page, then display on catalog page
router.get('/search', function(req, res){
  const find = req.query.find;
  const query = `
  SELECT * FROM media 
  WHERE title LIKE '%${find}%' OR author LIKE '%${find}%'
  `;

  database.query(query, function(error, results){
    if(error) throw error;
    res.render('catalog', {title:'CML Catalog', action:'search', sampleData:results, message:req.flash('success')});
  });
});

/* Routing for 'Show All' Button  */
router.get("/catalog/", function(request, response, next){
  
  var query = "SELECT * FROM `librarymgm`.`media` LIMIT 1000;"

  database.query(query, function(error, data){
      if(error)
      {
          throw error;
      }
      else
      {
        /* Display catalog  */
          response.render('catalog', {title:'CML Catalog', action:'list', sampleData:data});
      }
  })
});

module.exports = router;
